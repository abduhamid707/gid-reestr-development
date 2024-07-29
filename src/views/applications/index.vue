<template>
  <div class="wrapper pth">
    <div class="applications">
      <div class="apl" v-if="new_application">
        <h3>{{ $t('activeAppl') }}</h3>
        <div class="new-apl-block">
          <h3>{{ $t('noActiveAppl') }}</h3>
          <button class="blue-filled-btn" @click="addApp">
            {{ $t('sendAppl') }}
          </button>
        </div>
      </div>
      <div class="apl" v-else>
        <h3>{{ $t('activeAppl') }}</h3>
        <div
          class="apl-block"
          v-for="(item, idx) in active_applications"
          :key="idx"
        >
          <h3>#{{ item?.application_number }}</h3>
          <div class="apl-infos">
            <div class="apl-info">
              <span>{{ $t('typeAppl') }}</span>
              <p>{{ $t(item?.application_type) }}</p>
            </div>
            <div class="apl-info">
              <span>{{ $t('appCreateDate') }}</span>
              <p>{{ dateFilter(item?.createdAt) }}</p>
            </div>
            <div class="apl-info">
              <span>3-chi shaxs FIOsi</span>
              <p>-</p>
            </div>
          </div>
          <h3>Bosqichlar</h3>
          <div class="apl-levels">
            <div class="apl-info" :class="{ 'active-stage': item.stage == 1 }">
              <span>1-chi bosqich</span>
              <p class="orange-text">
                {{
                  item.stage == 1
                    ? 'Hujjatlar ko‘rib chiqilmoqda'
                    : 'Tasdiqlandi'
                }}
              </p>
            </div>
            <div class="apl-info" :class="{ 'active-stage': item.stage == 2 }">
              <span>2-chi bosqich</span>
              <p class="orange-text" v-if="!item.paymentFile">
                {{
                  item.stage == 2
                    ? 'To‘lov kutilmoqda'
                    : item?.stage > 2
                    ? 'Tasdiqlandi'
                    : 'Kutilmoqda'
                }}
              </p>
              <p class="orange-text" v-else>
                {{
                  item.stage == 2
                    ? 'To‘lov tekshirilmoqda'
                    : item?.stage > 2
                    ? 'Tasdiqlandi'
                    : 'Kutilmoqda'
                }}
              </p>
              <p
                v-if="
                  item.stage == 2 &&
                  $i18n.locale == 'uz' &&
                  item.paymentStatus == 'unpaid'
                "
              >
                To‘lovni <b>2020 4000 5252 9598</b> amalga oshirgach,
                <button
                  @click="
                    item.paymentStatus == 'unpaid'
                      ? openmodalId(item?.application_id)
                      : ''
                  "
                >
                  ushbu oyna</button
                >ga to‘lov qog‘ozingiz nusxasini yuklang
              </p>
              <p
                v-if="
                  item.stage == 2 &&
                  $i18n.locale == 'ru' &&
                  item.paymentStatus == 'unpaid'
                "
              >
                После оплаты <b>2020 4000 5252 9598</b> загрузите копию
                платежной квитанции в
                <button
                  @click="
                    item.paymentStatus == 'unpaid'
                      ? openmodalId(item?.application_id)
                      : ''
                  "
                >
                  это поле</button
                >.
              </p>
              <p
                v-if="
                  item.stage == 2 &&
                  $i18n.locale == 'en' &&
                  item.paymentStatus == 'unpaid'
                "
              >
                After making payment <b>2020 4000 5252 9598</b> upload a copy of
                your payment slip in
                <button
                  @click="
                    item.paymentStatus == 'unpaid'
                      ? openmodalId(item?.application_id)
                      : ''
                  "
                >
                  this box</button
                >.
              </p>
            </div>
            <div
              v-if="item.application_type == 'registration' && item.stage == 3"
              class="apl-info"
              :class="{ 'active-stage': item.stage == 3 }"
            >
              <span>3-chi bosqich</span>
              <p class="orange-text" v-if="!item?.test_address">
                {{
                  item.stage == 3
                    ? 'Imtihon kutilmoqda'
                    : item?.stage > 3
                    ? 'Tasdiqlandi'
                    : 'Kutilmoqda'
                }}
              </p>
              <p v-if="item?.test_address">
                Manzil:{{ item.test_address?.address }}
              </p>
              <p v-if="item?.test_address">
                Imtihon sanasi:{{ item.test_address?.exam_date }}
              </p>
              <p v-if="item?.test_address">
                Imtihon vaqti:{{ timeFilter(item.test_address?.exam_date) }}
              </p>
              <a
                v-if="item?.test_address?.lat && item?.test_address?.long"
                :href="
                  'https://maps.google.com/?q=' +
                  item?.test_address?.lat +
                  ',' +
                  item?.test_address?.long +
                  '&hl=es;z=14&amp;output=embed'
                "
                >{{ $t('locMap') }}</a
              >
            </div>
            <div
              v-if="item.application_type == 'registration' && item.stage == 4"
              class="apl-info"
              :class="{ 'active-stage': item.stage == 4 }"
            >
              <span>3-chi bosqich</span>
              <p class="orange-text" v-if="!item?.practice_address">
                {{
                  item.stage == 4
                    ? 'Amaliyot kutilmoqda'
                    : item?.stage > 4
                    ? 'Tasdiqlandi'
                    : 'Kutilmoqda'
                }}
              </p>
              <p v-if="item?.practice_address">
                Manzil:{{ item.practice_address?.address }}
              </p>
              <p v-if="item?.practice_address">
                Imtihon sanasi:{{
                  dateFilter(item.practice_address?.exam_date)
                }}
              </p>
              <p v-if="item?.practice_address">
                Imtihon vaqti:{{ timeFilter(item.practice_address?.exam_date) }}
              </p>
              <a
                v-if="
                  item?.practice_address?.lat && item?.practice_address?.long
                "
                :href="
                  'https://maps.google.com/?q=' +
                  item?.practice_address?.lat +
                  ',' +
                  item?.practice_address?.long +
                  '&hl=es;z=14&amp;output=embed'
                "
                >{{ $t('locMap') }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="apl" v-if="deactive_applications.length">
        <h3>Yakunlangan arizalar</h3>
        <div
          class="apl-block"
          v-for="(item, idx) in deactive_applications"
          :key="idx"
        >
          <h3>#{{ item?.application_number }}</h3>
          <div class="apl-infos">
            <div class="apl-info">
              <span>{{ $t('typeAppl') }}</span>
              <p>{{ $t(item?.application_type) }}</p>
            </div>
            <div class="apl-info">
              <span>{{ $t('appCreateDate') }}</span>
              <p>{{ dateFilter(item?.createdAt) }}</p>
            </div>
            <div class="apl-info">
              <span>{{ $t('status') }}</span>
              <p>
                {{ $t(item?.status) }}
                <a
                  v-if="
                    item?.status == 'accepted' && item?.certificate_doc?.path
                  "
                  :href="
                    'http://test.gidlar.uz/api/cdn/' +
                    item?.certificate_doc?.path
                  "
                  >{{ $t('cert') }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <modalPay :idx="idx" v-if="openmodal" @modalShow="openmodal = false" />
    </div>
  </div>
</template>
<script>
import Icons from '@/components/icons.vue'
import modalPay from '@/components/modalPay.vue'
export default {
  data() {
    return {
      langs: [],
      applications: null,
      active_applications: [],
      deactive_applications: [],
      new_application: true,
      openmodal: false,
      idx: null,
    }
  },
  components: {
    modalPay,
    Icons,
  },
  methods: {
    async addApp() {
      if (localStorage.getItem('code')) {
        this.$router.push('/' + this.$i18n.locale + '/applications/add')
      } else {
        this.$router.push('/' + this.$i18n.locale + '/applications/add')
        await window.open(
          'https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=gidlar_reestri&redirect_uri=http://test.gidlar.uz/uz%2Fapplications%2Fadd&scope=gidlar_reestri&state=IDPW',
          '_self'
        )
      }
    },
    timeFilter(e) {
      if (!!e) {
        let date = new Date(e)
        let newtime =
          ('0' + date.getHours()).slice(-2) +
          ':' +
          ('0' + date.getMinutes()).slice(-2)
        return newtime
      } else {
        return '-'
      }
    },
    openmodalId(e) {
      this.idx = e
      this.openmodal = true
    },
    dateFilter(e) {
      if (!!e) {
        let date = new Date(e)
        let newdate =
          ('0' + date.getDate()).slice(-2) +
          '.' +
          ('0' + (date.getMonth() + 1)).slice(-2) +
          '.' +
          date.getFullYear()
        return newdate
      } else {
        return '-'
      }
    },
  },
  async mounted() {
await this.$axios.get('applications', {
    params: {
        user_id: 1
    }
}).then((res) => {
    if (res && res.data) {
        this.applications = res?.data?.result?.applications;
        console.log('this.applications :', this.applications);
        this.applications.forEach((el) => {
            if (el?.status == 'checking' || el?.status == 'new') {
                this.new_application = false;
                this.active_applications.push(el);
            } else {
                this.deactive_applications.push(el);
            }
        });
    }
});


  },
}
</script>
