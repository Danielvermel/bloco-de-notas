// NAVIGATION
export const NAV_LINKS = [
    { href: "/#services", key: "servicos", label: "Serviços" },
    { href: "/#whyUs", key: "porqueNos", label: "Porquê Nós?" },

    { href: "/#team-members", key: "teamMembers", label: "Equipa" },
    { href: "/#footer", key: "contacts", label: "Contactos" },
];

// FOOTER SECTION
export const FOOTER_CONTACT_INFO = {
    title: "Contactos",
    links: [
        { label: "Email", value: "geral@blocodenotas.com.pt", action: "mailto:geral@blocodenotas.com.pt" },
        {
            label: "Morada",
            value: "Rua de Laborim, 70, Vila Nova de Gaia",
            action: "https://maps.app.goo.gl/eHxkJRCQUrFBP4hZ9",
        },
        { label: "Telemóvel", value: "+351 910 533 646", action: "https://wa.me/+351910533646/" },
    ],
};

export const SERVICES = [
    {
        src: "/services/apoio.jpg",
        alt: "Apoio ao Estudo",
        title: "Apoio ao Estudo (1º, 2º e 3º Ciclos)",
        description:
            "O Apoio ao estudo proporciona acompanhamento pedagógico para alunos dos 1º, 2º e 3º ciclos do Ensino Básico, com pessoal qualificado e pronto para ajudar nas mais diversas disciplinas.",
    },
    {
        src: "/services/explicacoes.jpg",
        alt: "Explicações Individuais",
        title: "Explicações Individuais (1º Ciclo ao Ensino Secundário)",
        description:
            "Para os alunos que necessitam de um apoio mais específico em algumas matérias. Um apoio feito por profissionais devidamente qualificados, ajustado às necessidades de cadaaluno.",
    },
    {
        src: "/services/transporte.jpg",
        alt: "Serviço de Transporte e Refeições",
        title: "Serviço de Transporte e Refeições",
        description:
            "Garantimos o transporte entre a escola e o Centro de Estudos Bloco de Notas, assim como asseguramos as refeições e lanche, garantindo o conforto e segurança dos alunos.",
    },
    {
        src: "/services/atividades.jpg",
        alt: "Atividades de Verão",
        title: "Atividades de Verão",
        description:
            "Planificação de atividades no sentido de proporcionar momentos de lazer, descontração e diversão, tais como praia, passeios, piqueniques e muito mais, criando memórias inesquecíveis.",
    },
];

export const SOCIALS = {
    title: "Redes Sociais",
    links: [
        { icon: "/icons/instagram.svg", website: "https://www.instagram.com/centrodeestudos_blocodenotas/?hl=pt" },
        { icon: "/icons/facebook.svg", website: "https://www.facebook.com/CentrodeEstudosBlocodeNotas" },
    ],
};

export const PLACE_PHOTOS = [
    { src: "/place/espaco_1.jpg", alt: "espaco" },
    { src: "/place/espaco_2.jpg", alt: "espaco" },
    { src: "/place/espaco_3.jpg", alt: "espaco" },
    { src: "/place/espaco_4.jpg", alt: "espaco" },
    { src: "/place/espaco_5.jpg", alt: "espaco" },
    { src: "/place/espaco_6.jpg", alt: "espaco" },
    { src: "/place/espaco_7.jpg", alt: "espaco" },
    { src: "/place/espaco_8.jpg", alt: "espaco" },
    { src: "/place/espaco_9.jpg", alt: "espaco" },
    { src: "/place/espaco_10.jpg", alt: "espaco" },
    { src: "/place/espaco_11.jpg", alt: "espaco" },
];

export const TEAM_MEMBERS = [
    {
        name: "Susana Alice",
        role: "CEO & Founder",
        image: "/people/susana.png",
    },
    {
        name: "Vitor Fernandes",
        role: "CTO",
        image: "/people/vitor.png",
    },
];
