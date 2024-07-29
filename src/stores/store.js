import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
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
      regions: [
        {
          id: 1,
          name: {
            ru: 'Андижанская область',
            en: 'Andijan region',
            uz: 'Andijon viloyati',
          },
        },
        {
          id: 2,
          name: {
            ru: 'Бухарская область',
            en: 'Bukhara region',
            uz: 'Buxoro viloyati',
          },
        },
        {
          id: 3,
          name: {
            ru: 'Ферганская область',
            en: 'Ferghana region',
            uz: 'Farg‘ona viloyati',
          },
        },
        {
          id: 4,
          name: {
            ru: 'Джизакская область',
            en: 'Jizzakh region',
            uz: 'Jizzax viloyati',
          },
        },
        {
          id: 5,
          name: {
            ru: 'Наманганская область',
            en: 'Namangan region',
            uz: 'Namangan viloyati',
          },
        },
        {
          id: 6,
          name: {
            ru: 'Навоийская область',
            en: 'Navoi region',
            uz: 'Navoiy viloyati',
          },
        },
        {
          id: 7,
          name: {
            ru: 'Кашкадарьинская область',
            en: 'Kashkadarya region',
            uz: 'Qashqadaryo viloyati',
          },
        },
        {
          id: 8,
          name: {
            ru: 'Республика Каракалпакстан',
            en: 'Republic of Karakalpakstan',
            uz: 'Qoraqalpo‘iston Respublikasi',
          },
        },
        {
          id: 9,
          name: {
            ru: 'Самаркандская область',
            en: 'Samarkand region',
            uz: 'Samarqand viloyati',
          },
        },
        {
          id: 10,
          name: {
            ru: 'Сырдарьинская область',
            en: 'Syrdarya region',
            uz: 'Sirdaryo viloyati',
          },
        },
        {
          id: 11,
          name: {
            ru: 'Сурхандарьинская область',
            en: 'Surkhandarya region',
            uz: 'Surxondaryo viloyati',
          },
        },
        {
          id: 12,
          name: {
            ru: 'город Ташкент',
            en: 'Tashkent city',
            uz: 'Toshkent shahri',
          },
        },
        {
          id: 13,
          name: {
            ru: 'Ташкентская область',
            en: 'Tashkent region',
            uz: 'Toshkent viloyati',
          },
        },
        {
          id: 14,
          name: {
            ru: 'Хорезмская область',
            en: 'Khorezm region',
            uz: 'Xorazm viloyati',
          },
        },
        {
          id: 15,
          name: {
            ru: 'Горы Узбекистана',
            en: 'Mountains of Uzbekistan',
            uz: 'O‘zbekiston tog‘lari',
          },
        },
      ],
    }
  },
})
