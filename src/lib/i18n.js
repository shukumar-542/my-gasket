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
          welcomeMessage: "WELCOME TO MYGASKET",
          eventPlanningDescription:
            "Simplify your event planning with powerful, easy-to-use features designed to enhance guest experience and streamline management.",
          getStarted: "Get Started",
          discover: "Discover",
          materialsWeOffer: "Materials We Offer",
          gasketAutomationDescription:
            "Get the perfect gasket for your needs with our precision manufacturing and automated quoting system. Simply upload your design, choose materials, and get an instant price!",
          mostFrequentlyAskedQuestionsTitle: "Most frequently asked questions",
          seeAll: "See All",
          whatCustomersSay: "What our customers say",
          getInTouchWithUs: "Get in Touch with Us",
          messageUsNow: "Message us Now",
          questionsOrAssistance: "Have questions or need assistance? We're here to help!",
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
          welcomeMessage: "BENVENUTO A MYGASKET",
          eventPlanningDescription:
            "Semplifica la pianificazione dei tuoi eventi con funzionalità potenti e facili da usare, progettate per migliorare l'esperienza degli invitati e ottimizzare la gestione.",
          getStarted: "Inizia",
          discover: "Scopri",
          gasketAutomationDescription:
            "Ottieni la guarnizione perfetta per le tue esigenze grazie alla nostra produzione di precisione e al sistema di quotazione automatizzato. Ti basterà caricare il tuo progetto, scegliere i materiali e ottenere un prezzo istantaneo!",
          materialsWeOffer: "Materiali che Offriamo",
          mostFrequentlyAskedQuestionsTitle: "Domande più frequenti",
          seeAll: "Vedi Tutto",
          whatCustomersSay: "Cosa dicono i nostri clienti",
          getInTouchWithUs: "Mettiti in Contatto con Noi",
          messageUsNow: "Scrivici Ora",
          questionsOrAssistance: "Hai domande o hai bisogno di assistenza? Siamo qui per aiutarti!",
        },
      },
    },
  });

export default i18n;
