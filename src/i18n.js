// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messages from './data'; // Importa los mensajes desde tu archivo data.tsx

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: messages.en,
    },
    es: {
      translation: messages.es,
    },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React ya escapa por defecto
  },
});

export default i18n;
