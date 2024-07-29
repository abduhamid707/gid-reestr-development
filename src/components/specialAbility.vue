<template>
<div class="modal-block">
  <div class="modalWrapper specialAbilitiesWrapper pad-48">
    
    <Icons
      @click="closeMe"
      icon="closeFilled"
      size="48"
      color="blue"
      class="closeModalIcon"
    />

    <div class="w-100 d-f justify-c">
      <p class="midP colorPrim t-align-c">{{$t('specialAbilities')}}</p>
    </div>

    <div class="w-100 d-f gap-24 mt-64 jc-sb flex-wrap">
      <div class="colorScheme w-50">
        <p>{{ $t('colorScheme') }}</p>
        <div
          @click="changeColorScheme('default')"
          class="w-a d-f gap-24 align-c cur-ptr"
        >
          <div
            class="radioBtn"
            :class="{
              'active': colorScheme === 'default'
            }"
          >
            <div class="activeRadio"></div>
          </div>
          <p>{{ $t('coloredScheme') }}</p>
        </div>
  
        <div
          @click="changeColorScheme('lightScheme')"
          class="w-a d-f gap-24 align-c cur-ptr"
        >
          <div
            class="radioBtn"
            :class="{
              'active': colorScheme === 'lightScheme'
            }"
          >
            <div class="activeRadio"></div>
          </div>
          <p>{{ $t('lightScheme') }}</p>
        </div>
        
        <div
          @click="changeColorScheme('darkScheme')"
          class="w-a d-f gap-24 align-c cur-ptr"
        >
          <div
            class="radioBtn"
            :class="{
              'active': colorScheme === 'darkScheme'
            }"
          >
            <div class="activeRadio"></div>
          </div>
          <p>{{ $t('darkScheme') }}</p>
        </div>
      </div>
  
      <div class="fontSize w-50">
        <p>{{ $t('fontSize') }}</p>
        <div class="w-a d-f gap-24 align-c">
          <div
            @click="changeFontSize('default')"
            class="radioBtnSqr"
            :class="{
              'active': fontSize === 'default'
            }"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8933 19.697L18.1291 14.6852L16.3649 19.697H19.8933ZM19.0327 12.3919L22.9828 23.6081C22.9943 23.6637 23 23.7026 23 23.7248C23 23.9083 22.8336 24 22.5009 24H22.0448C21.6431 24 21.385 23.8694 21.2702 23.6081L20.315 20.8978H15.9432L14.988 23.6081C14.8732 23.8694 14.6179 24 14.222 24H13.5077C13.1692 24 13 23.9083 13 23.7248C13 23.7026 13.0057 23.6637 13.0172 23.6081L16.9673 12.3919C17.0132 12.2863 17.0935 12.1946 17.2083 12.1167C17.3287 12.0389 17.4722 12 17.6386 12H18.3701C18.5536 12 18.6942 12.0306 18.7917 12.0917C18.9007 12.164 18.9811 12.2641 19.0327 12.3919Z" fill="white"/>
            </svg>
          </div>

          <div
            @click="changeFontSize('middle')"
            class="radioBtnSqr"
            :class="{
              'active': fontSize === 'middle'
            }"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0293 20.5455L18.2065 13.0278L15.3838 20.5455H21.0293ZM19.6523 9.58791L25.9725 26.4121C25.9908 26.4955 26 26.5539 26 26.5872C26 26.8624 25.7338 27 25.2014 27H24.4716C23.829 27 23.4159 26.804 23.2324 26.4121L21.704 22.3468H14.7091L13.1807 26.4121C12.9971 26.804 12.5886 27 11.9552 27H10.8124C10.2708 27 10 26.8624 10 26.5872C10 26.5539 10.0092 26.4955 10.0275 26.4121L16.3477 9.58791C16.4211 9.42946 16.5496 9.29187 16.7332 9.17512C16.926 9.05837 17.1555 9 17.4217 9H18.5921C18.8858 9 19.1107 9.04587 19.2668 9.1376C19.4412 9.246 19.5697 9.39611 19.6523 9.58791Z" fill="black"/>
            </svg>
          </div>

          <div
            @click="changeFontSize('large')"
            class="radioBtnSqr"
            :class="{
              'active': fontSize === 'large'
            }"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1652 21.6769L18.284 10.8179L14.4028 21.6769H22.1652ZM20.2719 5.8492L28.9621 30.1508C28.9874 30.2713 29 30.3556 29 30.4038C29 30.8013 28.634 31 27.9019 31H26.8985C26.0149 31 25.4469 30.7169 25.1945 30.1508L23.0929 24.2787H13.475L11.3735 30.1508C11.1211 30.7169 10.5594 31 9.68847 31H8.11704C7.37235 31 7 30.8013 7 30.4038C7 30.3556 7.01262 30.2713 7.03787 30.1508L15.7281 5.8492C15.829 5.62034 16.0057 5.42159 16.2582 5.25295C16.5232 5.08432 16.8388 5 17.2048 5H18.8141C19.218 5 19.5273 5.06625 19.7418 5.19875C19.9816 5.35534 20.1583 5.57216 20.2719 5.8492Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="spAb-btn d-f gap-24">
        <div class="w-100 d-f justify-c mt-a">
        <button
            @click="reset"
            class="w-50"
        >
            <span>{{ $t('reset') }}</span>
        </button>
        </div>

        <div class="w-100 d-f justify-c mt-24">
        <button
            @click="saveChanges"
            class="primBtn w-50"
        >
            <span>{{ $t('apply') }}</span>
        </button>
        </div>
    </div>

  </div>
