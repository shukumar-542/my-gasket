// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "English",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      English: {
        translation: {
          home: "Home",
          aboutUs: "About Us",
          contactUs: "Contact Us",
          faqs: "FAQs",
          trackYourOrder: "Track Your Order",
          myGasket: "My Gasket"
        },
      },
      Italy: {
        translation: {
          home: "Casa",
          aboutUs: "Chi Siamo",
          contactUs: "Contattaci",
          faqs: "Domande Frequenti",
          trackYourOrder: "Traccia il Tuo Ordine",
          myGasket: "La Mia Guarnizione", 
        },
      },
    },
  });

export default i18n;
