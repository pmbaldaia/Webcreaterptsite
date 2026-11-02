export const WHATSAPP_NUMBER = '351915970882'
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de pedir um orçamento para um projeto digital. Podem ajudar-me?'
export const WHATSAPP_QUOTE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const NAVLINKS = [
  { label: "Início", url: "#hero" },
  { label: "Sobre", url: "#about" },
  { label: "Portefólio", url: "#work" },
  { label: "Serviços", url: "#service" },
  { label: "Parceiros", url: "#partners" },
  { label: "Contacto", url: "#contactus" },
];

export const PROFILE = {
  firstname: "Webcreater",
  lastname: "PT",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "WebCreaterPT",
  avatar: "/images/profile.png",
  phone: "+351 915 970 882",
  email: "webcreaterpt@gmail.com",
  description:
    "Na WebCreaterPT, desenvolvemos lojas Shopify e websites à medida, com foco no design, no desempenho e na experiência de utilização.",
};

export const HERO = {
  badge: "DESENVOLVIMENTO WEB E SHOPIFY",
  headline: "Lojas online e websites feitos à medida.",
  subline:
    "Criamos lojas Shopify e websites com design cuidado, boa performance e uma experiência simples em qualquer dispositivo.",
};

export const SERVICE = {
  label: "Serviços",
  headline: "Serviços digitais para o seu negócio",
  subline:
    "Do desenvolvimento de lojas Shopify às integrações e ao suporte, ajudamos a criar e melhorar a presença digital do seu negócio.",
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
  headline: "Trabalhos realizados",
  subline:
    "Conheça alguns dos websites e lojas online que desenvolvemos, com atenção ao detalhe e à experiência de utilização.",
  works: [
    {
      name: "MAL — Music & Artists Lab",
      imageWidth: 1904,
      imageHeight: 947,
      live_demo: "https://malculture.com/",
      description:
        "Espaço digital dedicado à música, à cultura e à comunidade, com estúdios, equipamentos, aprendizagem e experiências.",
      thumbnails: "malculture.webp",
      type: "Website e loja online",
    },
    {
      name: "Kékai Studio",
      imageWidth: 1912,
      imageHeight: 951,
      live_demo: "https://kekaistore.pt/",
      description:
        "Loja online de moda praia e vestuário, com coleções para mulher e homem, acessórios e uma experiência de compra intuitiva.",
      thumbnails: "kekaistore.webp",
      type: "Loja Shopify",
    },
    {
      name: "Euphoria Fashion Boutique",
      imageWidth: 1914,
      imageHeight: 959,
      live_demo: "https://euphoriaboutique.pt/",
      description:
        "Loja online de moda feminina com novidades e coleções em destaque.",
      thumbnails: "euphoriaboutique.webp",
      type: "Loja online",
    },
    {
      name: "Jafversatil",
      imageWidth: 1897,
      imageHeight: 952,
      live_demo: "https://jafversatil.pt",
      description:
        "Loja online de moda e acessórios, com navegação intuitiva e apresentação cuidada das coleções.",
      thumbnails: "jafversatil.webp",
      type: "Loja online",
    },
    {
      name: "Marysword",
      imageWidth: 1280,
      imageHeight: 776,
      live_demo: "https://marysworld.pt",
      description:
        "E-commerce moderno e intuitivo, otimizado para conversão e navegação fácil.",
      thumbnails: "marysworld.webp",
      type: "Loja online",
    },
    {
      name: "MauliHandmade",
      imageWidth: 1280,
      imageHeight: 648,
      live_demo: "https://maulihandmade.pt",
      description:
        "Loja online focada na experiência de utilização e na apresentação cuidada de produtos artesanais.",
      thumbnails: "maulihandmade.webp",
      type: "Loja online",
    },
    {
      name: "QChef",
      imageWidth: 1900,
      imageHeight: 955,
      live_demo: "https://qchef.pt",
      description:
        "Website para divulgação de serviços de chef privado, receitas e e-books de culinária.",
      thumbnails: "qchef.webp",
      type: "Website de serviços",
    },
    {
      name: "VanessaKloset",
      imageWidth: 1280,
      imageHeight: 650,
      status: "Vendas em pausa",
      live_demo: "https://vanessakloset.pt",
      description:
        "Plataforma de e-commerce moderna e elegante para o setor da moda.",
      thumbnails: "vanessakloset.webp",
      type: "Loja online",
    },
    {
      name: "MimuKidsStore",
      imageWidth: 1901,
      imageHeight: 954,
      live_demo: "https://mimukidsstore.pt",
      description:
        "Loja online de produtos infantis, com uma apresentação clara e adaptada a diferentes ecrãs.",
      thumbnails: "mimukidsstore.webp",
      type: "Loja online",
    },
    {
      name: "GDCSS Castelões",
      imageWidth: 1898,
      imageHeight: 955,
      live_demo: "https://gdcsscasteloes.pt",
      description:
        "Website institucional desenvolvido para o GDCSS Castelões, com foco na apresentação do clube, equipas, calendário e notícias.",
      thumbnails: "gdcsscasteloes.webp",
      type: "Website institucional",
    },
  ],
};

export const ABOUT = {
  label: "Sobre a WebCreaterPT",
  introduce: [
    "Na WebCreaterPT, criamos soluções digitais funcionais e visualmente cuidadas, sempre com foco em quem as utiliza.",
    "Combinamos design, tecnologia e criatividade para transformar ideias em websites e lojas online preparados para crescer com cada negócio.",
  ],
};

export const PARTNERS = {
  label: "Parceiros",
  headline: "Parcerias que acrescentam valor",
  subline:
    "Trabalhamos com parceiros criativos que complementam cada projeto com design, identidade visual e comunicação gráfica.",
  items: [
    {
      name: "SousaDesignx",
      role: "Design gráfico e identidade visual",
      image: "/images/partners/sousadesignx.webp",
      imageWidth: 1606,
      imageHeight: 662,
      instagramHandle: "@sousadesignx",
      instagramUrl: "https://www.instagram.com/sousadesignx/",
      phone: "911 554 488",
      phoneUrl: "tel:+351911554488",
      email: "sousadesignx@gmail.com",
      emailUrl: "mailto:sousadesignx@gmail.com",
      services: [
        "Identidade visual",
        "Logótipos",
        "Cartazes e pósteres",
        "Conteúdos para redes sociais",
        "Capas de livro",
        "Cartões de visita",
        "Edição de imagem",
      ],
      description:
        "A SousaDesignx é uma marca pessoal portuguesa de design gráfico, focada na criação de identidades visuais, cartazes, pósteres e conteúdos criativos, com uma abordagem minimalista, moderna e profissional.",
    },
  ],
};