</div>
</template>

<script>
import Icons from './icons.vue';

export default {
  name: 'specialAbilitiesComponent',

  components: {
    Icons
  },

  data() {
    return {
      colorScheme: 'default',
      fontSize: 'default',
    }
  },

  methods: {
    closeMe() {
      this.$router.go()
    },

    changeColorScheme(type) {
      this.$emit('changeColorScheme', type)
      this.colorScheme = type
    },

    changeFontSize(type) {
      this.$emit('changeFontSize', type)
      this.fontSize = type
    },

    reset() {
      this.colorScheme = 'default'
      this.fontSize = 'default'
    },

    saveChanges() {
      window.sessionStorage.colorScheme = this.colorScheme
      window.sessionStorage.fontSize = this.fontSize
      this.$emit('changeSpecialAbilities')
      this.closeMe()
    }
  },

  mounted() {
    if(window.sessionStorage.colorScheme && window.sessionStorage.colorScheme !== '' && window.sessionStorage.fontSize && window.sessionStorage.fontSize !== '') {
      this.colorScheme = window.sessionStorage.colorScheme
      this.fontSize = window.sessionStorage.fontSize
    }
  }
}
</script>

<style>
.specialAbilitiesWrapper {
  display: flex;
  gap: 1.5rem;
}

.colorScheme {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.fontSize {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.radioBtn {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 width: 1.5rem;
	 height: 1.5rem;
	 border-radius: 1.5rem;
	 border: 2px solid #5481c1;
	 box-sizing: border-box;
}
 .radioBtn.active {
	 border: 2px solid #216AD7;
}
 .radioBtn.active .activeRadio {
	 display: block;
	 width: 1rem;
	 height: 1rem;
	 border-radius: 8px;
	 background: #216AD7;
}
 .radioBtn .activeRadio {
	 display: none;
}
 .radioBtnSqr {
	 width: 48px;
	 height: 48px;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 border-radius: 10px;
	 background-color: #f4f4f4;
	 cursor: pointer;
}
 .radioBtnSqr path {
	 fill: #000;
}
 .radioBtnSqr.active {
	 background: #216AD7;
}
 .radioBtnSqr.active path {
	 fill: #fff;
}
 .testFrame {
	 margin-top: 48px;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 width: 100%;
	 height: 120px;
	 border-radius: 40px;
	 border: 0.75rem solid #216AD7;
	 box-sizing: border-box;
}
 .testFrame.darkScheme {
	 background-color: #242424;
	 border-color: #242424;
	 color: #fff;
}
 .testFrame.darkScheme p {
	 color: #fff;
}
 .testFrame.darkScheme h4 {
	 color: #fff;
}
 .testFrame.darkScheme h3 {
	 color: #fff;
}
 .testFrame.darkScheme h2 {
	 color: #fff;
}
 .testFrame.darkScheme a {
	 color: #fff;
}
 .testFrame.darkScheme span {
	 color: #fff;
}
 .testFrame.lightScheme {
	 background-color: #fff;
	 border-color: #242424;
	 color: #000;
}
 .testFrame.lightScheme p {
	 color: #000;
}
 .testFrame.lightScheme h4 {
	 color: #000;
}
 .testFrame.lightScheme h3 {
	 color: #000;
}
 .testFrame.lightScheme h2 {
	 color: #000;
}
 .testFrame.lightScheme a {
	 color: #000;
}
 .testFrame.lightScheme span {
	 color: #000;
}
 .testFrame.middle p {
	 font-size: 20px;
}
 .testFrame.large p {
	 font-size: 1.5rem;
}
 

</style>>