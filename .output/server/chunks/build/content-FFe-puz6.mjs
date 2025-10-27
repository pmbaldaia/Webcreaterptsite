const NAVLINKS = [
  { label: "In\xEDcio", url: "#hero" },
  { label: "Sobre", url: "#about" },
  { label: "Portef\xF3lio", url: "#work" },
  { label: "Servi\xE7os", url: "#service" },
  { label: "Pedir or\xE7amento", url: "#contactus" }
];
const PROFILE = {
  firstname: "Webcreater",
  lastname: "PT",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "WebCreaterPT",
  avatar: "/images/profile.jpeg",
  phone: "+351 915 970 882",
  email: "webcreaterpt@gmail.com",
  description: `Na WebCreaterPT, somos uma ag\xEAncia dedicada a criar solu\xE7\xF5es digitais inovadoras e funcionais. Focamo-nos na experi\xEAncia do utilizador e na entrega de resultados de excel\xEAncia, combinando criatividade, design e tecnologia para potenciar neg\xF3cios e experi\xEAncias digitais de impacto.`
};
const HERO = {
  badge: "PARCEIRO SHOPIFY",
  headline: `Criamos Experi\xEAncias Digitais Inovadoras que Fazem a Diferen\xE7a`,
  subline: "Transformamos ideias em experi\xEAncias digitais \xFAnicas, com websites e interfaces modernas, responsivas e visualmente impactantes. Criamos solu\xE7\xF5es que encantam utilizadores e impulsionam neg\xF3cios."
};
const SERVICE = {
  label: "Servi\xE7os",
  headline: "Solu\xE7\xF5es digitais personalizadas para cada projeto",
  subline: "Na WebCreaterPT, combinamos design e tecnologia para criar experi\xEAncias digitais centradas no utilizador. Vamos construir juntos solu\xE7\xF5es inovadoras e memor\xE1veis.",
  services: [
    {
      name: "Desenvolvimento Web",
      icon: "Scroll",
      description: "Websites modernos, responsivos e com performance otimizada, focados na experi\xEAncia do utilizador e nos objetivos do neg\xF3cio.",
      thumbnails: ""
    },
    {
      name: "Desenvolvimento Mobile",
      icon: "MobileProgramming",
      description: "Aplica\xE7\xF5es m\xF3veis intuitivas, eficientes e responsivas, pensadas para envolver utilizadores e impulsionar resultados.",
      thumbnails: ""
    },
    {
      name: "Design UI/UX",
      icon: "PenTool2",
      description: "Cria\xE7\xE3o de interfaces elegantes e experi\xEAncias digitais centradas no utilizador, alinhadas com a identidade e objetivos da sua marca.",
      thumbnails: ""
    }
  ]
};
const WORK = {
  label: "Portef\xF3lio",
  headline: "Projetos recentes da WebCreaterPT",
  subline: "Apresentamos solu\xE7\xF5es digitais inovadoras, funcionais e visualmente apelativas, desenvolvidas para potenciar neg\xF3cios e criar experi\xEAncias \xFAnicas.",
  works: [
    {
      name: "Jafversatil",
      live_demo: "https://jafversatil.pt",
      description: "Website responsivo com design moderno e funcionalidades avan\xE7adas, pensado para uma experi\xEAncia envolvente.",
      thumbnails: "jafversatil.webp",
      type: "Web Design"
    },
    {
      name: "Marysword",
      live_demo: "https://marysworld.pt",
      description: "E-commerce moderno e intuitivo, otimizado para convers\xE3o e navega\xE7\xE3o f\xE1cil.",
      thumbnails: "marysworld.webp",
      type: "E-commerce"
    },
    {
      name: "MauliHandmade",
      live_demo: "https://maulihandmade.pt",
      description: "Loja online focada na experi\xEAncia do utilizador e apresenta\xE7\xE3o elegante de produtos artesanais.",
      thumbnails: "maulihandmade.webp",
      type: "E-commerce"
    },
    {
      name: "QChef",
      live_demo: "https://qchef.pt",
      description: "Aplica\xE7\xE3o web intuitiva para gest\xE3o de receitas e servi\xE7os de alimenta\xE7\xE3o.",
      thumbnails: "qchef.webp",
      type: "Web App"
    },
    {
      name: "VanessaKloset",
      live_demo: "https://vanessakloset.pt",
      description: "Plataforma de e-commerce moderna e elegante para o setor da moda, centrada no utilizador.",
      thumbnails: "vanessakloset.webp",
      type: "E-commerce"
    },
    {
      name: "MimuKidsStore",
      live_demo: "https://mimukidsstore.pt",
      description: "Loja online para produtos infantis, com interface clara, responsiva e f\xE1cil de navegar.",
      thumbnails: "mimukidsstore.webp",
      type: "E-commerce"
    }
  ]
};
const ABOUT = {
  label: "Sobre a WebCreaterPT",
  introduce: [
    "A WebCreaterPT \xE9 uma ag\xEAncia especializada em criar experi\xEAncias digitais funcionais e visualmente impactantes, sempre com foco no utilizador.",
    "Transformamos ideias em solu\xE7\xF5es digitais concretas, combinando design, tecnologia e criatividade para potenciar neg\xF3cios e gerar resultados reais."
  ]
};

export { ABOUT as A, HERO as H, NAVLINKS as N, PROFILE as P, SERVICE as S, WORK as W };
//# sourceMappingURL=content-FFe-puz6.mjs.map
