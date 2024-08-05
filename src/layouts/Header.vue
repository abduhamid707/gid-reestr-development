<template>
  <header>
    <div class="wrapper" :class="'page_' + $route.name">
      <div class="header-block">
        <div @click="$router.push('/' + this.$i18n.locale)" class="logo">
          <img src="@/assets/logo.png" alt="" class="logo-img" />
        </div>

        <div class="header-act">
          <!-- <div class="login">
                        <span v-if="user.first_name">{{user.first_name}} {{user.sur_name}}</span>
                        <span v-else>{{$t('log')}}</span>
                        <img v-if="user" src="@/assets/icons/human.svg" alt="">
                    </div> -->
          <div
            v-if="!loading"
            @mouseenter="openmodal = true"
            @mouseleave="openmodal = false"
            class="login"
          >
            <span v-if="user">{{ user?.first_name }} {{ user?.sur_name }}</span>
            <span @click="login" v-else>{{ $t('log') }}</span>
            <img
              @click="user ? '' : login"
              src="@/assets/icons/human.svg"
              alt=""
            />
            <div v-if="user?.first_name && openmodal" class="openmodal">
            
              <router-link :to="'/' + this.$i18n.local + '/profile'">
              {{
                $t('myProfile')
              }}
              </router-link>

              <router-link :to="'/' + this.$i18n.locale + '/applications'">
              {{
                $t('myAppl')
              }}
              </router-link>

              <button @click="logout">{{ $t('logout') }}</button>
            </div>
          </div>
          <div
            @mouseenter="changeLang"
            @mouseleave="changeLang"
            class="header-langs"
          >
            <Icons
              :icon="activeLang.val"
              size="custom"
              width="24"
              height="16"
            />
            <p>{{ activeLang.name }}</p>
            <div v-if="open" class="langs-block">
              <div class="langs-item" v-for="(el, index) in langs" :key="index">
                <span class="tick"
                  ><Icons
                    v-show="el.val == activeLang.val"
                    icon="tick"
                    size="custom"
                    width="20"
                    height="20" /></span
                ><span
                  @click="switchLang(el)"
                  :class="{ active: el.val == activeLang.val }"
                  ><Icons
                    :icon="el.val"
                    size="custom"
                    width="24"
                    height="16"
                  />{{ el.name }}</span
                >
              </div>
            </div>
          </div>
          <button class="nav_btn" @click="openMenu">
            <Icons icon="burgerMenu" size="custom" width="20" height="20" />
          </button>
          <div class="header-so" @click="spAb = !spAb">
            <Icons icon="eye" color="#7B8189" size="middle" />
          </div>
        </div>
      </div>
      <div
        class="header-elem-mobile"
        :class="{ menu_mobile: menu, closed: close }"
      >
        <div class="nav_block">
          <div class="nav_menu">
            <h5>{{ $t('menu') }}</h5>
            <Icons
              @click=";(menu = false), (close = true)"
              icon="searchClose"
              color="#7B8189"
              size="middle"
            />
          </div>
          <div class="nav-items">
            <h6>{{ $t('lang') }}</h6>
            <div class="nav-item">
              <div
                :class="{ active: el.val == activeLang.val }"
                class="nav-lang"
                v-for="(el, index) in langs"
                :key="index"
                @click="switchLang(el)"
              >
                <Icons :icon="el.val" size="custom" width="24" height="16" />{{
                  el.name
                }}
              </div>
            </div>
          </div>
          <div class="nav-items">
            <div class="w-100 d-f gap-24 mt-64 jc-sb flex-wrap">
              <div class="colorScheme w-100">
                <p>{{ $t('colorScheme') }}</p>
                <div class="radioBtn-col">
                  <div
                    @click="changeColorScheme('default')"
                    class="w-100 d-f fd-c gap-5 align-c cur-ptr"
                  >
                    <div
                      class="radioBtn-mob colored"
                      :class="{
                        active: colorScheme === 'default',
                      }"
                    >
                      A
                    </div>
                    <span>{{ $t('coloredBox') }}</span>
                  </div>

                  <div
                    @click="changeColorScheme('lightScheme')"
                    class="w-100 d-f fd-c gap-5 align-c cur-ptr"
                  >
                    <div
                      class="radioBtn-mob light"
                      :class="{
                        active: colorScheme === 'lightScheme',
                      }"
                    >
                      A
                    </div>
                    <span>{{ $t('light') }}</span>
                  </div>

                  <div
                    @click="changeColorScheme('darkScheme')"
                    class="w-100 d-f fd-c gap-5 align-c cur-ptr"
                  >
                    <div
                      class="radioBtn-mob dark"
                      :class="{
                        active: colorScheme === 'darkScheme',
                      }"
                    >
                      A
                    </div>
                    <span>{{ $t('black') }}</span>
                  </div>
                </div>
              </div>

              <div class="fontSize w-50">
                <p>{{ $t('fontSize') }}</p>
                <div class="w-100 d-f gap-20 align-c">
                  <div class="font-mobile">
                    <div
                      @click="changeFontSize('default')"
                      class="radioBtnSqr w-100"
                      :class="{
                        active: fontSize === 'default',
                      }"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8933 19.697L18.1291 14.6852L16.3649 19.697H19.8933ZM19.0327 12.3919L22.9828 23.6081C22.9943 23.6637 23 23.7026 23 23.7248C23 23.9083 22.8336 24 22.5009 24H22.0448C21.6431 24 21.385 23.8694 21.2702 23.6081L20.315 20.8978H15.9432L14.988 23.6081C14.8732 23.8694 14.6179 24 14.222 24H13.5077C13.1692 24 13 23.9083 13 23.7248C13 23.7026 13.0057 23.6637 13.0172 23.6081L16.9673 12.3919C17.0132 12.2863 17.0935 12.1946 17.2083 12.1167C17.3287 12.0389 17.4722 12 17.6386 12H18.3701C18.5536 12 18.6942 12.0306 18.7917 12.0917C18.9007 12.164 18.9811 12.2641 19.0327 12.3919Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span>{{ $t('smallText') }}</span>
                  </div>
                  <div class="font-mobile">
                    <div
                      @click="changeFontSize('middle')"
                      class="radioBtnSqr w-100"
                      :class="{
                        active: fontSize === 'middle',
                      }"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0293 20.5455L18.2065 13.0278L15.3838 20.5455H21.0293ZM19.6523 9.58791L25.9725 26.4121C25.9908 26.4955 26 26.5539 26 26.5872C26 26.8624 25.7338 27 25.2014 27H24.4716C23.829 27 23.4159 26.804 23.2324 26.4121L21.704 22.3468H14.7091L13.1807 26.4121C12.9971 26.804 12.5886 27 11.9552 27H10.8124C10.2708 27 10 26.8624 10 26.5872C10 26.5539 10.0092 26.4955 10.0275 26.4121L16.3477 9.58791C16.4211 9.42946 16.5496 9.29187 16.7332 9.17512C16.926 9.05837 17.1555 9 17.4217 9H18.5921C18.8858 9 19.1107 9.04587 19.2668 9.1376C19.4412 9.246 19.5697 9.39611 19.6523 9.58791Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span>{{ $t('midText') }}</span>
                  </div>
                  <div class="font-mobile">
                    <div
                      @click="changeFontSize('large')"
                      class="radioBtnSqr w-100"
                      :class="{
                        active: fontSize === 'large',
                      }"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1652 21.6769L18.284 10.8179L14.4028 21.6769H22.1652ZM20.2719 5.8492L28.9621 30.1508C28.9874 30.2713 29 30.3556 29 30.4038C29 30.8013 28.634 31 27.9019 31H26.8985C26.0149 31 25.4469 30.7169 25.1945 30.1508L23.0929 24.2787H13.475L11.3735 30.1508C11.1211 30.7169 10.5594 31 9.68847 31H8.11704C7.37235 31 7 30.8013 7 30.4038C7 30.3556 7.01262 30.2713 7.03787 30.1508L15.7281 5.8492C15.829 5.62034 16.0057 5.42159 16.2582 5.25295C16.5232 5.08432 16.8388 5 17.2048 5H18.8141C19.218 5 19.5273 5.06625 19.7418 5.19875C19.9816 5.35534 20.1583 5.57216 20.2719 5.8492Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span>{{ $t('bigText') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <specialAbility @closeMe="spAb = !spAb" v-if="spAb" />
    </div>
  </header>
