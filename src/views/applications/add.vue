<template>
  <div class="wrapper pth">
    <form class="form" @submit.prevent="send">
      <div class="new-apl-g3">
        <div class="new-apl-select">
          <label class="form__label" for="pin">PIN:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.pin"
            id="pin"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="first_name">First Name:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.first_name"
            id="first_name"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="sur_name">Surname:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.sur_name"
            id="sur_name"
            required
          />
        </div>
      </div>
      <div class="new-apl-g3">
        <div class="new-apl-select">
          <label class="form__label" for="middle_name">Middle Name:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.middle_name"
            id="middle_name"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="address">Address:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.address"
            id="address"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="tin">TIN:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.tin"
            id="tin"
            required
          />
        </div>
      </div>

      <div class="new-apl-g3">
        <div class="new-apl-select">
          <label class="form__label" for="pport_num">Passport Number:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.pport_num"
            id="pport_num"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="email">Email:</label>
          <el-input
            class="form__el-input"
            type="email"
            v-model="user.email"
            id="email"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="phone_number">Phone Number:</label>
          <el-input
            class="form__el-input"
            type="tel"
            v-model="user.phone_number"
            id="phone_number"
            required
          />
        </div>
      </div>
      <div class="new-apl-g3">
        <div class="new-apl-select">
          <label for="">{{ $t('typeAppl') }}</label>
          <el-select
            v-model="applications.application_type"
            class="m-2"
            size="large"
            placeholder="Iltimos tanlang"
          >
            <el-option
              v-for="item in application_types"
              :key="item.value"
              :label="item.name?.[$i18n.locale]"
              :value="item.value"
            />
          </el-select>
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="university">University:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="applications.university"
            id="university"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="major">Major:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="applications.major"
            id="major"
            required
          />
        </div>
      </div>
      <div class="new-apl-g3">
        <div class="new-apl-select">
          <label class="form__label" for="experience">Experience:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="applications.experience"
            id="experience"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="per_adr">Permanent Address:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="applications.per_adr"
            id="per_adr"
            required
          />
        </div>

        <div class="new-apl-select">
          <label for="gender">{{ $t('gender') }}</label>
          <el-select
            v-model="user.gender"
            class="m-2"
            size="large"
            placeholder="select gender"
          >
            <el-option
              v-for="item in genders"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="new-apl-g3">
        <div class="new-apl-select">
          <label class="form__label" for="birth_place">Birth Place:</label>
          <el-input
            class="form__el-input"
            type="text"
            v-model="user.birth_place"
            id="birth_place"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="birth_date">Birth Date:</label>
          <el-input
            class="form__el-input"
            type="date"
            v-model="user.birth_date"
            id="birth_date"
            required
          />
        </div>

        <div class="new-apl-select">
          <label class="form__label" for="badge_img">Badge Image:</label>
          <input
            class="form__el-input"
            type="file"
            @change="setFile($event, 'badge_img')"
            id="badge_img"
            required
          />
        </div>
      </div>

      <table class="form__table">
        <thead class="form__thead">
          <tr class="form__tr">
            <th class="form__th">{{ $t('langs') }}</th>
            <th class="form__th">Certifikat turini tanlang</th>
            <th class="form__th">Certifikat darajasi</th>
            <th class="form__th">Certifikat fayli</th>
          </tr>
        </thead>
        <tbody class="form__tbody">
          <tr class="form__tr" v-for="(row, index) in rows" :key="index">
            <td class="form__td">
              <div class="form__field form__field--select m-2">
                <el-select
                  v-model="row.languages"
                  class="form__el-select"
                  placeholder="Iltimos tanlang"
                  size="large"
                >
                  <el-option
                    v-for="item in langs"
                    :key="item.id"
                    :label="item.name[$i18n.locale]"
                    :value="item.id"
                  />
                </el-select>
              </div>
            </td>

            <td class="form__td">
              <el-select
                v-model="row.certType"
                class="form__el-select"
                placeholder="Iltimos tanlang"
                size="large"
              >
                <el-option
                  v-for="cert in certificates"
                  :key="cert"
                  :label="cert"
                  :value="cert"
                />
              </el-select>
            </td>
            <td class="form__td">
              <el-select
                v-model="row.certLevel"
                class="form__el-select"
                placeholder="Iltimos tanlang"
                size="large"
              >
                <el-option
                  v-for="level in levels"
                  :key="level"
                  :label="level"
                  :value="level"
                />
              </el-select>
            </td>
            <td class="form__td">
              <input
                class="form__el-input"
                type="file"
                @change="onFileChange($event, index)"
              />
            </td>
            <td class="form__td">
              <button
                class="form__button form__button--remove"
                @click="removeRow(index)"
              >
                ❌
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="form__button--add">
        <button type="button" @click="addRow" class="blue-filled-btn">
          Add list
        </button>
      </div>
      <div class="new-apl-block">
        <button type="submit" class="blue-filled-btn">
          {{ $t('sendAppl') }}
        </button>
     
      </div>
    </form>
  </div>
</template>

