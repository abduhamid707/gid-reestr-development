<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
export default {
  components:{
    Header,
    Footer,
  },
  data(){
    return{
      key: 'mySecretSalt',
      crypt: null,
      decrypt: null,
      loading: true,
    }
  },
  methods:{
    cryptFunc(){   
      const cipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
        return text => text && text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
      }
      const decipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
        return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
      }
      this.crypt = cipher(this.key)
      this.decrypt = decipher(this.key)
    },
  },
  watch:{
    '$route.query.code': {
        handler: function(search) {
          if(this.$route.query.code){
            localStorage.setItem('code',this.crypt(this.$route.query.code))
          }
        },
        deep: true,
        immediate: true
    },
  },
  async mounted(){
    this.loading = true
    this.cryptFunc()
    if(this.$route.query.code){
      await localStorage.setItem('code',this.crypt(this.$route.query.code))
    }
    if(localStorage.getItem('user_id')){
      this.$store.user_id = (localStorage.getItem('user_id'))
    }else{
      this.$store.user_id = null
    }
    if(window.location.search.search('code=')>=0){
      let location = window.location.search.split('code=')[1]
      let locationCode = location.split('&')[0]

      await this.$axios.post('/login?code='+(locationCode)).then((res)=>{
        if(res && res.data){
          localStorage.setItem('user_id',res?.data?.result?.user?.user_id)
          this.$store.user = res?.data?.result?.user
          this.$router.replace({query: null})
        }else{
          localStorage.removeItem('user_id')
        }
      })
    }
    if(this.$store.user_id){
      await this.$axios.get('/me?user_id='+(this.$store.user_id)).then((res)=>{
        if(res && res.data){
          this.$store.user = res?.data?.result?.user
          this.loading = false
        }else{
          localStorage.removeItem('user_id')
          this.loading = false
        }
      }).catch((err)=>{
        this.loading = false
      })
    }
    this.loading = false
  },
}
</script>

<template>
  <div v-if="!loading">
    <Header/>
    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped>

</style>