</template>
<script>
import Icons from '@/components/icons.vue'
import specialAbility from '@/components/specialAbility.vue'
export default {
  data() {
    return {
      menu: false,
      spAb: false,
      open: false,
      openmodal: false,
      close: true,
      loading: false,
      user: null,
      key: 'mySecretSalt',
      crypt: null,
      decrypt: null,
      colorScheme: 'default',
      fontSize: 'default',
      activeLang: { name: "O'z", val: 'uz' },
      langs: [
        { name: "O'z", val: 'uz' },
        { name: 'Ру', val: 'ru' },
        { name: 'En', val: 'en' },
      ],
    }
  },
  components: {
    Icons,
    specialAbility,
  },
  methods: {
    async login() {
      await window.open(
        'https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=culturevolunteers_uz&redirect_uri=https://culturevolunteers.uz/uz%2Fapplications&scope=culturevolunteers_uz&state=IDPW',
        '_self'
      )
    },
    async logout() {
      // this.$router.replace({query: null})
      // await this.$axios.get('https://sso.egov.uz/sso/oauth/Authorization.do?client_id=gidlar_reestri')
      await this.$axios.post(
        '/logout?user_id=' + localStorage.getItem('user_id')
      )
      localStorage.removeItem('user_id')
      this.user = null
      this.$router.push('/' + this.$i18n.locale)
    },
    switchLang(el) {
      this.activeLang = el
      this.$i18n.locale = el.val
      let newRoute = window.location.pathname.split('/')
      newRoute[1] = el.val
      this.$router
        .push(newRoute.join('/') + window.location.search)
        .then(() => {
          this.$router.go()
        })
    },
    changeLang() {
      this.open = !this.open
    },

    closeMe() {
      this.$router.go()
    },

    changeColorScheme(type) {
      this.$emit('changeColorScheme', type)
      this.colorScheme = type
      this.saveChanges()
    },
    openMenu() {
      this.close = false
      this.menu = !this.menu
    },
    changeFontSize(type) {
      this.$emit('changeFontSize', type)
      this.fontSize = type
      this.saveChanges()
    },

    reset() {
      this.colorScheme = 'default'
      this.fontSize = 'default'
    },

    saveChanges() {
      window.sessionStorage.colorScheme = this.colorScheme
      window.sessionStorage.fontSize = this.fontSize
      this.closeMe()
    },
  },
  mounted() {
    this.loading = true
    this.langs.forEach((el) => {
      el.val == this.$i18n.locale ? (this.activeLang = el) : ''
    })

    if (
      window.sessionStorage.colorScheme &&
      window.sessionStorage.colorScheme !== '' &&
      window.sessionStorage.fontSize &&
      window.sessionStorage.fontSize !== ''
    ) {
      this.colorScheme = window.sessionStorage.colorScheme
      this.fontSize = window.sessionStorage.fontSize
    }
    if (
      window.sessionStorage.colorScheme &&
      window.sessionStorage.colorScheme !== '' &&
      window.sessionStorage.fontSize &&
      window.sessionStorage.fontSize !== ''
    ) {
      document.getElementsByTagName('html')[0].className =
        window.sessionStorage.colorScheme + ' ' + window.sessionStorage.fontSize
    }
    this.user = this.$store && this.$store.user

    this.loading = false
  },
}
</script>

<style>
.login {
  position: relative;
}
.logo-img {
  width: 150px;
  height: auto;
}
</style>