<script>
import Icons from '@/components/icons.vue'
export default {
  data() {
    return {
      user: {
        pin: 'ss',
        first_name: 'ss',
        sur_name: 'ss',
        middle_name: 'ss',
        address: 'ss',
        tin: '1232',
        pport_num: '2wsa',
        email: 'aasx@gmail.com',
        phone_number: '+9987654567',
        birth_place: 'saxaxas',
        birth_date: 'asxxsaaxs',
        gender: ['M', 'F'],
      },
      genders: [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
      ],
      applications: {
        languages: [],
        application_type: 'translator',
        university: 'asxasxsa',
        major: 'xaxsaxsa',
        experience: '21sa',
        langcerlist: [],
        badge_img: null,
        per_adr: 'qwsax',
      },
      rows: [{ certType: '', certLevel: '', languages: '' }],
      langs: [
        {
          id: 1,
          name: {
            ru: 'Китайский (традиционный)',
            en: 'Chinese (traditional)',
            uz: 'Xitoycha (an’anaviy)',
            oz: 'Хитойча (анъанавий)',
          },
        },
        {
          id: 2,
          name: {
            ru: 'Aрабский',
            oz: 'Aрабча',
            uz: 'Arabcha',
            en: 'Arabic',
          },
        },
        {
          id: 3,
          name: {
            ru: 'Xинди',
            en: 'Hindi',
            uz: 'Hindcha',
            oz: 'Ҳиндча',
          },
        },
        {
          id: 4,
          name: {
            ru: 'Aнглийский',
            en: 'English',
            uz: 'Inglizcha',
            oz: 'Инглизча',
          },
        },
        {
          id: 5,
          name: {
            ru: 'Испанский',
            en: 'Spanish',
            uz: 'Ispancha',
            oz: 'Испанча',
          },
        },
        {
          id: 6,
          name: {
            ru: 'Бенгальский',
            en: 'Bengal',
            uz: 'Bengalcha',
            oz: 'Бенгалча',
          },
        },
        {
          id: 7,
          name: {
            ru: 'Португальский',
            en: 'Portuguese',
            uz: 'Portugalcha',
            oz: 'Португалча',
          },
        },
        {
          id: 8,
          name: {
            ru: 'Pусский',
            en: 'Russian',
            uz: 'Ruscha',
            oz: 'Русча',
          },
        },
        {
          id: 9,
          name: {
            ru: 'Японский',
            en: 'Japanese',
            uz: 'Yaponcha',
            oz: 'Японча',
          },
        },
        {
          id: 10,
          name: {
            ru: 'Hемецкий',
            en: 'German',
            uz: 'Nemischa',
            oz: 'Немисча',
          },
        },
        {
          id: 11,
          name: {
            ru: 'Корейский',
            en: 'Korean',
            uz: 'Koreyscha',
            oz: 'Корейсча',
          },
        },
        {
          id: 12,
          name: {
            ru: 'Французский',
            en: 'French',
            uz: 'Fransuzcha',
            oz: 'Франсузча',
          },
        },
        {
          id: 13,
          name: {
            ru: 'Яванский',
            en: 'Javanese',
            uz: 'Yavancha',
            oz: 'Яванча',
          },
        },
        {
          id: 14,
          name: {
            ru: 'Tелугу',
            en: 'Telugu',
            uz: 'Telugucha',
            oz: 'Телугуча',
          },
        },
        {
          id: 15,
          name: {
            ru: 'Маратхи',
            en: 'Marathi',
            uz: 'Maratxicha',
            oz: 'Маратхича',
          },
        },
        {
          id: 16,
          name: {
            ru: 'Bьетнамский',
            en: 'Vietnamese',
            uz: 'Vetnamcha',
            oz: 'Ветнамча',
          },
        },
        {
          id: 17,
          name: {
            ru: 'Tамильский',
            en: 'Tamil',
            uz: 'Tamilcha',
            oz: 'Тамилча',
          },
        },
        {
          id: 18,
          name: {
            ru: 'Итальянский',
            en: 'Italian',
            uz: 'Italyancha',
            oz: 'Италянча',
          },
        },
        {
          id: 19,
          name: {
            ru: 'Tурецкий',
            en: 'Turkish',
            uz: 'Turkcha',
            oz: 'Туркча',
          },
        },
        {
          id: 20,
          name: {
            ru: 'Урду',
            en: 'Urdu',
            uz: 'Urdu',
            oz: 'Урду',
          },
        },
        {
          id: 21,
          name: {
            ru: 'Панджаби',
            en: 'Punjabi',
            uz: 'Panjabiycha',
            oz: 'Панжабийча',
          },
        },
        {
          id: 22,
          name: {
            ru: 'Украинский',
            en: 'Ukrainian',
            uz: 'Ukraincha',
            oz: 'Украинча',
          },
        },
        {
          id: 23,
          name: {
            ru: 'Гуджарати',
            en: 'Gujarati',
            uz: 'Gujaratcha',
            oz: 'Гужаратча',
          },
        },
        {
          id: 24,
          name: {
            ru: 'Тайский',
            en: 'Thai',
            uz: 'Tailandcha',
            oz: 'Таиландча',
          },
        },
        {
          id: 25,
          name: {
            ru: 'Польский',
            en: 'Polish',
            uz: 'Polyakcha',
            oz: 'Полякча',
          },
        },
        {
          id: 26,
          name: {
            ru: 'Малаялам',
            en: 'Malayalam',
            uz: 'Malayalamcha',
            oz: 'Малаяламча',
          },
        },
        {
          id: 27,
          name: {
            ru: 'Каннада',
            en: 'Kannada',
            uz: 'Kannadcha',
            oz: 'Каннадча',
          },
        },
        {
          id: 28,
          name: {
            ru: 'Oрия',
            en: 'Oria',
            uz: 'Oriycha',
            oz: 'Орийча',
          },
        },
        {
          id: 29,
          name: {
            ru: 'Бирманский',
            en: 'Burmese',
            uz: 'Birmacha',
            oz: 'Бирмача',
          },
        },
        {
          id: 30,
          name: {
            ru: 'Азербайджанский',
            en: 'Azerbaijani',
            uz: 'Ozarbayjoncha',
            oz: 'Озарбайжонча',
          },
        },
        {
          id: 31,
          name: {
            ru: 'Персидский',
            en: 'Persian',
            uz: 'Forscha',
            oz: 'Форсча',
          },
        },
        {
          id: 32,
          name: {
            ru: 'Cунданский',
            en: 'Sundanese',
            uz: 'Sundancha',
            oz: 'Сунданча',
          },
        },
        {
          id: 33,
          name: {
            ru: 'Пушту',
            en: 'Pashto',
            uz: 'Pushtu',
            oz: 'Пушту',
          },
        },
        {
          id: 34,
          name: {
            ru: 'Румынский',
            en: 'Rumin',
            uz: 'Rumincha',
            oz: 'Руминча',
          },
        },
        {
          id: 35,
          name: {
            ru: 'Бходжпури',
            en: 'Bhojpuri',
            uz: 'Bxojpuricha',
            oz: 'Бхожпурича',
          },
        },
        {
          id: 36,
          name: {
            ru: 'Xауса',
            en: 'Hausa',
            uz: 'Xauscha',
            oz: 'Хаусча',
          },
        },
        {
          id: 37,
          name: {
            ru: 'Майтхили',
            en: 'Maithili',
            uz: 'Maytxilcha',
            oz: 'Майтхилча',
          },
        },
        {
          id: 38,
          name: {
            ru: 'Cербский',
            en: 'Serbian',
            uz: 'Serbcha',
            oz: 'Сербча',
          },
        },
        {
          id: 39,
          name: {
            ru: 'Авадхи',
            en: 'Avadhi',
            uz: 'Avadhicha',
            oz: 'Авадхича',
          },
        },
        {
          id: 40,
          name: {
            ru: 'Узбекский',
            en: 'Uzbek',
            uz: 'O‘zbekcha',
            oz: 'Ўзбекча',
          },
        },
        {
          id: 41,
          name: {
            ru: 'Йоруба',
            en: 'Yoruba',
            uz: 'Yorubcha',
            oz: 'Ёрубча',
          },
        },
        {
          id: 42,
          name: {
            ru: 'Голландский',
            en: 'Dutch',
            uz: 'Gollancha',
            oz: 'Голландча',
          },
        },
        {
          id: 43,
          name: {
            ru: 'Cиндхи',
            en: 'Sindhi',
            uz: 'Sindcha',
            oz: 'Синдча',
          },
        },
        {
          id: 44,
          name: {
            ru: 'Игбо',
            en: 'Igbo',
            uz: 'Igbocha',
            oz: 'Игбоча',
          },
        },
        {
          id: 45,
          name: {
            ru: 'Амхарский',
            en: 'Amharic',
            uz: 'Amharcha',
            oz: 'Амҳарча',
          },
        },
        {
          id: 46,
          name: {
            ru: 'Oромо',
            en: 'Oromo',
            uz: 'Oromocha',
            oz: 'Оромоча',
          },
        },
        {
          id: 47,
          name: {
            ru: 'Индонезийский',
            en: 'Indonesian',
            uz: 'Indonezcha',
            oz: 'Индонезча',
          },
        },
        {
          id: 48,
          name: {
            ru: 'Тагальский',
            en: 'Tagalog',
            uz: 'Tagalogcha',
            oz: 'Тагалогча',
          },
        },
        {
          id: 49,
          name: {
            ru: 'Hепальский',
            en: 'Nepalese',
            uz: 'Nepalcha',
            oz: 'Непалча',
          },
        },
        {
          id: 50,
          name: {
            ru: 'Aссамский',
            en: 'Assamese',
            uz: 'Assamcha',
            oz: 'Ассамча',
          },
        },
        {
          id: 51,
          name: {
            ru: 'Сараики',
            en: 'Saraiki',
            uz: 'Saraikicha',
            oz: '',
          },
        },
        {
          id: 52,
          name: {
            ru: 'Себуанский',
            en: 'Sebuano',
            uz: 'Sebuanocha',
            oz: '',
          },
        },
        {
          id: 53,
          name: {
            ru: 'Bенгерский',
            en: 'Hungarian',
            uz: 'Vengercha',
            oz: 'Венгерча',
          },
        },
        {
          id: 54,
          name: {
            ru: 'Читтагонг',
            en: 'Chittagong',
            uz: 'Chittagongcha',
            oz: '',
          },
        },
        {
          id: 55,
          name: {
            ru: 'Чжуанский',
            en: 'Chjuan',
            uz: 'Chjuancha',
            oz: '',
          },
        },
        {
          id: 56,
          name: {
            ru: 'Шона',
            en: 'Shona',
            uz: 'Shonacha',
            oz: 'Шонача',
          },
        },
        {
          id: 57,
          name: {
            ru: 'Мадурский',
            en: 'Madur',
            uz: 'Madurcha',
            oz: 'Шонача',
          },
        },
        {
          id: 58,
          name: {
            ru: 'Cингальский',
            en: 'Sinhalese',
            uz: 'Singalcha',
            oz: 'Сингалча',
          },
        },
        {
          id: 59,
          name: {
            ru: 'Марвари',
            en: 'Marvari',
            uz: 'Marvaricha',
            oz: '',
          },
        },
        {
          id: 60,
          name: {
            ru: 'Магахи',
            en: 'Magaxi',
            uz: 'Magaxicha',
            oz: '',
          },
        },
        {
          id: 61,
          name: {
            ru: 'Харьянви',
            en: 'Xaryanvi',
            uz: 'Xaryanvicha',
            oz: '',
          },
        },
        {
          id: 62,
          name: {
            ru: 'Греческий',
            en: 'Greek',
            uz: 'Yunoncha',
            oz: 'Юнонча',
          },
        },
        {
          id: 63,
          name: {
            ru: 'Чешский',
            en: 'Czech',
            uz: 'Chexcha',
            oz: 'Чехча',
          },
        },
        {
          id: 64,
          name: {
            ru: 'Чхаттисгархи',
            en: 'Chattisgarhi',
            uz: 'Chattisgarhicha',
            oz: '',
          },
        },
        {
          id: 65,
          name: {
            ru: 'Фула',
            en: 'Fula',
            uz: 'Fulacha',
            oz: '',
          },
        },
        {
          id: 66,
          name: {
            ru: 'Дакхни',
            en: 'Daxni',
            uz: 'Daxni',
            oz: '',
          },
        },
        {
          id: 67,
          name: {
            ru: 'Малагасийский',
            en: 'Malagasy',
            uz: 'Malagascha',
            oz: 'Малагасча',
          },
        },
        {
          id: 68,
          name: {
            ru: 'Белорусский',
            en: 'Belorussian',
            uz: 'Belaruscha',
            oz: 'Беларусча',
          },
        },
        {
          id: 69,
          name: {
            ru: 'Tаджикский',
            en: 'Tajik',
            uz: 'Tojikcha',
            oz: 'Тожикча',
          },
        },
        {
          id: 70,
          name: {
            ru: 'Шотландский (гэльский)',
            en: 'Scottish (Gaelic)',
            uz: 'Shotlandcha (Gellik)',
            oz: 'Шотландча (Геллик)',
          },
        },
        {
          id: 71,
          name: {
            ru: 'Казахский',
            en: 'Kazakh',
            uz: 'Qozoqcha',
            oz: 'Қозоқча',
          },
        },
        {
          id: 72,
          name: {
            ru: 'Шведский',
            en: 'Swedish',
            uz: 'Shvedcha',
            oz: 'Шведча',
          },
        },
        {
          id: 73,
          name: {
            ru: 'Болгарский',
            en: 'Bulgarian',
            uz: 'Bolgarcha',
            oz: 'Болгарча',
          },
        },
        {
          id: 74,
          name: {
            ru: 'Боснийский',
            en: 'Bosnian',
            uz: 'Bosniyacha',
            oz: 'Боснияча',
          },
        },
        {
          id: 75,
          name: {
            ru: 'Гавайский',
            en: 'Hawaiian',
            uz: 'Gavaycha',
            oz: 'Гавайча',
          },
        },
        {
          id: 76,
          name: {
            ru: 'Xорватский',
            en: 'Croatian',
            uz: 'Xorvatcha',
            oz: 'Хорватча',
          },
        },
        {
          id: 77,
          name: {
            ru: 'Грузинский',
            en: 'Georgian',
            uz: 'Gruzincha',
            oz: 'Грузинча',
          },
        },
        {
          id: 78,
          name: {
            ru: 'Уйгурский',
            en: 'Uigur',
            uz: 'Uyg‘urcha',
            oz: 'Уйғурча',
          },
        },
        {
          id: 79,
          name: {
            ru: 'Филиппинский',
            en: 'Philippine',
            uz: 'Filippincha',
            oz: 'Филиппинча',
          },
        },
        {
          id: 80,
          name: {
            ru: 'Tуркменский',
            en: 'Turkmen',
            uz: 'Turkmancha',
            oz: 'Туркманча',
          },
        },
        {
          id: 82,
          name: {
            ru: 'Tатарский',
            en: 'Tatarian',
            uz: 'Tatarcha',
            oz: 'Татарча',
          },
        },
        {
          id: 83,
          name: {
            ru: 'Ирландский',
            en: 'Irish',
            uz: 'Irlandcha',
            oz: 'Ирландча',
          },
        },
        {
          id: 84,
          name: {
            ru: 'Исландский',
            en: 'Icelandic',
            uz: 'Islandcha',
            oz: 'Исландча',
          },
        },
        {
          id: 85,
          name: {
            ru: 'Албанский',
            en: 'Albansky',
            uz: 'Albancha',
            oz: 'Aлбанча',
          },
        },
        {
          id: 86,
          name: {
            ru: 'Киргизский',
            en: 'Kyrgyz',
            uz: 'Qirg‘izcha',
            oz: 'Қирғизча',
          },
        },
        {
          id: 87,
          name: {
            ru: 'Латинский',
            en: 'Latin',
            uz: 'Lotincha',
            oz: 'Лотинча',
          },
        },
        {
          id: 88,
          name: {
            ru: 'Корсиканский',
            en: 'Corsican',
            uz: 'Korsikancha',
            oz: 'Корсиканча',
          },
        },
        {
          id: 89,
          name: {
            ru: 'Коса',
            en: 'Xhosa',
            uz: 'Kosacha',
            oz: 'Косача',
          },
        },
        {
          id: 90,
          name: {
            ru: 'Креольский (Гаити)',
            en: 'Creole (Haiti)',
            uz: 'Kreolcha (Gaiti)',
            oz: 'Креолча (Гаити)',
          },
        },
        {
          id: 91,
          name: {
            ru: 'Крио',
            en: 'Creole (Sierra Leonean)',
            uz: 'Kreolcha (Syerra Lion)',
            oz: 'Креолча (Съерра Лион)',
          },
        },
        {
          id: 92,
          name: {
            ru: 'Курдский (курманджи)',
            en: 'Kurdish (Kurmanji)',
            uz: 'Kurdcha (Kurmanji)',
            oz: 'Курдча (Курманжи)',
          },
        },
        {
          id: 93,
          name: {
            ru: 'Курдский (сорани)',
            en: 'Kurdish (Sorani)',
            uz: 'Kurdcha (Sorani)',
            oz: 'Курдча (Сорани)',
          },
        },
        {
          id: 94,
          name: {
            ru: 'Кхмерский',
            en: 'Khmer',
            uz: 'Xmercha',
            oz: 'Хмерча',
          },
        },
        {
          id: 95,
          name: {
            ru: 'Лаосский',
            en: 'Laotian',
            uz: 'Laosscha',
            oz: 'Лаоссча',
          },
        },
        {
          id: 96,
          name: {
            ru: 'Латышский',
            en: 'Latvian',
            uz: 'Latviycha',
            oz: 'Латвийча',
          },
        },
        {
          id: 97,
          name: {
            ru: 'Лингала',
            en: 'Lingala',
            uz: 'Lingalcha',
            oz: 'Лингалча',
          },
        },
        {
          id: 98,
          name: {
            ru: 'Литовский',
            en: 'Lithuanian',
            uz: 'Litvacha',
            oz: 'Литвача',
          },
        },
        {
          id: 99,
          name: {
            ru: 'Луганда',
            en: 'Lugandan',
            uz: 'Lugandacha',
            oz: 'Лугандача',
          },
        },
        {
          id: 100,
          name: {
            ru: 'Люксембургский',
            en: 'Luxembourgish',
            uz: 'Lyukcemburgcha',
            oz: 'Люксембургча',
          },
        },
        {
          id: 101,
          name: {
            ru: 'Македонский',
            en: 'Macedonian',
            uz: 'Makedoncha',
            oz: 'Македонча',
          },
        },
        {
          id: 102,
          name: {
            ru: 'Малайский',
            en: 'Malay',
            uz: 'Malaycha',
            oz: 'Малайча',
          },
        },
        {
          id: 103,
          name: {
            ru: 'Мальдивский',
            en: 'Maldivian',
            uz: 'Maldivcha',
            oz: 'Малдивча',
          },
        },
        {
          id: 104,
          name: {
            ru: 'Мальтийский',
            en: 'Maltese',
            uz: 'Maltiycha',
            oz: 'Малтийча',
          },
        },
        {
          id: 105,
          name: {
            ru: 'Маори',
            en: 'Maori',
            uz: 'Maoricha',
            oz: 'Маорича',
          },
        },
        {
          id: 106,
          name: {
            ru: 'Мейтейлон (манипури)',
            en: 'Mayteilon (manipuri)',
            uz: 'Meyteyloncha (manipuri)',
            oz: 'Мейтейлонча (манипури)',
          },
        },
        {
          id: 107,
          name: {
            ru: 'Мизо',
            en: 'Mizo',
            uz: 'Mizocha',
            oz: 'Мизоча',
          },
        },
        {
          id: 108,
          name: {
            ru: 'Монгольский',
            en: 'Mongolian',
            uz: 'Mo‘g‘ulcha',
            oz: 'Мўғулча',
          },
        },
        {
          id: 109,
          name: {
            ru: 'Конкани',
            en: 'Konkani',
            uz: 'Konkanicha',
            oz: 'Конканича',
          },
        },
        {
          id: 110,
          name: {
            ru: 'Кечуа',
            en: 'Quechua',
            uz: 'Kechuacha',
            oz: 'Кечуача',
          },
        },
        {
          id: 112,
          name: {
            ru: 'Hорвежский',
            en: 'Norwegian',
            uz: 'Norvegcha',
            oz: 'Норвегча',
          },
        },
        {
          id: 113,
          name: {
            ru: 'Каталанский',
            en: 'Catalan',
            uz: 'Katalancha',
            oz: 'Каталанча',
          },
        },
        {
          id: 114,
          name: {
            ru: 'Пушту',
            en: 'Pashto',
            uz: 'Pushtu',
            oz: 'Пушту',
          },
        },
        {
          id: 115,
          name: {
            ru: 'Pуанда',
            en: 'Rwanda',
            uz: 'Ruandcha',
            oz: 'Руандча',
          },
        },
        {
          id: 116,
          name: {
            ru: 'Илоканский',
            en: 'Ilokan',
            uz: 'Ilokancha',
            oz: 'Илоканча',
          },
        },
        {
          id: 117,
          name: {
            ru: 'Аймара',
            oz: 'Аймара',
            uz: 'Aymara',
            en: 'Aymara',
          },
        },
        {
          id: 118,
          name: {
            ru: 'Cамоанский',
            en: 'Samoan',
            uz: 'Samoancha',
            oz: 'Самоанча',
          },
        },
        {
          id: 119,
          name: {
            ru: 'Cанскрит',
            en: 'Sanskrit',
            uz: 'Sanskritcha',
            oz: 'Санскритча',
          },
        },
        {
          id: 120,
          name: {
            ru: 'Cебуанский',
            en: 'Cebuan',
            uz: 'Sebuancha',
            oz: 'Себуанча',
          },
        },
        {
          id: 121,
          name: {
            ru: 'Cепеди',
            en: 'Cepedi',
            uz: 'Sepedcha',
            oz: 'Сепедча',
          },
        },
        {
          id: 122,
          name: {
            ru: 'Cесото',
            en: 'Sesotho',
            uz: 'Sesotocha',
            oz: 'Сесоточа',
          },
        },
        {
          id: 123,
          name: {
            ru: 'Cловацкий',
            en: 'Slovak',
            uz: 'Slovakcha',
            oz: 'Словакча',
          },
        },
        {
          id: 124,
          name: {
            ru: 'Cловенский',
            en: 'Slovenian',
            uz: 'Slovencha',
            oz: 'Словенча',
          },
        },
        {
          id: 125,
          name: {
            ru: 'Cомалийский',
            en: 'Somali',
            uz: 'Somaliycha',
            oz: 'Сомалийча',
          },
        },
        {
          id: 126,
          name: {
            ru: 'Cуахили',
            en: 'Swahili',
            uz: 'Suaxilcha',
            oz: 'Суахилча',
          },
        },
        {
          id: 127,
          name: {
            ru: 'Бамбара',
            oz: 'Бамбарча',
            uz: 'Bambarcha',
            en: 'Bambareese',
          },
        },
        {
          id: 128,
          name: {
            ru: 'Tайский',
            en: 'Thai',
            uz: 'Taycha',
            oz: 'Тайча',
          },
        },
        {
          id: 129,
          name: {
            ru: 'Идиш',
            en: 'Yiddish',
            uz: 'Yiddishcha',
            oz: 'Йиддишча',
          },
        },
        {
          id: 130,
          name: {
            ru: 'Tигринья',
            en: 'Tigrinya',
            uz: 'Tigrincha',
            oz: 'Тигринча',
          },
        },
        {
          id: 131,
          name: {
            ru: 'Tсонга',
            en: 'Tsonga',
            uz: 'Tsongacha',
            oz: 'Тсонгача',
          },
        },
        {
          id: 132,
          name: {
            ru: 'Гуарани',
            en: 'Guarani',
            uz: 'Guarancha',
            oz: 'Гуаранча',
          },
        },
        {
          id: 133,
          name: {
            ru: 'Иврит',
            oz: 'Hebrew',
            uz: 'Ibroniycha',
            en: 'Ибронийча',
          },
        },
        {
          id: 134,
          name: {
            ru: 'Зулу',
            en: 'Zulu',
            uz: 'Zulucha',
            oz: 'Зулуча',
          },
        },
        {
          id: 135,
          name: {
            ru: 'Финский',
            en: 'Finnish',
            uz: 'Fincha',
            oz: 'Финча',
          },
        },
        {
          id: 136,
          name: {
            ru: 'Догри',
            en: 'Dogri',
            uz: 'Dogricha',
            oz: 'Догрича',
          },
        },
        {
          id: 137,
          name: {
            ru: 'Фризский',
            en: 'Frisian',
            uz: 'Frizcha',
            oz: 'Фризча',
          },
        },
        {
          id: 138,
          name: {
            ru: 'Датский',
            en: 'Danish',
            uz: 'Daniyacha',
            oz: 'Данияча',
          },
        },
        {
          id: 139,
          name: {
            ru: 'Xмонг',
            en: 'Xmong',
            uz: 'Xmongcha',
            oz: 'Хмонгча',
          },
        },
        {
          id: 140,
          name: {
            ru: 'Галисийский',
            oz: 'Galician',
            uz: 'Galisiycha',
            en: 'Галисийча',
          },
        },
        {
          id: 141,
          name: {
            ru: 'Чви',
            en: 'Chwi',
            uz: 'Chvicha',
            oz: 'Чвича',
          },
        },
        {
          id: 142,
          name: {
            ru: 'Чева',
            en: 'Cheva',
            uz: 'Chevacha',
            oz: 'Чевача',
          },
        },
        {
          id: 143,
          name: {
            ru: 'Bаллийский',
            oz: 'Welsh',
            uz: 'Uelscha',
            en: 'Уэлсча',
          },
        },
        {
          id: 144,
          name: {
            ru: 'Баскский',
            en: 'Basque',
            uz: 'Baskcha',
            oz: 'Баскча',
          },
        },
        {
          id: 145,
          name: {
            ru: 'Эве',
            en: 'Ewe',
            uz: 'Evcha',
            oz: 'Эвча',
          },
        },
        {
          id: 146,
          name: {
            ru: 'Эсперанто',
            en: 'Esperanto',
            uz: 'Esperantcha',
            oz: 'Эсперантча',
          },
        },
        {
          id: 147,
          name: {
            ru: 'Эстонский',
            en: 'Estonian',
            uz: 'Estoncha',
            oz: 'Эстонча',
          },
        },
        {
          id: 148,
          name: {
            ru: 'Aфрикаанс',
            en: 'Afrikaans',
            uz: 'Afrikaanscha',
            oz: 'Африкаансча',
          },
        },
      ],
      certificates: [
        'International English Language Testing System (IELTS)',
        'Test of English as a Foreign Language (TOEFL ITP)',
        'Cambridge Assessment English',
        'APTIS for teachers',
        'Test of English for International Communication (TOEIC)',
        'Linguaskill',
        "Diplôme d'Etudes en Langue Française (DELF)",
        'Diplôme Approfondi de Langue Française (DALF)',
        'Test de Connaissance du Français (TCF)',
        'Goethe-Zertifikat',
        'Deutsches Sprachdiplom (DSD I)',
        'Deutsches Sprachdiplom (DSD II)',
        'Test Deutsch als Fremdsprache (Test DAF)',
        'Diplomas de Español como Lengua Extranjera (DELE)',
        'Servicio Internacional de Evaluación de la Lengua Española (SIELE)',
        'Certificato di Conoscenza della Lingua Italiana (CELI)',
        'Certificazione di Italiano come Lingua Straniera (CILS)',
        'Accademia Italiana di Lingua (AIL)',
        'Test of Russian as a Foreign Language (TORFL)',
        'Test po russkomu yaziku kak inostrannomu (TRKI)',
        'The Arabic Language Proficiency Test, Arabic Proficiency Test (ALPT, APT, E-TOAFL)',
        'American Council on the Teaching of Foreign Languages (ACTFL)',
        'AT Tanal Al Arabi',
        'Nanyu Shuiping Kaoshi (NSK)',
        'Japanese Language Proficiency Test (JLPT)',
        'Test of Proficiency in Korean (TOPIK I)',
        'Test of Proficiency in Korean (TOPIK II)',
        'Türkçe Yeterlik Sınavı (TYS)',
        'İstanbul Aydın Üniversitesi Türkçe Öğretimi Uygulama ve Araştırma Merkezi (Aydın TÖMER)',
      ],
      levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    }
  },
  components: {
    Icons,
  },

  methods: {
    onFileChange(event, index) {
      if (event.target.files[0]) {
        const file = event.target.files[0]
        const selectedLang = this.langs.find(
          (lang) => lang.id === this.rows[index].languages
        )
        const languageId = selectedLang?.id || ''
        const newFileName = `${languageId}.jpg` // Nomini kerakli formatda o'zgartirish

        if (file.size / 1048576 >= 5) {
          this.$message.error('Wrong file, file must be smaller than 5MB')
        } else {
          // Faylni `applications` obyektida saqlash
          this.applications[`image_${languageId}`] = file
        }
      }
    },
    send() {
      const formData = new FormData()
      formData.append('pin', this.user.pin)
      formData.append('first_name', this.user.first_name)
      formData.append('sur_name', this.user.sur_name)
      formData.append('middle_name', this.user.middle_name)
      formData.append('address', this.user.address)
      formData.append('tin', this.user.tin)
      formData.append('pport_num', this.user.pport_num)
      formData.append('email', this.user.email)
      formData.append('phone_number', this.user.phone_number)
      formData.append('birth_place', this.user.birth_place)
      formData.append('birth_date', this.user.birth_date)
      formData.append('gd', this.user.gender)

      // Append application details
      formData.append('application_type', this.applications.application_type)
      formData.append('university', this.applications.university)
      formData.append('major', this.applications.major)
      formData.append('experience', this.applications.experience)
      formData.append('per_adr', this.applications.per_adr)

      // Append language certificates
      this.rows.forEach((row) => {
        const langCert = {
          certificate_type: row.certType,
          certificate_score: row.certLevel,
          lang_id: row.languages,
        }
        this.applications.langcerlist.push(langCert)
      })
      formData.append(
        'langcerlist',
        JSON.stringify(this.applications.langcerlist)
      )

      // Append files with dynamic keys
      Object.keys(this.applications).forEach((key) => {
        if (this.applications[key] instanceof File) {
          formData.append(key, this.applications[key])
        }
      })
      // Append user ID (if available)
      this.user.user_id = 1
      formData.append('user_id', this.user.user_id)

      function logFormData(formData) {
        for (let pair of formData.entries()) {
          console.log(`${pair[0]}:`, pair[1])
        }
      }

      // formData ni log qilish
      logFormData(formData)

      this.$axios
        .post('applications/create', formData)
        .then((res) => {
          console.log('res :', res)
          if (res) {
            this.$message.success(this.$t('succAppl'))
            setTimeout(() => {
              this.$router.push('/' + this.$i18n.locale + '/applications')
            }, 1500)
          }
        })
        .catch((err) => {
          const errorCode = err.response.data.error
          console.log('errorCode :', errorCode)
        })
    },
    formatPhoneNumber() {
      const num = this.user.phone_number
        ?.replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
      if (num[0].length < 2) {
        this.user.phone_number = !num[2]
          ? '+998 ' + num[1]
          : '+' +
            num[1] +
            ' ' +
            num[2] +
            (!num[3] ? '' : ' ' + num[3]) +
            (!num[4] ? '' : '-' + num[4]) +
            (!num[5] ? '' : '-' + num[5])
      } else
        this.user.phone_number = !num[2]
          ? '+998 '
          : '+' +
            num[1] +
            ' ' +
            num[2] +
            (!num[3] ? '' : ' ' + num[3]) +
            (!num[4] ? '' : '-' + num[4]) +
            (!num[5] ? '' : '-' + num[5])
    },
    changeAvatar(e) {
      if (e) {
        let img = new Image()
        img.src = window.URL.createObjectURL(e.target.files[0])
        img.onload = () => {
          if (
            img.width / img.height <= 0.72 ||
            img.width / img.height >= 0.78
          ) {
            let message1 = {
              uz: 'Tasvir noto‘g‘ri, tasvir 3x4 nisbatda bo‘lishi kerak',
              ru: 'Изображение недопустимо. Размер изображения должен быть 3x4',
              en: 'Wrong image , image must be 3x4',
            }
            this.$message.error(message1[this.$i18n.locale])
          } else {
            let message2 = {
              uz: 'Rasm noto‘g‘ri, rasm 5 MB dan kichik bo‘lishi kerak',
              ru: 'Неправильное изображение. Изображение должно быть меньше 5 МБ',
              en: 'Wrong image , image must be smaller 5MB',
            }
            if (e.target.files[0].size / 1048576 >= 5) {
              this.$message.error(message2[this.$i18n.locale])
            } else {
              this.avatar = URL.createObjectURL(e.target.files[0])
              this.applications.badge_img = e.target.files[0]
            }
          }
        }
      }
    },

    handleRemove(file, fileList) {
      console.log('remove', file, fileList)
    },
    setFile(e, key) {
      if (e) {
        if (e.target.files[0].size / 1048576 >= 5) {
          this.$message.error('wrong file, file must be smaller 5MB')
        } else {
          this.applications[key] = e.target.files[0]
        }
      }
    },
    addRow() {
      // Define a new row with empty fields
      const newRow = { languages: '', certType: '', certLevel: '', file: null }

      // Check if any existing row is incomplete
      const hasIncompleteRow = JSON.parse(JSON.stringify(this.rows)).some(
        (row) => !row.languages || !row.certType || !row.certLevel
      )

      if (hasIncompleteRow) {
        alert(
          'Please complete all fields in the existing rows before adding a new row.'
        )
      } else {
        // Add the new row with empty fields
        this.rows.push(newRow)
      }
    },
    removeRow(index) {
      // Check if there are rows to remove
      if (this.rows.length > 1) {
        this.rows.splice(index, 1)
      }
    },
  },
  async mounted() {
    this.preloading = false

    this.preloading = true
  },
}
</script>
<style scoped>
.form__table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.form__thead {
  background-color: #f4f4f4;
}

.form__tr {
  border-bottom: 1px solid #ddd;
}

.form__th,
.form__td {
  padding: 10px 15px;
  text-align: left;
}

.form__th {
  font-weight: bold;
}

.form__td {
  vertical-align: middle;
}

.form__el-select {
  width: 100%;
}

.form__el-input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form__button {
  padding: 5px 10px;
  cursor: pointer;
}

.form__button--remove {
  background-color: #ff4d4d;
  border: none;
  color: white;
  border-radius: 4px;
}

.m-2 {
  margin: 8px 0;
}

.form__button--add {
  display: flex;
  justify-content: end;
  margin-top: 20px;
}

.form__button--add button {
  background-color: #4caf50;
  color: white;
  width: 100px;
}

.form__button--submit {
  display: block;
  margin: 20px auto;
  background-color: #008cba;
  color: white;
}
</style>
