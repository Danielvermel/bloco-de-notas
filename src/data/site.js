/**
 * Single source of truth for the site's content.
 *
 * Anything listed here is rendered into the page *and* into the structured
 * data (JSON-LD), so the two can no longer drift apart — the FAQ block and the
 * FAQPage schema are generated from the same `faq` array.
 */

export const site = {
  url: "https://blocodenotas.com.pt",
  name: "Bloco de Notas · Centro de Estudos",
  shortName: "Bloco de Notas",
  tagline: "CENTRO DE ESTUDOS",
  phone: "+351 910 533 646",
  phoneHref: "tel:+351910533646",
  phoneE164: "+351910533646",
  phoneSpoken: "910 533 646",
  whatsapp: "https://wa.me/351910533646",
  email: "blocodnotas@gmail.com",
  street: "Rua de Laborim, 70",
  locality: "Vila Nova de Gaia",
  postalCode: "4400",
  country: "PT",
  mapsLink: "https://maps.app.goo.gl/eHxkJRCQUrFBP4hZ9",
  mapsEmbed:
    "https://www.google.com/maps?q=41.1065368,-8.6017534&z=17&output=embed",
  // TODO: substituir pelo URL da ficha do Google Maps do centro.
  reviewsLink: "#TODO-URL-GOOGLE-MAPS",
  lat: 41.1065368,
  lng: -8.6017534,
  hours: "Seg–Sex · 7h30–19h00",
  opens: "07:30",
  closes: "19:00",
  rating: "4,9",
  ratingValue: "4.9",
  reviewCount: "7",
  reviewsShown: "11 avaliações no Google",
  instagram: "https://www.instagram.com/centrodeestudos_blocodenotas/",
  facebook: "https://www.facebook.com/CentrodeEstudosBlocodeNotas",
  ogImage: "/img/og-image.jpg",
  developer: { name: "teialoom.com", url: "https://teialoom.com" },
};

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#porque-nos", label: "Porquê Nós" },
  { href: "#espaco", label: "O Espaço" },
  { href: "#faq", label: "FAQ" },
  { href: "#contactos", label: "Contactos" },
];

/** Footer navigation drops "Contactos" — the column below it already lists them. */
export const footerNav = nav.slice(0, 4);

export const stats = [
  { value: "4,9", suffix: "★", label: "Avaliação no Google" },
  { value: "1.º–9.º", label: "Do 1.º ao 9.º ano" },
  { value: "Diário", label: "Apoio ao estudo" },
  { value: "Incluídos", label: "Transporte e refeições" },
];

/** Phosphor Icons (duotone), inlined so the page makes no icon-font request. */
export const services = [
  {
    title: "Apoio ao Estudo",
    text: "Acompanhamento pedagógico para alunos do 1.º ao 9.º ano, nas mais diversas disciplinas do Ensino Básico.",
    icon: '<path d="M48,72h64V184H48ZM190.64,38.39a8,8,0,0,0-9.5-6.21l-46.81,10a8.07,8.07,0,0,0-6.15,9.57L139.79,107l62.46-13.42Z" opacity="0.2"/><path d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"/>',
  },
  {
    title: "Explicações Individuais",
    text: "Apoio específico do 1.º ao 9.º ano, por professores qualificados e ajustado às dificuldades de cada aluno.",
    yellow: true,
    icon: '<path d="M192,80v96H104a32,32,0,1,0-32-32H64V80Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"/>',
  },
  {
    title: "Transporte e Refeições",
    text: "Transporte entre a escola e o centro, com refeições e lanches assegurados, em conforto e segurança.",
    icon: '<path d="M248,112v64a8,8,0,0,1-8,8H216a24,24,0,0,0-48,0H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V112Z" opacity="0.2"/><path d="M254.07,106.79,208.53,53.73A16,16,0,0,0,196.26,48H32A16,16,0,0,0,16,64V176a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V112A8,8,0,0,0,254.07,106.79ZM230.59,104H176V64h20.26ZM104,104V64h56v40ZM88,64v40H32V64ZM80,200a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,200Zm31-24a32,32,0,0,0-62,0H111a32,32,0,0,0-62,0H32V120H240v56Z"/>',
  },
  {
    title: "Atividades de Verão",
    text: "Praia, passeios, piqueniques e muito mais: lazer e convívio que criam memórias inesquecíveis.",
    yellow: true,
    icon: '<path d="M192,144a64.33,64.33,0,0,1-2,16H66a64,64,0,1,1,126-16Z" opacity="0.2"/><path d="M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z"/>',
  },
];

export const whyUs = [
  {
    title: "Professores experientes",
    text: "Uma equipa que domina as matérias e compreende as dificuldades comuns dos alunos. Explicamos de forma clara, para construir bases sólidas.",
  },
  {
    title: "Ambiente de estudo positivo",
    text: "Grupos pequenos onde os alunos se sentem motivados e confortáveis. Cada um recebe atenção e sente-se incluído e ouvido.",
  },
  {
    title: "Estratégias de estudo práticas",
    text: "Ensinamos mais do que a matéria: mostramos como estudar de forma eficiente, com métodos úteis em todo o percurso académico.",
  },
  {
    title: "Foco em resultados reais",
    text: "Trabalhamos com objetivos claros e alcançáveis, apoiando cada aluno passo a passo.",
  },
  {
    title: "Comunicação com os pais",
    text: "Feedback regular sobre o progresso dos seus filhos, para que todos estejam envolvidos no processo de aprendizagem.",
  },
];

