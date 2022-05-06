import { BG } from '@/locales/bg/BG';
import { DE } from '@/locales/de/DE';
import { EN } from '@/locales/en/EN';
import { ES } from '@/locales/es/ES';
import { FI } from '@/locales/fi/FI';
import { FR } from '@/locales/fr/FR';
import { IT } from '@/locales/it/IT';
import { NO } from '@/locales/no/NO';
import { RU } from '@/locales/ru/RU';
import { TR } from '@/locales/tr/TR';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: EN,
  },
  fr: {
    translation: FR,
  },
  de: {
    translation: DE,
  },
  ru: {
    translation: RU,
  },
  bg: {
    translation: BG,
  },
  fi: {
    translation: FI,
  },
  no: {
    translation: NO,
  },
  it: {
    translation: IT,
  },
  tr: {
    translation: TR,
  },
  es: {
    translation: ES,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources,
});

export default i18n;
