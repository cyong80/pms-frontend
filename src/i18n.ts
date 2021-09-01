import i18next from 'i18next'
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'

import tranEn from './locales/en.json';
import tranKo from './locales/ko.json';

const resources = {
    en: { translation: tranEn },
    ko: { translation: tranKo },
}

i18next
    .use(initReactI18next)
    .use(detector)
    .init({

        resources,
        lng: "en",
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;