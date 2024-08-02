<template>
    <div v-if="preloading" class="gids">
        <div class="gids-block">
            <div class="wrapper">
                <div class="gids-wrapper">
                    <img src="@/assets/images/image5.png" alt="">
                    <p class="bold">{{$t('listTop')}}</p>
                </div>
                <div class="gids-table">
                    <div class="gt-stats">
                        <div class="gt-stat">
                            <label for="">{{$t('activeCert')}}</label>
                             <p>1</p>
                            <p>{{table?.activeCount}}</p>
                        </div>
                        <div class="gt-stat">
                            <label for="">{{$t('expCert')}}</label>
                            <p>0</p>
                            <p>{{table?.expiredCount}}</p>
                        </div>
                        <div class="gt-stat">
                            <label for="">{{$t('cancelCert')}}</label>
                            <p>0</p>
                            <p>{{table?.canceledCount}}</p>
                        </div>
                    </div>
                    <div>
                        <div class="gids-in">
                            <div class="gt-search">
                                <input @keypress.enter="searchF" v-model="search_text" :placeholder="placeholder==true ? $t('inputFT') : $t('inputS')" type="text">
                                <button @click="searchF">{{$t('inputS')}}</button>
                            </div>
                        </div>
                        <p v-if="placeholder==false">{{ $t('searchMob') }}</p>
                    </div>
                    <div class="gt-tabs">
                        <div class="gt-select">
                            <label for="">{{$t('guide_type')}}</label>
                            <el-select @change="changeFilter" v-model="filter.guide_type" class="m-2" placeholder="Variant tanlang" >
                                <el-option
                                v-for="item in gtype"
                                :key="item.value"
                                :label="item.name?.[$i18n.locale]"
                                :value="item.value"
                                />
                            </el-select>
                        </div>
                        <div class="gt-select">
                            <label for="">{{$t('guides')}}</label>
                            <el-select @change="changeFilter" v-model="filter.hasCertificate" class="m-2" placeholder="Variant tanlang" >
                                <el-option
                                v-for="item in certList"
                                :key="item.value"
                                :label="item.name?.[$i18n.locale]"
                                :value="item.value"
                                />
                            </el-select>
                        </div>
                        <div class="gt-select">
                            <label for="">{{$t('certGuides')}}</label>
                            <el-select @change="changeFilter" v-model="filter.activity" class="m-2" placeholder="Select" size="large">
                                <el-option
                                v-for="item in gtab"
                                :key="item.value"
                                :label="item.name?.[$i18n.locale]"
                                :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <div class="gt-tb">
                        <div class="table">
                            <div class="thead">
                                <div class="td">#</div>
                                <div class="td">{{$t('FIO')}}</div>
                                <div class="td">{{$t('certNumber')}}</div>
                                <div class="td">{{$t('langs')}}</div>
                                <div class="td">{{$t('category')}}</div>
                                <div class="td">{{$t('regions')}}</div>
                            </div>
                            <div v-if="!loading" class="tbody">
                                <div class="td"></div>
                                <div class="td">{{$t('downloading')}}</div>
                                <div class="td">{{$t('downloading')}}</div>
                                <div class="td">{{$t('downloading')}}</div>
                                <div class="td">{{$t('downloading')}}</div>
                                <div class="td">{{$t('downloading')}}</div>
                            </div>
                            <div v-else @click="$router.push({name:'volunteers_id', query:{id:el?.data_token}})" class="tbody" v-for="el,index in table?.rows" :key="index">
                                <div class="td">{{offset+index+1}}</div>
                                <div class="td"><img :src="'https://culturevolunteers.uz/api/cdn/'+el?.member_photo" alt=""><p>{{el?.first_name}} {{el?.last_name}} {{el?.middle_name}}</p></div>
                                <div class="td">{{el?.badges?.[0]?.reg_num}}</div>
                                <div class="td"><span v-for="item,idx in el?.languages" :key="idx">{{langs[item-1]?.name?.[$i18n.locale]}}, </span></div>
                                <div class="td"><span v-if="el?.category==0">{{no_category?.name[$i18n.locale]}}</span><span v-else-if="el?.category==1 || el?.category==2">{{el?.category}}-{{num_category?.name[$i18n.locale]}}</span><span v-else-if="el?.category==10">{{best_category?.name[$i18n.locale]}}</span></div>
                                <div class="td"><span v-for="item,idx in el?.regions" :key="idx">{{regions[item-1]?.name?.[$i18n.locale]}}, </span></div>                                                                                                                                                                                                                                                                                                                      </div>
                        </div>
                    </div>
                </div>
                <Pagination :staticCurrentPage="page" @goingToPage="goingToPage" @next="goingToPage" @prev="goingToPage" v-if="loading" :pages="pages"/>
            </div>
        </div>
    </div>
    <preLoader v-else/>
