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
          myGasket: "My Gasket",
          howItWorks: "How It Works",
          processDescription:
            "We break down the process into simple steps to ensure seamless execution, from start to finish.",
          uploadDrawing:
            "Upload your drawing (we only accept DWG or DXF files)",
          getInstantQuote: "Get Instant Quote",
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
          howItWorks: "Come Funziona",
          processDescription:
            "Suddividiamo il processo in semplici passaggi per garantire un'esecuzione impeccabile, dall'inizio alla fine.",
          uploadDrawing:
            "Carica il tuo disegno (accettiamo solo file DWG o DXF)",
          getInstantQuote: "Ottieni un Preventivo Immediato",
        },
      },
    },
  });

export default i18n;
