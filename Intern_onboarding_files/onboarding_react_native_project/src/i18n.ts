import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zh from './locales/zh.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: 'zh', // 跟随设备语言
  fallbackLng: 'en', // 没有匹配时默认英文
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
