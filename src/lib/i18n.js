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
          questionsOrAssistance:
            "Have questions or need assistance? We're here to help!",
          // About us
          aboutUs: "About Us",
          highQualityMaterials: "High-Quality Materials for Every Need",
          materialsDescription:
            "At My Gasket, we provide a wide selection of premium materials, including rubber, silicone, and metal, ensuring durability and performance for various industries.",
          customizationPrecisionEngineering:
            "Customization & Precision Engineering",
          customProjectDescription:
            "We understand that every project is unique. That's why we offer custom thickness options, precision cutting, and DXF file uploads, allowing you to create gaskets tailored to your exact requirements.",
          reliableServiceFastDelivery: "Reliable Service & Fast Delivery",
          serviceDeliveryDescription:
            "From manufacturing to delivery, we prioritize efficiency and accuracy. With our streamlined process, you can expect quick turnaround times and secure shipping to get your gaskets exactly when you need them.",
          yearsExperienceGasketField: "years of experience in the gasket field",
          industry40Description:
            "We leverage the power of Industry 4.0 to deliver fast, precise, and customizable gasket solutions.",
          materials: "Materials",
          standardOrdersItaly: "for standard orders in all Italy",
          madeInItaly: "Made in Italy",
          gasketOriginDescription:
            "All our gaskets are proudly designed and manufactured in Italy, combining traditional craftsmanship with modern technology.",
          gasketOriginDescription:
            "All our gaskets are proudly designed and manufactured in Italy, combining traditional craftsmanship with modern technology.",
          noMinimumOrders:
            "We decided to not put a minimum order. We only apply a small fixed cost for each material and thickness.",
          gasketOriginDescription:
            "Tutte le nostre guarnizioni sono orgogliosamente progettate e prodotte in Italia, combinando l'artigianato tradizionale con la tecnologia moderna.",
          noMinimumOrders:
            "Abbiamo deciso di non applicare un minimo d'ordine. Applichiamo solo un piccolo costo fisso per ogni materiale e spessore.",
          noMinimumOrdersShort: "No minimum orders",
          noWaste: "No waste",
          wasteReductionDescription:
            "We optimized cutting paths, minimize scraps and reduce environmental impact without compromising on quality.",
          highQuality: "High quality",
          qualityAssuranceDescription:
            "We use top-grade materials and state-of-the-art machinery to ensure every gasket meets the highest standards.",
          ultraFastReplies: "Ultra fast replies",
          replyTimePromise:
            "Our team will get back to you in less than 24 hours",
          easyCustomGasketOrder:
            "Thanks to our instant quote generator, it is easier than ever to order your custom gasket!",
          instantQuote: "Instant quote",
          getGasketNow: "Get your gasket now!",
          buyNow: "Buy Now",
          buyNow: "Acquista ora",
          contactUs: "Contact Us",
          leaveQuestionPrompt:
            "Leave your question below, and our team will get back to you asap!",
          firstName: "First Name",
          lastName: "Last Name",
          question: "Question",
          questionPlaceholder: "Like. What included in ...",
          stateSector: "State / Sector",
          city: "City",
          clientTypeQuestion: "Are you a Private Client or a Company",
          selectOnePlaceholder: "Select One",
          phoneNumber: "Phone Number",
          phoneNumberPlaceholder: "Like. +8801872999030",
          emailAddress: "Email Address",
          emailAddressPlaceholder: "Like. bllkpetd92@gmail.com",
          sendMessageNow: "Send message now",
          customGasketsMadeEasy: "Custom Gaskets, Made Easy",
          gasketAutomationDescription:
            "Get the perfect gasket for your needs with our precision manufacturing and automated quoting system. Simply upload your design, choose materials, and get an instant price!",
          highPrecisionCutting: "HIGH PRECISION CUTTING",
          instantQuoteBenefitDescription:
            "Our advanced software calculates your gasket's cost in real time, providing an accurate quote instantly. No waiting, no hassle—just fast, efficient, and reliable service.",
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
          questionsOrAssistance:
            "Hai domande o hai bisogno di assistenza? Siamo qui per aiutarti!",
          // About us
          aboutUs: "Chi Siamo",
          highQualityMaterials: "Materiali di Alta Qualità per Ogni Esigenza",
          materialsDescription:
            "A My Gasket, offriamo un'ampia selezione di materiali di alta qualità, tra cui gomma, silicone e metallo, garantendo durata e prestazioni per diverse industrie.",
          customizationPrecisionEngineering:
            "Personalizzazione e Ingegneria di Precisione",
          customProjectDescription:
            "Comprendiamo che ogni progetto è unico. Ecco perché offriamo opzioni di spessore personalizzate, taglio di precisione e caricamento di file DXF, permettendoti di creare guarnizioni su misura per le tue esatte esigenze.",
          reliableServiceFastDelivery: "Servizio Affidabile e Consegna Veloce",
          serviceDeliveryDescription:
            "Dalla produzione alla consegna, diamo priorità all'efficienza e alla precisione. Con il nostro processo ottimizzato, puoi aspettarti tempi di consegna rapidi e spedizioni sicure per ricevere le tue guarnizioni esattamente quando ne hai bisogno.",
          yearsExperienceGasketField:
            "Anni di esperienza nel settore delle guarnizioni",
          industry40Description:
            "Sfruttiamo la potenza dell'Industria 4.0 per fornire soluzioni di guarnizioni veloci, precise e personalizzabili.",
          materials: "Materiali",
          standardOrdersItaly: "per ordini standard in tutta Italia",
          madeInItaly: "Fatto in Italia",
          gasketOriginDescription:
            "Tutte le nostre guarnizioni sono orgogliosamente progettate e prodotte in Italia, combinando l'artigianato tradizionale con la tecnologia moderna.",
          noMinimumOrdersShort: "Nessun minimo d'ordine",
          noWaste: "Nessuno spreco",
          wasteReductionDescription:
            "Abbiamo ottimizzato i percorsi di taglio, minimizzato gli scarti e ridotto l'impatto ambientale senza compromettere la qualità.",
          highQuality: "Alta qualità",
          qualityAssuranceDescription:
            "Utilizziamo materiali di prima qualità e macchinari all'avanguardia per garantire che ogni guarnizione soddisfi i più alti standard.",
          ultraFastReplies: "Risposte ultra rapide",
          replyTimePromise: "Il nostro team ti ricontatterà in meno di 24 ore.",
          instantQuote: "Preventivo istantaneo",
          easyCustomGasketOrder:
            "Grazie al nostro generatore di preventivi istantanei, ordinare la tua guarnizione personalizzata è più facile che mai!",
          getGasketNow: "Ottieni subito la tua guarnizione!",
          contactUs: "Contattaci",
          leaveQuestionPrompt:
            "Lascia la tua domanda qui sotto e il nostro team ti ricontatterà al più presto!",
          firstName: "Nome",
          lastName: "Cognome",
          question: "Domanda",
          questionPlaceholder: "Es. Cosa è incluso in...",
          stateSector: "Stato / Settore",
          city: "Città",
          clientTypeQuestion: "Sei un Cliente Privato o un'Azienda",
          selectOnePlaceholder: "Seleziona uno",
          phoneNumber: "Numero di telefono",
          phoneNumberPlaceholder: "Es. +8801872999030",
          emailAddress: "Indirizzo email",
          emailAddressPlaceholder: "Es. bllkpetd92@gmail.com",
          sendMessageNow: "Invia messaggio ora",
          customGasketsMadeEasy:
            "Guarnizioni Personalizzate, Facili da Realizzare",
          gasketAutomationDescription:
            " Ottieni la guarnizione perfetta per le tue esigenze grazie alla nostra produzione di precisione e al sistema di quotazione automatizzato. Ti basterà caricare il tuo progetto, scegliere i materiali e ottenere un prezzo istantaneo!",
          highPrecisionCutting: "TAGLIO AD ALTA PRECISIONE",
          instantQuoteBenefitDescription:
            "Il nostro software avanzato calcola il costo della tua guarnizione in tempo reale, fornendo un preventivo accurato all'istante. Nessuna attesa, nessuna seccatura: solo un servizio rapido, efficiente e affidabile.",
        },
      },
    },
  });

export default i18n;