/** `feature` items span two grid columns. `w`/`h` are the intrinsic image sizes. */
export const gallery = [
  {
    src: "/img/sala-de-convivio.webp",
    feature: true,
    w: 1400,
    h: 1050,
    short: "Sala de convívio com matraquilhos, sofás e paredes coloridas",
    alt: "Sala de convívio do Bloco de Notas, com matraquilhos, sofás e paredes coloridas",
  },
  {
    src: "/img/entrada.webp",
    w: 900,
    h: 1200,
    short: "Entrada do Bloco de Notas com mural da mascote",
    alt: "Entrada do Bloco de Notas com o mural da mascote e escadas em mármore",
  },
  {
    src: "/img/corredor.webp",
    w: 900,
    h: 1200,
    short: "Corredor de acesso às salas de estudo",
    alt: "Corredor de acesso às salas de estudo do centro",
  },
  {
    src: "/img/sala-de-estudo-biblioteca.webp",
    w: 900,
    h: 1200,
    short: "Sala de estudo com biblioteca de apoio",
    alt: "Sala de estudo com mesas de trabalho e biblioteca de apoio",
  },
  {
    src: "/img/zona-de-informatica.webp",
    w: 900,
    h: 1200,
    short: "Zona de informática com computadores",
    alt: "Zona de informática com computadores para os alunos",
  },
  {
    src: "/img/sala-de-jogos.webp",
    feature: true,
    w: 1400,
    h: 1050,
    short: "Sala de jogos com matraquilhos e zona de convívio",
    alt: "Sala de jogos com matraquilhos, sofás e zona de convívio",
  },
  {
    src: "/img/casas-de-banho.webp",
    w: 900,
    h: 1200,
    short: "Instalações sanitárias do centro de estudos",
    alt: "Instalações sanitárias do centro de estudos, limpas e cuidadas",
  },
  {
    src: "/img/gabinete.webp",
    w: 900,
    h: 1200,
    short: "Gabinete de coordenação e atendimento aos pais",
    alt: "Gabinete de coordenação e atendimento aos pais",
  },
  {
    src: "/img/zona-de-espera.webp",
    w: 900,
    h: 1200,
    short: "Zona de espera com mural do Bloco de Notas",
    alt: "Zona de espera e receção com o mural do Bloco de Notas",
  },
  {
    src: "/img/sala-de-estudo.webp",
    w: 900,
    h: 1200,
    short: "Sala de estudo com mesas de trabalho",
    alt: "Sala de estudo com mesas de trabalho, quadro e boa luz natural",
  },
];

export const testimonials = [
  {
    quote:
      "Bloco de Notas é mais do que um Centro de Estudos, é apoio, é educação, é aconchego, é proteção... É família! Tenho a minha filha a frequentar desde o 5.º ano e já vai para o 8.º e sente que no Bloco é muito feliz, é o seu Porto Seguro.",
    name: "Elizabete Andrade",
    initials: "EA",
  },
  {
    quote:
      "Excelente ATL/centro de estudos […] Agradecemos toda a ajuda que têm dado à nossa filha, onde tem obtido bons resultados na escola. Ambiente familiar […] As crianças sentem-se em casa.",
    name: "João Filipe Bettencourt",
    initials: "JB",
    yellow: true,
  },
  {
    quote:
      "Foram 5 anos de uma experiência fantástica! É um prolongamento da família!",
    name: "Carla Ferreira Pinto de Jesus",
    initials: "CJ",
  },
];

/** The first entry renders open; the rest collapsed. */
export const faq = [
  {
    q: "Que anos de escolaridade acompanham?",
    a: "Acompanhamos alunos do 1.º ao 9.º ano de escolaridade, ou seja, todo o Ensino Básico (1.º, 2.º e 3.º ciclos). O apoio é ajustado ao ano e às disciplinas de cada aluno.",
  },
  {
    q: "Fazem explicações individuais?",
    a: "Sim. Além do apoio ao estudo em grupo, damos explicações individuais e em pequeno grupo, com professores especializados e um plano ajustado às dificuldades de cada aluno.",
  },
  {
    q: "Têm transporte e refeições?",
    a: "Sim. Asseguramos o transporte entre a escola e o centro e disponibilizamos refeições e lanches, para que o dia do seu filho decorra com tranquilidade e segurança.",
  },
  {
    q: "Qual é a dimensão dos grupos?",
    a: "Trabalhamos em grupos pequenos para garantir atenção personalizada. Assim cada aluno é acompanhado de perto e sente-se à vontade para colocar dúvidas.",
  },
  {
    q: "Como comunicam com os pais?",
    a: "Damos feedback regular sobre o progresso, o comportamento e os resultados de cada aluno, por contacto direto e sempre que necessário, para que os pais estejam sempre a par.",
  },
  {
    q: "Como posso marcar uma visita?",
    a: "Basta contactar-nos por telefone, WhatsApp ou email. Marcamos uma visita ao espaço, onde explicamos o funcionamento e esclarecemos todas as questões, sem compromisso.",
  },
  {
    q: "Têm atividades de verão?",
    a: "Sim. Durante o verão organizamos atividades como praia, passeios e piqueniques, combinando lazer, convívio e momentos de estudo quando necessário.",
  },
  {
    q: "Quais são os horários e valores?",
    a: "Estamos abertos de segunda a sexta-feira, das 7h30 às 19h00. Os valores dependem dos serviços pretendidos (apoio ao estudo, explicações, transporte e refeições). Contacte-nos para uma proposta ajustada às suas necessidades.",
  },
];

export const interesses = [
  "Apoio ao Estudo",
  "Explicações Individuais",
  "Transporte e Refeições",
  "Atividades de Verão",
  "Marcar uma visita",
  "Outro",
];

export const formEndpoint = "https://formspree.io/f/mojgwwdk";
