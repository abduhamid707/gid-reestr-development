<template>
    <div v-if="preloading" class="gids">
        <div class="gids-sg">
            <div class="wrapper">
                <div class="gids-sg-wrapper">
                    <img src="@/assets/images/image6.png" alt="">
                </div>
                <div v-if="loading" class="gids-breadbrumbs">
                    <router-link :to="'/'+this.$i18n.locale+'/volunteers'">{{$t('listguide')}}</router-link>
                    <span><Icons icon="arrowRight" color="#7B8189" size="sm"/></span>
                    <router-link :to="'/'+this.$i18n.locale+'/volunteers/single?id='+$route.query.id">{{guide?.first_name}} {{guide?.last_name}} {{guide?.middle_name}}</router-link>
                </div>
                <div class="gids-sg-block">
                    <h3 v-if="loading">{{guide?.first_name}} {{guide?.sur_name}} {{guide?.middle_name}}</h3>
                    <h3 v-else>{{$t('downloading')}}...</h3>
                    <div v-if="loading" class="gids-sg-uinfos">
                        <div class="gids-sg-upinfos">
                            <img class="gids-avatar" :src="'https://culturevolunteers.uz/api/cdn/'+guide?.member_photo" alt="">
                            <div v-if="mobile && qrcode" class="qrcode">
                                <img :src="qrcode" alt="">
                            </div>
                            <div class="gids-sg-uinfo">
                                <div class="gids-sg-ct">
                                    <h4><span v-if="guide?.category==0">{{no_category?.name[$i18n.locale]}}</span><span v-else-if="guide?.category==1 || guide?.category==2">{{guide?.category}}-{{num_category?.name[$i18n.locale]}}</span><span v-else-if="guide?.category==10">{{best_category?.name[$i18n.locale]}}</span> <span v-if="guide?.guide_type == 'excursion_guide'">{{ $t('guide_type2') }}</span><span v-else-if="guide?.guide_type == 'mountain_guide'">{{ $t('guide_type3') }}</span><span v-else>{{ $t('guide_type1') }}</span></h4>
                                    <div class="gids-sg-certfication">
                                        <span>{{$t('statusbeyj')}}:</span>
                                        <span>{{$t('activity')}}</span>

                                      <!--<p :class="guide?.activity">{{statusCheck(guide?.activity)}}</p> -->  
                                    </div>
                                </div>
                                <div class="gids-sg-prinfos">
                                    <div v-if="guide?.badges?.[0]?.expr_date" class="gids-sg-prinfo">
                                        <span>{{$t('expireCert')}}:</span>
                                        <p>{{dateFilter(guide?.badges?.[0]?.expr_date)}}</p>
                                    </div>
                                    <div class="gids-sg-prinfo">
                                        <span>{{$t('firstName')}}:</span>
                                        <p>{{guide?.first_name}}</p>
                                    </div>
                                    <div class="gids-sg-prinfo">
                                        <span>{{$t('secondName')}}:</span>
                                        <p>{{guide?.sur_name}}</p>
                                    </div>
                                    <div v-if="guide?.middle_name" class="gids-sg-prinfo">
                                        <span>{{$t('middleName')}}:</span>
                                        <p>{{guide?.middle_name}}</p>
                                    </div>
                                    <div v-if="guide?.badges?.[0]?.reg_num" class="gids-sg-prinfo">
                                        <span>{{$t('certNumber')}}:</span>
                                        <p>{{guide?.badges?.[0]?.reg_num || '-'}}</p>
                                    </div>
                                    <div class="gids-sg-prinfo">
                                        <span>{{$t('lang')}}:</span>
                                        <p>{{ $t('langs1')}}</p>
                                      <!--  <p v-for="el,index in guide?.languages" :key="index">{{ langs[el-1]?.name?.[$i18n.locale] }},</p> --> 
                                    </div>
                                    <div class="gids-sg-prinfo" style="row-gap:10px;">
                                        <span>{{$t('territory')}}:</span>
                                        <span>{{$t('regions1')}}</span>
                                      <!-- <p v-for="el,index in guide?.regions" :key="index">{{ regions[el-1]?.name?.[$i18n.locale] }},</p> --> 
                                    </div>
                                </div>
                                <!-- <div class="qr-code">
                                    <img :src="qrcode" alt="">
                                </div> -->
                            </div>
                        </div>
                        <div v-if="!mobile && qrcode" class="qrcode">
                            <img :src="qrcode" alt="">
                        </div>
                    </div>
                    <div v-else class="gids-sg-uinfos"> {{$t('downloading')}}...</div>
                    <div v-if="guide?.work_phone_number || guide?.email" class="gids-sg-uinfos ne">
                        <div class="gids-sg-cb">
                            <div v-if="guide?.user?.phone_number" class="gids-sg-ne">
                                <span>{{$t('phone')}}:</span>
                                <a :href="'tel:'+guide?.user?.phone_number">{{guide?.user?.phone_number}}</a> 
                            </div>
                            <div v-if="guide?.user?.email" class="gids-sg-ne">
                                <span>{{$t('mail')}}:</span>
                                <a :href="'mailto:'+guide?.user?.email">{{guide?.user?.email}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <preLoader v-else/>
</template>
<script>
import preLoader from '@/components/preLoader.vue'
import Icons from '@/components/icons.vue'
export default {
    data(){
        return{
            guide: null,
            qrcode: null,
            loading: false,
            preloading: false,
            mobile: false,
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
            }
        }
    },
    components:{
        Icons,
        preLoader
    },
    methods:{
        
        dateFilter(e){
            if(!!e){
                let date = new Date(e)
                let newdate = ('0'+date.getDate()).slice(-2)+'.'+('0'+(date.getMonth()+1)).slice(-2)+'.'+date.getFullYear()
                return  newdate
            }else{
                return '-'
            }
        },
        statusCheck(e){
            if(e=='active'){
                let lang = {
                    uz: 'Amalda',
                    ru: 'Активный',
                    en: 'Active',
                }
                return lang[this.$i18n.locale]
            }
            else if(e=='expired'){
                let lang = {
                    uz: 'Muddati o‘tgan',
                    ru: 'Aннулировать',
                    en: 'Expired',
                }
                return lang[this.$i18n.locale]
            }
            else if(e=='canceled'){
                let lang = {
                    uz: 'Bekor qilingan',
                    ru: 'Отменено',
                    en: 'Canceled',
                }
                return lang[this.$i18n.locale]
            }else{
                return '-'
            }
        }
    },
    mounted(){
        this.loading = false
        this.preloading = false
        this.langs = this.$store.langs
        if(window.innerWidth<834){
            this.mobile = true
        }
        this.$axios.get(('volunteers/single?id='+this.$route.query.id)).then((res)=>{
            this.guide = res?.data?.result?.guideDocument
            const qr = res?.data?.result?.qrcode
            const b64toBlob = (qr, sliceSize=512) => {
            const byteCharacters = atob(qr);
            const byteArrays = [];

            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                const slice = byteCharacters.slice(offset, offset + sliceSize);

                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            const blob = new Blob(byteArrays);
            return blob;
            }
            const blob = b64toBlob(qr);
            const blobUrl = URL.createObjectURL(blob);
            this.qrcode = blobUrl
            this.loading = true
            this.preloading = true
        })
    }
}
</script>