</template>
<script>
import preLoader from '@/components/preLoader.vue'
import Pagination from "@/components/paginatorButtons.vue"
export default {
    data(){
        return{
            limit:20,
            preloading: false,
            offset:0,
            pages: 0,
            page: 1,
            placeholder: true,
            table:{},
            filter:{
                hasCertificate: '',
                guide_type: '',
                activity: ''
            },
            gtype: [
                {id: 1,
                value: '',
                name: {
                    en: 'All',
                    ru: 'Все',
                    uz: 'Barchasi',
                }},
                {id: 2,
                value: 'interpreter',
                name: {
                    ru: 'Гид (гид-переводчик)',
                    uz: 'Gid-tarjimon',
                }},
                {id: 3,
                value: 'excursion_guide',
                name: {
                    ru: 'Руководитель экскурсии',
                    uz: 'Ekskursiya yetakchisi',
                }},
                {id: 4,
                value: 'mountain_guide',
                name: {
                    ru: 'Путеводитель',
                    uz: 'Yo‘riqchi-yo‘l boshlovchi',
                }}
            ],
            gtab: [
                {id: 1,
                value: '',
                name: {
                    en: 'All',
                    ru: 'Все',
                    uz: 'Barchasi',
                }},
                {id: 2,
                value: 'active',
                name: {
                    en: 'Guides with valid certificates',
                    ru: 'Гиды с активным сертификатом',
                    uz: 'Muddati amalda bo‘lgan gidlar',
                }},
                {id: 3,
                value: 'expired',
                name: {
                    en: 'Guides whose certificates have expired',
                    ru: 'Гиды с просроченным сертификатом',
                    uz: 'Muddati o‘tib ketgan gidlar',
                }},
                {id: 4,
                value: 'canceled',
                name: {
                    en: 'Guides whose certificate has been invalidated',
                    ru: 'Гиды с аннулированным сертификатом',
                    uz: 'Bekor qilingan gidlar',
                }}
            ],
            certList: [
                {id: 1,
                value: '',
                name: {
                    en: 'All',
                    ru: 'Все',
                    uz: 'Barchasi',
                }},
                {id: 2,
                value: 'exist',
                name: {
                    en: 'Certified guides',
                    ru: 'Сертифицированные гиды',
                    uz: 'Sertifikati mavjud gidlar',
                }}
            ],
            regions:[
                {
                    id: 1,
                    name: {
                        ru: 'Андижанская область',
                        en: 'Andijan region',
                        uz: 'Andijon viloyati',
                    }
                },
                {
                    id: 2,
                    name: {
                        ru: 'Бухарская область',
                        en: 'Bukhara region',
                        uz: 'Buxoro viloyati',
                    }
                },
                {
                    id: 3,
                    name: {
                        ru: 'Ферганская область',
                        en: 'Ferghana region',
                        uz: 'Farg‘ona viloyati',
                    }
                },
                {
                    id: 4,
                    name: {
                        ru: 'Джизакская область',
                        en: 'Jizzakh region',
                        uz: 'Jizzax viloyati',
                    }
                },
                {
                    id: 5,
                    name: {
                        ru: 'Наманганская область',
                        en: 'Namangan region',
                        uz: 'Namangan viloyati',
                    }
                },
                {
                    id: 6,
                    name: {
                        ru: 'Навоийская область',
                        en: 'Navoi region',
                        uz: 'Navoiy viloyati',
                    }
                },
                {
                    id: 7,
                    name: {
                        ru: 'Кашкадарьинская область',
                        en: 'Kashkadarya region',
                        uz: 'Qashqadaryo viloyati',
                    }
                },
                {
                    id: 8,
                    name: {
                        ru: 'Республика Каракалпакстан',
                        en: 'Republic of Karakalpakstan',
                        uz: 'Qoraqalpog‘iston Respublikasi',
                    }
                },
                {
                    id: 9,
                    name: {
                        ru: 'Самаркандская область',
                        en: 'Samarkand region',
                        uz: 'Samarqand viloyati',
                    }
                },
                {
                    id: 10,
                    name: {
                        ru: 'Сырдарьинская область',
                        en: 'Syrdarya region',
                        uz: 'Sirdaryo viloyati',
                    }
                },
                {
                    id: 11,
                    name: {
                        ru: 'Сурхандарьинская область',
                        en: 'Surkhandarya region',
                        uz: 'Surxondaryo viloyati',
                    }
                },
                {
                    id: 12,
                    name: {
                        ru: 'город Ташкент',
                        en: 'Tashkent city',
                        uz: 'Toshkent shahri',
                    }
                },
                {
                    id: 13,
                    name: {
                        ru: 'Ташкентская область',
                        en: 'Tashkent region',
                        uz: 'Toshkent viloyati',
                    }
                },
                {
                    id: 14,
                    name: {
                        ru: 'Хорезмская область',
                        en: 'Khorezm region',
                        uz: 'Xorazm viloyati',
                    }
                },
                {
                    id: 15,
                    name: {
                        ru: 'Горы Узбекистана',
                        en: 'Mountains of Uzbekistan',
                        uz: 'O‘zbekiston tog‘lari',
                    }
                },
            ],
            langs:[],
            no_category:{
                name:{
                    uz: 'Toifasiz',
                    ru: 'Без категории',
                    en: 'Uncategorized',
                }
            },
            num_category:{
                name:{
                    uz: 'toifa',
                    ru: 'категория',
                    en: 'category',
                }
            },
            best_category:{
                name:{
                    uz: 'Oliy toifa',
                    ru: 'Высшая категория',
                    en: 'High category',
                }
            },
            search_text: this.$route.query.search_text,
            search: false,
        }
    },
    components:{
        preLoader,
        Pagination,
    },
    watch: {
    '$route.query.search_text': function(val) {
            this.search_text = val;
        }
    },
    methods:{
        goingToPage(){
            this.page = this.$route.query.page || 1
            this.offset = (this.page-1) * 20
            this.loading = false
            var params = {}
            params.limit = this.limit
            params.offset = this.offset
            !!this.search_text && (params.searchWord = this.search_text);
            !!this.filter.hasCertificate && (params.hasCertificate = this.filter.hasCertificate);
            !!this.filter.activity && (params.activity = this.filter.activity);
            this.filter.guide_type && (params.guide_type = this.filter.guide_type);
            this.$axios.get('volunteers',{params:{...params}}).then((el)=>{
                this.table = el?.data?.result
                this.loading = true
            }) 
        },
        searchF(){
            this.offset = 0
            this.loading = false
            var params = {}
            params.limit = this.limit
            params.offset = this.offset
            !!this.search_text && (params.searchWord = this.search_text);
            !!this.filter.hasCertificate && (params.hasCertificate = this.filter.hasCertificate);
            !!this.filter.activity && (params.activity = this.filter.activity);
            this.filter.guide_type && (params.guide_type = this.filter.guide_type);
            this.$axios.get('volunteers',{params:{...params}}).then((el)=>{
                this.table = el?.data?.result
                this.pages = Math.ceil(this.table?.count/this.limit)
                this.$router.push({ query: { ...this.$route.query, search_text: this.search_text } });
                this.loading = true
            })   
        },
        changeFilter(){
            this.page = 1
            this.offset = (this.page-1) * 20
            this.$router.push({
                query: {
                    ...this.$route.query,
                    page: this.page,
                    activity: this.filter.activity,
                    hasCertificate: this.filter.hasCertificate,
                    guide_type: this.filter.guide_type
                }
            })
            var params = {}
            params.limit = this.limit
            params.offset = this.offset
            !!this.search_text && (params.searchWord = this.search_text);
            !!this.filter.hasCertificate && (params.hasCertificate = this.filter.hasCertificate);
            !!this.filter.activity && (params.activity = this.filter.activity);
            this.filter.guide_type && (params.guide_type = this.filter.guide_type);
            this.loading = false
            this.$axios.get('volunteers',{params:{...params}}).then((el)=>{
                this.table = el?.data?.result
                this.pages = Math.ceil(this.table?.count/this.limit)
                 this.loading = true
            })
        },
    },
    mounted(){
       this.preloading = false
       this.langs = this.$store.langs
       if(window.innerWidth<834){
        this.placeholder = false
       }
       this.loading = false
       this.page = this.$route.query.page || 1
       this.offset = (this.page-1) * 20
       this.filter.activity = this.$route.query.activity || ''
       this.filter.hasCertificate = this.$route.query.hasCertificate || ''
       this.filter.guide_type = this.$route.query.guide_type || ''
       this.search_text = this.$route.query.search_text
        var params = {}
        params.limit = this.limit
        params.offset = this.offset
        !!this.search_text && (params.searchWord = this.search_text);
        !!this.filter.hasCertificate && (params.hasCertificate = this.filter.hasCertificate);
        !!this.filter.activity && (params.activity = this.filter.activity);
        this.filter.guide_type && (params.guide_type = this.filter.guide_type);
       this.$axios.get('volunteers',{params:{...params}}).then((el)=>{
            this.table = el?.data?.result
            this.pages = Math.ceil(this.table?.count/this.limit)
            this.loading = true
            this.preloading = true
        })
    }
}
</script>