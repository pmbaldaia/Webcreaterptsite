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
  description:
    "Na WebCreaterPT, somos especialistas em soluções digitais Shopify de alta performance, focados em design, UX e resultados para negócios online.",
};

export const HERO = {
  badge: "PARCEIRO SHOPIFY",
  headline: "Criamos Experiências Digitais Inovadoras que Fazem a Diferença",
  subline:
    "Transformamos ideias em experiências digitais únicas com lojas Shopify responsivas, personalizadas e escaláveis.",
};

export const SERVICE = {
  label: "Serviços",
  headline: "Soluções Shopify profissionais para o seu negócio",
  subline:
    "Como Parceiro Shopify certificado, oferecemos serviços especializados para criar lojas online de alta performance, totalmente personalizadas e escaláveis.",
  services: [
    {
      name: "Desenvolvimento de Lojas Shopify",
      icon: "ShoppingCart",
      description:
        "Criação de lojas Shopify totalmente personalizadas, responsivas e otimizadas para conversão, alinhadas com a identidade da sua marca.",
    },
    {
      name: "Integrações e Automação",
      icon: "Settings",
      description:
        "Integração de sistemas de pagamento, ERP, CRM e ferramentas de marketing para automatizar processos e melhorar a experiência do cliente.",
    },
    {
      name: "Otimização de Performance e UX",
      icon: "Speedometer",
      description:
        "Análise e melhoria da experiência do utilizador, velocidade de carregamento e design responsivo para maximizar vendas e retenção de clientes.",
    },
    {
      name: "Suporte e Consultoria Shopify",
      icon: "Speedometer",
      description:
        "Assistência técnica, suporte contínuo e consultoria estratégica para garantir o sucesso da sua loja Shopify.",
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
        "Website responsivo com design moderno e funcionalidades avançadas.",
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
        "Plataforma de e-commerce moderna e elegante para o setor da moda.",
      thumbnails: "vanessakloset.webp",
      type: "E-commerce",
    },
    {
      name: "MimuKidsStore",
      live_demo: "https://mimukidsstore.pt",
      description:
        "Loja online para produtos infantis, com interface clara e responsiva.",
      thumbnails: "mimukidsstore.webp",
      type: "E-commerce",
    },
    {
      name: "GDCSS Castelões",
      live_demo: "https://gdcsscasteloes.pt",
      description:
        "Website institucional desenvolvido para o GDCSS Castelões, com foco na apresentação do clube, equipas, calendário e notícias.",
      thumbnails: "gdcsscasteloes.webp",
      type: "Website Institucional",
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
