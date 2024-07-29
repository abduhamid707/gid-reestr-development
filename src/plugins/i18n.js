// import { createI18n } from "vue-i18n";
// import locales from '../locale/index'
  
// let locale = window.location.pathname.replace(/^\/([^/]+).*/i,'$1');
// const i18n = createI18n({
//     // legacy: false,
//     // globalInjection: true,
//     locale: (locale.trim().length && locale != "/") ? locale : 'uz',
//     messages: locales
//   });

// export default i18n

import { createI18n } from 'vue-i18n';
import locales from '../locale/index';

const locale = window.location.pathname.replace(/^\/([^/]+).*/i,'$1');
const i18n = createI18n({
    locale: (locale.trim().length && locale != "/") ? locale : 'uz',
    messages: locales
});

export default i18n;
