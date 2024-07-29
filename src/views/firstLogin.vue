<template>
    <div class="wrapper pth">
        <div class="first-log">
            <div class="first-log-block">
                <div class="first-log-info">
                    <p>Iltimos, aloqa uchun quyidagi ma’lumotlarni kiriting va tasdiqlang</p>
                    <div class="first-log-inps">
                        <div class="first-log-inp">
                            <label for="">Telefon raqami:</label>
                            <input type="text" placeholder="+998 99 999-99-99" value="+998 ">
                        </div>
                        <div class="first-log-inp">
                            <label for="">E-manzil:</label>
                            <input type="text" placeholder="mail@gmail.com">
                        </div>
                    </div>
                    <button>Tasdiqlash</button>
                </div>
                <div class="first-log-r">
                    <div class="first-log-rl">
                        <img src="@/assets/icons/logo.svg" alt="">
                    </div>
                    <p>Gidlar sertifikatini olish, muddatini uzaytirish va ma’lumotlarni yangilash uchun ariza qoldirish tizimi</p>
                </div>
            </div>
        </div>
    </div>
    <!-- <preLoader v-else/> -->
</template>
<script>
// import preLoader from '@/components/preLoader.vue'
export default {
    data(){
        return{
        }
    },
    components:{
        // preLoader,
    },
    methods:{
    },
    async mounted(){
    }
}
</script>