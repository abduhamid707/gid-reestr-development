<template>
    <div v-if="preloading" class="wrapper">
        <div class="home">
            <div class="home-blocks">
                <div class="home-block">
                    <p class="bold">{{$t("mainH1")}}</p>
                    <span>{{ $t('mainB1') }}</span>
                </div>
                <div class="home-block">
                    <p class="bold">{{ $t('mainH2') }}</p>
                    <span>{{ $t('mainB2') }}</span>
                </div>
            </div>
            <div class="home-bt">
                <img src="@/assets/images/image4.png" alt="">
                <div class="home-btlock">
                    <div class="home-btlock-txt">
                        <span>{{$t('countguide')}}</span>
                        <p class="bold">{{num}}</p>
                    </div>
                    <button @click="$router.push(this.$i18n.locale+'/volunteers')">{{$t('listguide')}}</button>
                </div>
            </div>
        </div>
    </div>
    <preLoader v-else/>
</template>
<script>
import preLoader from '@/components/preLoader.vue'
export default {
    data(){
        return{
            inter: null,
            inter: null,
            preloading: false,
            num: 0
        }
    },
    components:{
        preLoader,
    },
    methods:{
        gids(e){
            let num = 0;
            this.inter = setInterval(()=>{
                num = num + Math.ceil(e/110)
                this.num = num.toString().split("").reverse().join("").match(/.{1,3}/g).join(" ").split("").reverse().join("")
                if(num >= e){
                    clearInterval(this.inter)
                }
            },20)
        }
    },
    async mounted(){
        this.preloading = false
        await this.$axios.get('volunteers/count').then((el)=>{
            this.gids(el?.data?.result)
        })
        this.preloading = true
    }
}
</script>