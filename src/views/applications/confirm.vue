<template>
    <div class="wrapper pth">
        <div class="confirmation-apl">
            <div class="new-apl">
                <h3>Ariza</h3>
                <div class="new-apl-g3">
                    <div class="new-apl-select">
                        <label for="">Ariza turi</label>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div class="new-apl-select">
                        <label for="">Ariza kimning nomidan yuborilmoqda</label>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div class="new-apl-select">
                        <label for="">3-chi shaxs JShShIR</label>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                
                <div class="new-apl-select">
                    <label for="">Faoliyat olib boriladigan tillar</label>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
                <div class="new-apl-select">
                    <label for="">Faoliyat olib boriladigan hududlar</label>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
                <div class="new-apl-files-g2">
                    <div class="new-apl-file">
                        <p>Sertifikat, yoki qayta tayyorlash kursidan o‘tganlikni tasdiqlovchi hujjat nusxasi</p>
                        <div class="conf-apl-upl">
                            <Icons
                            icon="pdf"
                            color="#216AD7"
                            size="custom"
                            width="48"
                            height="48"
                            />
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div class="new-apl-file">
                        <p>086 shaklidagi tibbiy ma’lumotnoma</p>
                        <div class="conf-apl-upl">
                            <Icons
                            icon="pdf"
                            color="#216AD7"
                            size="custom"
                            width="48"
                            height="48"
                            />
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div class="new-apl-file">
                        <p>Notarial tasdiqlangan ishonchnoma</p>
                        <div class="conf-apl-upl">
                            <Icons
                            icon="pdf"
                            color="#216AD7"
                            size="custom"
                            width="48"
                            height="48"
                            />
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
                <div class="new-apl-img">
                    <div class="new-apl-img-upl">
                        <p>Beyjda ko‘rsatiladigan surat</p>
                        <img v-if="!avatar" src="@/assets/icons/avatar.svg" alt="">
                        <img v-else :src="avatar" alt="">
                    </div>
                </div>
                <h4>Kiritilgan ma’lumot va fayllar to‘g‘riligini tekshirib, ishonch hosil qilganingizdan so‘ng arizani yuborish tugmasini bosing. Yuborilgan arizangiz “Mening arizalarim” sahifasida “Faol arizalar” bo‘limida avtomatik ravishda paydo bo‘ladi. Siz ushbu sahifada yuborgan arizangiz holatini tekshirib turishingiz mumkin </h4>
                <div class="new-apl-block">
                    <button @click="$router.push('/'+$i18n.locale+'/applications/add')" class="blue-stroke-btn">Ortga qaytish</button>
                    <button class="blue-filled-btn">Arizani qoldirish</button>
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
            langs : [],
            avatar: null,
            applications: {},
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
        }
    },
    components: {
        Icons
    },
    methods:{
        changeAvatar(e){
            let img = new Image()
            img.src = window.URL.createObjectURL(e.target.files[0])
            img.onload = () => {
                if(((img.width/img.height)<=0.72)||(img.width/img.height)>=0.78){
                    this.$message.error('wrong image , img must be 3x4')
                }else{
                    if((e.target.files[0].size/1048576)>=5){
                        this.$message.error('wrong image , img must be smaller 5MB')
                    }else{
                        this.avatar = URL.createObjectURL(e.target.files[0])
                    }
                }
            }
        }
    },
    async mounted(){
    }
}
</script>