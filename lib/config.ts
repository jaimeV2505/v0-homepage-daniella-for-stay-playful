// Configuración centralizada de la aplicación
// FASE 3 & 4: Traducción y enlaces centralizados

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Stay Playful",
  description: "A Healthier Way to Feel Well",
  urls: {
    contact: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mailto:hello@stayplayful.com",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "tel:+46-123-456-789",
  },
}

export type Language = "sv" | "en"

export const translations = {
  sv: {
    nav: {
      programs: "PROGRAM",
      method: "METOD",
      contact: "KONTAKT",
      clientLogin: "LOGIN",
      bookCall: "BOKA SAMTAL",
    },
    topBar: "Där din vision blir något oförglömligt",
    getInTouch: "Få kontakt",
    hero: {
      title: "YOUR LIFE, YOUR PLAYGROUND",
    },
    brand: {
      eyebrow: "",
      heading: " 🚨VARNING: STAY PLAYFUL KAN ORSAKA FÖLJANDE BIVERKNINGAR:",
      body: "Att du plötsligt tänker mindre på maten och att andra härliga delar av livet börjar ta mer plats. Med rätt kost för dig ser vi till att ge dig de bästa förutsättningar för att orka leva till fullo. Med mindre ohälsosam fixering till mat, stärker vi andra delar av livet, uppmuntrar nyfikenhet och skapar utrymme för glädje, kreativitet och personligt engagemang.",
      cardTag: "Stay Playful",
      cardBody: "Bra kost och massa rörelse — inte längre är ett projekt vid sidan av livet.",
      bottomBar: "STAY PLAYFUL",
    },
    programs: {
      eyebrow: "VÄLJ DIN VÄG",
      heading: "Individuell rådgivning anpassad efter din utgångspunkt.",
      headingAccent: "Se grundvalen som stödjer ditt liv",
      bookCta: "Läs mer & Boka Konsultation",
      items: {
        coaching: {
          title: "1:1 COACHING",
          circleTitle: "1:1\nCoaching",
          description: "Första tillfället är en kostnadsfri konsultation på ca 20 min, där vi går igenom vilken hjälp du behöver och vad jag kan göra för att hjälpa dig",
        },
        program6: {
          title: "8-VECKORS PROGRAM",
          circleTitle: "6-v\nprog",
          description: "För att faktiskt kunna göra någon skillnad så behöver vi lägga upp en plan.",
        },
        program8: {
          title: "12-VECKORS PROGRAM",
          circleTitle: "8-v\nprog",
          description: "För att ge dig själv bästa förutsättningar för både resultat och den nya livsstilen.",
        },
        specialaren: {
          title: "SPECIALAREN",
          circleTitle: "Specia-\nlaren",
          description: "Fråga om Specialaren om: Du är anhörig/förälder som behöver stöd om kost till dina barn (med/utan koppling till ev diagnos och kost-problematik).Om du har tävlat inom fitness (eller är nära en tävling) och behöver stöd efter långvarig diet.",
        },
      },
    },
    method: {
      eyebrow: "FILOSOFI & METOD",
      heading: "Tre grundpelare som gör Stay Playful unik:",
      subheading: "Sluta aldrig leka genom livet och för att orka göra det så behöver du rätt kost på vägen! Vem är jag? Visionen. Strategin och målet.",
      cards: {
        "01": {
          eyebrow: "Vem är jag",
          subtitle: "Meet the founder",
          p1: "Det började med en tillfrisknad från en ätstörning och en stark drivkraft (en total hyper fixering) att fördjupa mig i nutrition och psykologi. Till certifikat för kostrådgivning och några tävlingar inom bikini fitness. Till flera år av föreläsning inom ätstörning- och självskadebeteende. Till engagemang i brukarråd där man bl.a pratar om samhällsproblem inom området.",
          p2: "Tills att jag sa blää vad är det människor håller på med där ute! Jag ser människor som gör “allt rätt” - tränar, äter enligt plan, har kunskap – men ändå inte mår bra över tid. Tänk om problemet inte är brist på disciplin, utan att vi lägger för mycket tid på något vi inte ens tycker om? Den insikten förändrade allt!",


        },
        "02": {
          eyebrow: "Visionen",
          subtitle: "Visionen",

          p1: "Stay Playful driver och strävar efter en förändring där hälsa inte längre är ett projekt vid sidan av livet, utan en integrerad del av hur vi lever och mår.",
          p2: "Vi ska omdefiniera hur människor ser på träning och kost: från något man skjuter upp, kämpar med eller “ska ta tag i”, till något som känns tillgängligt, lustfyllt och något som känns bra. Genom att kombinera individanpassad kostrådgivning med ett bredare livsstilsperspektiv ser vi till att bygga ett liv där rörelse, näring och välmående samverkar med egna intressen, värderingar och vardag.",


        },
        "03": {
          eyebrow: "Strategin och målet",
          subtitle: "Strategin och målet",
          p1: "Traditionell kostrådgivning och personliga tränare förespråkar gym och kostscheman men adresserar i mindre utsträckning näringen, relationen till mat och beteendemönster kring “av och på”.",
          p2: "Stay playful erbjuder ett skräddarsytt stöd och vägledning inom kostrådgivning, med ett medvetet fokus på helhetsperspektivet i ditt liv snarare än enbart kalori-fokus och träning. Genom coaching, upplevelser och ett lekfullt förhållningssätt hjälper vi dig att hitta det som ger dig energi i livet för att du ska vilja fortsätta framåt. Vi utgår från övertygelsen att hälsa och välmående ska kännas lekfullt, inspirerande och hållbart. Stay Playful handlar inte om att bli “bättre på hälsan”. Det handlar om att ha kul med de bästa förutsättningarna.",

        },
      },
    },
    testimonials: {
      ticker: "STAY PLAYFUL, MOTIVERANDE, ENERGIGIVANDE",
      heading: "Your",
      headingAccent: "playground!",
      comingSoon: "Mer info kommer snart!",
    },
    community: {
      eyebrow: "Innan du bokar",
      heading: "Booring men svar på blandade",
      headingAccent: "frågor",
      subheading: "En mjukare version av vanliga frågor — så att du kan känna dig lugn, trygg och redo att ta nästa steg.",
      topRibbon: ["KLARHET UTAN PRESS", "PERSONLIGT STÖD", "ETT MER LEKFULLT VÄLMÅENDE", "KLARHET UTAN PRESS", "STÖD SOM PASSAR DITT LIV", "BALANS ISTÄLLET FÖR KONTROLL"],
      stillQuestions: "Fortfarande funderingar?",
      stillQuestionsBody: "Om du hellre vill prata igenom frågorna, så går det lika bra",
      letsTalk: "Låt oss prata",
      faq: {
        q1: "Vem är det här till för?",
        a1_intro: "Stay playful är till för dig som:",
        a1_items: [
          "Har ett aktivt liv och/eller vill ha fler alternativ till aktivitet.",
          "Nybörjare inom ämnet - vill ha kostrådgivning eller är redan rätt så välinformerad men känner dig fortfarande i obalans kring kost/mat.",
          "Fast i “jag borde”-tänk.",
          "Periodvis motiverade, men inte hållbar strategi i nuläget."
        ],
        a1_also: "Jag skulle också säga att det är för:",
        a1_alsoItems: [
          "medvetna och reflekterande",
          "högpresterande eller självkritiska",
          "öppna för personlig utveckling"
        ],
        a1_footer: "Men jag kan ha fel?",
        q2: "Så arbetar vi tillsammans mot ditt mål",
        a2_p1: "Beroende på fokuset så kommer det generellt att se ut på följande sätt:",
        a2_p2: "Efter ett uppsatt mål så kommer du att få ett inlogg till en extern plattform där du registrerar din kost. Aktiviteten och de andra prioriterade fokusområden kommer vi att logga i ett text-dokument. Datan tittar vi på tillsammans och diskuterar, veckovis.",
        a2_p3: "Jag tror även på nära kontakt så under veckan kommer jag finnas som stöd och tillgänglig vid frågor.",
        q3: "Kommer man att kunna äta glass?",
        a3_p1: "Det skulle jag säga..",
        a3_p2: "Men något annat viktigt, Min licens: Kostrådgivare: från SAFE/the Academy, https://theacademy.se/",
        a3_p3: "Stöttning vid kostrelaterad problematik (/självskadebeteende) och fakta för föreläsning till företag/större grupper används från http://SHEDO.se"
      },
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Är du redo att skapa din egen Playground?",
      body1: "Nyfiken på vad det här kan leda till? Eller vill du bara känna efter om det här är rätt plats för dig? Skicka ett meddelande så börjar vi där.",
      body2: "Stay Playful handlar om stöd som känns tryggt, genomtänkt, hållbart och mänskligt — inte stelt, pressat eller överväldigande.",
      responseTitle: "Du får troligtvis svar",
      responseSubtitle: "inom 48 timmar",
      basedIn: "Låt oss börja",
      formTitle: "Låt oss börja här",
      formSubheading: "Berätta vad som fick dig att höra av dig",
      labelName: "Ditt namn*",
      placeholderName: "Vad vill du att jag kallar dig?",
      labelEmail: "E-post*",
      labelInterest: "Vad gäller det?",
      placeholderInterest: "Välj ett alternativ",
      labelMessage: "Meddelande*",
      placeholderMessage: "Berätta gärna lite om vad du söker, funderar på eller vill ha hjälp med...",
      errorRequired: "Fyll i de obligatoriska fälten innan du skickar.",
      errorSend: "Det gick inte att skicka ditt meddelande just nu.",
      submit: "Skicka meddelande",
      sending: "Skickar...",
      privacyNote: "Din information stannar här och används bara för att kunna svara på ditt meddelande.",
      responseIn: "Svar inom 48h",
      successTitle: "Meddelandet är skickat",
      successBody: "Tack för att du hörde av dig. Jag återkommer inom 24–48 timmar med nästa steg.",
      checkInbox: "Håll koll på din inkorg",
      replyIn: "Svar inom 48h",
      sendAnother: "Skicka ett nytt meddelande",
      interestOptions: [
        { value: "1-1-coaching", label: "1:1 Coaching" },
        { value: "8-week", label: "8-veckorsprogram" },
        { value: "12-week", label: "12-veckorsprogram" },
        { value: "general", label: "Allmän fråga" },
        { value: "workshop", label: "Workshop / Föreläsning" },
      ],
    },
    footer: {
      keepInTouch: "Håll kontakten",
      letsTalk: "Låt oss prata",
      links: [
        { label: "Program", href: "#programs" },
        { label: "Metod", href: "#method" },
        { label: "Berättelser", href: "#stories" },
        { label: "Kontakt", href: "#contact" },
      ],
      copyright: "© 2026 Stay Playful",
    },
    widget: {
      label: "SKA VI CHATTA?",
    },
  },
  en: {
    nav: {
      programs: "PROGRAMS",
      method: "METHOD",
      contact: "CONTACT",
      clientLogin: "LOGIN",
      bookCall: "BOOK A CALL",
    },
    topBar: "Where your vision becomes something unforgettable",
    getInTouch: "Get in touch",
    hero: {
      title: "YOUR LIFE, YOUR PLAYGROUND",
    },
    brand: {
      eyebrow: "",
      heading: "🚨WARNING: STAY PLAYFUL MAY CAUSE THE FOLLOWING SIDE EFFECTS:",
      body: "That you suddenly think less about food and that other wonderful parts of life begin to take more space. With the right nutrition for you, we ensure to give you the best conditions to be able to live to the full. With less unhealthy fixation on food, we strengthen other parts of life, encourage curiosity and create space for joy, creativity and personal engagement.",
      cardTag: "Stay Playful",
      cardBody: "Good nutrition and plenty of movement — no longer a side project in life.",
      bottomBar: "STAY PLAYFUL",
    },
    programs: {
      eyebrow: "CHOOSE YOUR PATH",
      heading: "Individual coaching adapted to your starting point.",
      headingAccent: "See the foundation that supports your life",
      bookCta: "Learn More & Book Consultation",
      items: {
        coaching: {
          title: "1:1 COACHING",
          circleTitle: "1:1\nCoaching",
          description: "The first session is a free consultation of approximately 20 minutes, where we go through what help you need and what I can do to assist you.",
        },
        program6: {
          title: "8-WEEK PROGRAM",
          circleTitle: "8-w\nprog",
          description: "To actually make a difference, we need to set up a plan.",
        },
        program8: {
          title: "12-WEEK PROGRAM",
          circleTitle: "12-w\nprog",
          description: "To give yourself the best possible conditions for both results and your new lifestyle.",
        },
        specialaren: {
          title: "THE SPECIAL ONE",
          circleTitle: "The\nSpecial",
          description: "Ask about The Special One if: You are a relative/parent who needs nutrition support for your children (with or without connection to potential diagnoses or dietary issues).If you have competed in fitness (or are close to a competition) and need support after a long-term diet.",
        },
      },
    },
    method: {
      eyebrow: "PHILOSOPHY & METHOD",
      heading: "Three pillars that make Stay Playful unique:",
      subheading: "Never stop playing through life and to be able to do that you need the right nutrition along the way!Who am I? The vision. The strategy and the goal.",
      cards: {
        "01": {
          eyebrow: "Who Am I",
          subtitle: "Meet the founder",

          p1: "It began with a recovery from an eating disorder and a powerful drive (a total hyper-fixation) to immerse myself in nutrition and psychology. From nutrition coaching certifications and bikini fitness competitions, to years of lecturing on eating disorders and self-harm. To involvement in advisory boards discussing social issues in the field.",
          p2: "Until I just said: Blegh! What is everyone out there doing?! I see people doing “everything right” – training, eating according to plan, having the knowledge – yet still not feeling good over time.What if the problem isn’t a lack of discipline, but that we spend too much time on something we don’t even like? That insight changed everything!",

        },
        "02": {
          eyebrow: "The Vision",
          subtitle: "The Vision",
          p1: "Stay Playful drives and strives for a change where health is no longer a project on the side of life, but an integrated part of how we live and feel.",
          p2: "We will redefine how people view exercise and nutrition: from something you postpone, struggle with, or 'need to deal with', to something that feels accessible, joyful, and simply feels good. By combining personalized nutrition coaching with a broader lifestyle perspective, we ensure to build a life where movement, nutrition, and well-being interact with personal interests, values, and everyday life.",

        },
        "03": {
          eyebrow: "Strategy and Goal",
          subtitle: "The strategy and the goal",

          p1: "Traditional nutrition coaching and personal trainers advocate for gyms and meal plans but address to a lesser extent nutrition, the relationship with food, and behavioral patterns around “on and off”.",
          p2: "Stay Playful offers tailored support and guidance in nutrition coaching, with a conscious focus on the holistic perspective of your life rather than just calorie-focus and training. Through coaching, experiences, and a playful approach, we help you find what gives you energy in life so that you want to keep moving forward. We base this on the conviction that health and well-being should feel playful, inspiring, and sustainable. Stay Playful is not about becoming “better at health”. It's about having fun with the best possible conditions."

        },
      },
    },
    testimonials: {
      ticker: "STAY PLAYFUL, MOTIVERANDE, ENERGIGIVANDE",
      heading: "Your",
      headingAccent: "playground!",
      comingSoon: "More info coming soon!",
    },
    community: {
      eyebrow: "Before you book",
      heading: "Boring but answers to mixed",
      headingAccent: "questions",
      subheading: "A softer version of FAQs — so you can feel calm, safe and ready to take the next step.",
      topRibbon: ["CLARITY WITHOUT PRESSURE", "PERSONAL SUPPORT", "A MORE PLAYFUL WELLBEING", "CLARITY WITHOUT PRESSURE", "SUPPORT THAT FITS YOUR LIFE", "BALANCE INSTEAD OF CONTROL"],
      stillQuestions: "Still have questions?",
      stillQuestionsBody: "If you would rather talk through the questions, that's fine too.",
      letsTalk: "Let's talk",
      faq: {
        q1: "Who is this for?",
        a1_intro: "Stay playful is for you if you:",
        a1_items: [
          "Have an active life and/or want more alternatives to activity.",
          "Are a beginner in the subject - want nutrition coaching or are already quite well-informed but still feel out of balance around diet/food.",
          "Are stuck in “I should” thinking.",
          "Are periodically motivated, but without a sustainable strategy at the moment."
        ],
        a1_also: "I would also say it's for:",
        a1_alsoItems: [
          "conscious and reflective individuals",
          "high-achievers or self-critical people",
          "those open to personal development"
        ],
        a1_footer: "But I could be wrong?",
        q2: "How we work together towards your goal",
        a2_p1: "Depending on the focus, it will generally look like this:",
        a2_p2: "After setting a goal, you will receive a login to an external platform where you register your nutrition. Activity and other prioritized focus areas will be logged in a text document. We look at the data together and discuss it weekly.",
        a2_p3: "I also believe in close contact, so during the week I will be available as support and for any questions.",
        q3: "Will I be able to eat ice cream?",
        a3_p1: "I would say so..",
        a3_p2: "But something else important, My license: Nutrition Counselor: from SAFE/the Academy, https://theacademy.se/",
        a3_p3: "Support for diet-related issues (/self-harm) and facts for lectures to companies/larger groups are used from http://SHEDO.se"
      },
    },
    contact: {
      eyebrow: "Contact",
      heading: "Are you ready to create your own Playground?",
      body1: "Curious about where this could lead? Or do you just want to feel if this is the right place for you? Send a message and we'll start there.",
      body2: "Stay Playful is about support that feels safe, thoughtful, sustainable and human — not rigid, pressured or overwhelming.",
      responseTitle: "You will probably receive a response",
      responseSubtitle: "within 48 hours",
      basedIn: "Lets Start",
      formTitle: "Let's start here",
      formSubheading: "Tell me what made you reach out",
      labelName: "Your name*",
      placeholderName: "what is your name?",
      labelEmail: "Email*",
      labelInterest: "What is it about?",
      placeholderInterest: "Choose an option",
      labelMessage: "Message*",
      placeholderMessage: "Feel free to share a bit about what you're looking for, thinking about or need help with...",
      errorRequired: "Please fill in the required fields before submitting.",
      errorSend: "We couldn't send your message right now.",
      submit: "Send message",
      sending: "Sending...",
      privacyNote: "Your information stays here and is only used to respond to your message.",
      responseIn: "Reply within 48h",
      successTitle: "Message sent",
      successBody: "Thank you for reaching out. I'll get back to you within 24–48 hours with next steps.",
      checkInbox: "Keep an eye on your inbox",
      replyIn: "Reply within 48h",
      sendAnother: "Send a new message",
      interestOptions: [
        { value: "1-1-coaching", label: "1:1 Coaching" },
        { value: "8-week", label: "8-week program" },
        { value: "12-week", label: "12-week program" },
        { value: "general", label: "General question" },
        { value: "workshop", label: "Workshop / Lecture" },
      ],
    },
    footer: {
      keepInTouch: "Stay in touch",
      letsTalk: "Let's talk",
      links: [
        { label: "Programs", href: "#programs" },
        { label: "Method", href: "#method" },
        { label: "Stories", href: "#stories" },
        { label: "Contact", href: "#contact" },
      ],
      copyright: "© 2026 Stay Playful",
    },
    widget: {
      label: "LET'S CHAT?",
    },
  },
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
