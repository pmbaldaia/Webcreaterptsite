export const NAVLINKS = [
  { label: "Início", url: "#hero" },
  { label: "Sobre", url: "#about" },
  { label: "Portefólio", url: "#work" },
  { label: "Serviços", url: "#service" },
  { label: "Pedir orçamento", url: "#contactus" },
];

export const PROFILE = {
  firstname: "Webcreater",
  lastname: "PT",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "WebCreaterPT",
  avatar: "/images/profile.jpeg",
  phone: "+351 915 970 882",
  email: "webcreaterpt@gmail.com",
  description: `Na WebCreaterPT, somos uma agência dedicada a criar soluções digitais inovadoras e funcionais. Focamo-nos na experiência do utilizador e na entrega de resultados de excelência, combinando criatividade, design e tecnologia para potenciar negócios e experiências digitais de impacto.`,
};

export const HERO = {
  badge: "PARCEIRO SHOPIFY",
  headline: `Criamos Experiências Digitais Inovadoras que Fazem a Diferença`,
  subline:
    "Transformamos ideias em experiências digitais únicas, com websites e interfaces modernas, responsivas e visualmente impactantes. Criamos soluções que encantam utilizadores e impulsionam negócios.",
};

export const SERVICE = {
  label: "Serviços",
  headline: "Soluções digitais personalizadas para cada projeto",
  subline:
    "Na WebCreaterPT, combinamos design e tecnologia para criar experiências digitais centradas no utilizador. Vamos construir juntos soluções inovadoras e memoráveis.",
  services: [
    {
      name: "Desenvolvimento Web",
      icon: "Scroll",
      description:
        "Websites modernos, responsivos e com performance otimizada, focados na experiência do utilizador e nos objetivos do negócio.",
      thumbnails: "",
    },
    {
      name: "Desenvolvimento Mobile",
      icon: "MobileProgramming",
      description:
        "Aplicações móveis intuitivas, eficientes e responsivas, pensadas para envolver utilizadores e impulsionar resultados.",
      thumbnails: "",
    },
    {
      name: "Design UI/UX",
      icon: "PenTool2",
      description:
        "Criação de interfaces elegantes e experiências digitais centradas no utilizador, alinhadas com a identidade e objetivos da sua marca.",
      thumbnails: "",
    },
  ],
};

export const WORK = {
  label: "Portefólio",
  headline: "Projetos recentes da WebCreaterPT",
  subline:
    "Apresentamos soluções digitais inovadoras, funcionais e visualmente apelativas, desenvolvidas para potenciar negócios e criar experiências únicas.",
  works: [
    {
      name: "Jafversatil",
      live_demo: "https://jafversatil.pt",
      description:
        "Website responsivo com design moderno e funcionalidades avançadas, pensado para uma experiência envolvente.",
      thumbnails: "jafversatil.webp",
      type: "Web Design",
    },
    {
      name: "Marysword",
      live_demo: "https://marysworld.pt",
      description:
        "E-commerce moderno e intuitivo, otimizado para conversão e navegação fácil.",
      thumbnails: "marysworld.webp",
      type: "E-commerce",
    },
    {
      name: "MauliHandmade",
      live_demo: "https://maulihandmade.pt",
      description:
        "Loja online focada na experiência do utilizador e apresentação elegante de produtos artesanais.",
      thumbnails: "maulihandmade.webp",
      type: "E-commerce",
    },
    {
      name: "QChef",
      live_demo: "https://qchef.pt",
      description:
        "Aplicação web intuitiva para gestão de receitas e serviços de alimentação.",
      thumbnails: "qchef.webp",
      type: "Web App",
    },
    {
      name: "VanessaKloset",
      live_demo: "https://vanessakloset.pt",
      description:
        "Plataforma de e-commerce moderna e elegante para o setor da moda, centrada no utilizador.",
      thumbnails: "vanessakloset.webp",
      type: "E-commerce",
    },
    {
      name: "MimuKidsStore",
      live_demo: "https://mimukidsstore.pt",
      description:
        "Loja online para produtos infantis, com interface clara, responsiva e fácil de navegar.",
      thumbnails: "mimukidsstore.webp",
      type: "E-commerce",
    },
  ],
};

export const ABOUT = {
  label: "Sobre a WebCreaterPT",
  introduce: [
    "A WebCreaterPT é uma agência especializada em criar experiências digitais funcionais e visualmente impactantes, sempre com foco no utilizador.",
    "Transformamos ideias em soluções digitais concretas, combinando design, tecnologia e criatividade para potenciar negócios e gerar resultados reais.",
  ],
};

export const CTA = {
  label: "Vamos construir algo extraordinário juntos",
  description:
    "Precisa de uma solução digital elegante, responsiva e funcional? Na WebCreaterPT, transformamos a sua visão em realidade, sempre centrados no utilizador e nos objetivos do seu negócio.",
};
