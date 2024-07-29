<template>
    <div class="gids">
        <div class="gids-sg">
            <div class="wrapper">
                <div class="gids-sg-wrapper">
                    <img src="@/assets/images/image6.png" alt="">
                </div>
                <!-- <div class="gids-breadbrumbs">
                    <router-link :to="'/'+this.$i18n.locale+'/guides'">{{$t('listguide')}}</router-link>
                    <span><Icons icon="arrowRight" color="#7B8189" size="sm"/></span>
                    <router-link :to="'/'+this.$i18n.locale+'/guides/single?id='+$route.query.id">{{$store?.user?.first_name}} {{$store?.user?.sur_name}} {{$store?.user?.mid_name}}</router-link>
                </div> -->
                <div class="gids-sg-block">
                    <h3>{{$store?.user?.first_name}} {{$store?.user?.sur_name}} {{$store?.user?.mid_name}}</h3>
                    <div class="gids-sg-uinfos">
                        <div class="gids-sg-upinfos">
                            <div class="gids-sg-uinfo">
                                <div class="gids-sg-prinfos">
                                    <div class="gids-sg-prinfo">
                                        <span>{{$t('firstName')}}:</span>
                                        <p>{{$store?.user?.first_name}}</p>
                                    </div>
                                    <div class="gids-sg-prinfo">
                                        <span>{{$t('secondName')}}:</span>
                                        <p>{{$store?.user?.sur_name}}</p>
                                    </div>
                                    <div v-if="$store?.user?.mid_name" class="gids-sg-prinfo">
                                        <span>{{$t('middleName')}}:</span>
                                        <p>{{$store?.user?.mid_name}}</p>
                                    </div>
                                    <div v-if="$store?.user?.birth_date" class="gids-sg-prinfo">
                                        <span>{{$t('birthDate')}}:</span>
                                        <p>{{$store?.user?.birth_date}}</p>
                                    </div>
                                    <div v-if="$store?.user?.pin" class="gids-sg-prinfo">
                                        <span>{{$t('pinfl')}}:</span>
                                        <p>{{$store?.user?.pin}}</p>
                                    </div>
                                    <div v-if="$store?.user?.pport_num" class="gids-sg-prinfo">
                                        <span>{{$t('passNum')}}:</span>
                                        <p>{{$store?.user?.pport_num}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="$store?.user?.phone_number || $store?.user?.email" class="gids-sg-uinfos ne">
                        <div class="gids-sg-cb">
                            <div v-if="$store?.user?.phone_number" class="gids-sg-ne">
                                <span>{{$t('phone')}}:</span>
                                <a :href="'tel:'+$store?.user?.phone_number">{{$store?.user?.phone_number}}</a>
                            </div>
                            <div v-if="$store?.user?.email" class="gids-sg-ne">
                                <span>{{$t('mail')}}:</span>
                                <a :href="'mailto:'+$store?.user?.email">{{$store?.user?.email}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
                        uz: 'Farg\'ona viloyati',
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
                        uz: 'Qoraqalpog\'iston Respublikasi',
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
                        uz: 'O\'zbekiston tog\'lari',
                    }
                },
            ],
        }
    },
    components:{
        Icons
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
    },
    mounted(){
        this.langs = this.$store.langs
    }
}
</script>