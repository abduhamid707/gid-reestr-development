<template>
  <div class="modal" @click="modalShow">
    <div class="modal-main" @click.stop>
      <div class="modal-header">
        <i @click="modalShow" class="icon-close" style="cursor: pointer;">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7549 22.2459L22.2449 13.7559" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.2449 22.2459L13.7549 13.7559" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 33H22.5C30 33 33 30 33 22.5V13.5C33 6 30 3 22.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </i>
      </div>
      <div class="modal-body">
        <div class="personal_info">
          <p class="modal-title">To'lov faylini kiriting</p> 
          <div class="new-apl-files-g1">
            <div class="new-apl-file">
              <input @change="setFile($event)" accept=".pdf" id="certificate_doc" type="file" v-show="false">
              <label for="certificate_doc">
                <div class="new-apl-upl">
                  <Icons icon="pdf" color="#216AD7" size="custom" width="48" height="48" />
                </div>
                <div @click.prevent="file = null" v-if="file" class="close">
                  <Icons icon="closeFilled" color="#7B8189" size="custom" width="24" height="24" />
                </div>
              </label>
            </div>
          </div>
          <div class="new-apl-block">
            <button @click="submit" class="blue-filled-btn">Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icons from '@/components/icons.vue'
export default {
  data() {
    return {
      file: null,
    }
  },
  components: {
    Icons
  },
  props:{
    idx: String
  },
  methods: {
    setFile(e){
      if(e){
        if((e.target.files[0].size/1048576)>=5){
          this.$message.error('wrong file, file must be smaller 5MB')
        }else{
          this.file = e.target.files[0]
        }
      }
    },
    submit(){
      if(this.file){
        let f = new FormData()
        f.append('file', this.file)
        this.$axios.post("applications/payment/"+this.idx,f).then(res=>{
          if(res && res.data)  {
            this.$router.go()
          }
        })
      }
    },
    modalShow() {
      this.$emit("modalShow", false);
    },
  },
  mounted(){
  }
};
</script>
<style scoped>
.personal_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.modal {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.26);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon-close{
  display: flex;
}
.modal-main {
  max-width: 770px;
  width: 100%;
  height: 100%;
  max-height: 500px;
  border-radius: 12px;
  background: white;
  padding: 36px;
  position: relative;
}
.modal-title {
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.04em;
}
.modal-header i {
  position: absolute;
  font-size: 16px;
  top: 36px;
  display: flex;
  z-index: 222;
  right: 36px;
  color: #000000;
  cursor: pointer;
}

.modal-header {
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0;
  padding: 0 !important;
  z-index: 888;
  border-bottom: 0 !important;
  /* margin-bottom: 32px; */
}
.modal-body {
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal-body .row-12{
  position: relative;
}
.modal .level-confirm-btns{
  margin-top: 24px;
}
</style>