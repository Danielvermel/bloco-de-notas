/**
 * Content of the service pages (/servicos/<slug>), one entry per card in the
 * homepage's Serviços section (matched by `slug` in `services`, site.js).
 *
 * Only facts the centre already states elsewhere on the site go here: ages,
 * small groups, transport, meals, hours, summer outings. No prices, school
 * names or promises the centre hasn't made. `escolas` lists the schools the
 * transport serves (confirmed by the centre, Nov 2026).
 *
 * `faq` renders on the page and as that page's FAQPage JSON-LD.
 * `testimonial` is an index into `testimonials` (site.js), or omitted.
 * `interesse` preselects the contact form's "Interesse" option.
 */

export const servicePages = {
  "apoio-ao-estudo": {
    title: "Apoio ao Estudo em Vila Nova de Gaia · 1.º ao 9.º ano · Bloco de Notas",
    description:
      "Apoio ao estudo diário em Vila Nova de Gaia, do 1.º ao 9.º ano: trabalhos de casa, testes e métodos de estudo em grupos pequenos. Uma alternativa ao ATL.",
    h1: "Apoio ao estudo do 1.º ao 9.º ano, em Vila Nova de Gaia",
    lede: "Todos os dias, depois das aulas, o seu filho faz os trabalhos de casa, revê a matéria e prepara os testes com professores que o acompanham de perto, em grupos pequenos. Procura um ATL em Gaia? Aqui o tempo depois da escola é tempo de estudo.",
    image: { src: "/img/sala-de-estudo-biblioteca.webp", w: 900, h: 1200, alt: "Sala de estudo do Bloco de Notas com mesas de trabalho e biblioteca de apoio" },
    pointsTitle: "O que inclui",
    points: [
      { title: "Trabalhos de casa acompanhados", text: "Os TPC ficam feitos no centro, com um professor por perto para tirar dúvidas no momento." },
      { title: "Preparação de testes e fichas", text: "Revemos a matéria com antecedência e treinamos com exercícios, para chegar ao teste sem stress." },
      { title: "Todas as disciplinas do Ensino Básico", text: "Do Português e da Matemática às Ciências e às línguas, do 1.º ao 9.º ano." },
      { title: "Métodos de estudo", text: "Ensinamos a organizar o tempo, a resumir e a estudar de forma eficiente, para o aluno ganhar autonomia." },
      { title: "Grupos pequenos", text: "Cada aluno recebe atenção e sente-se à vontade para perguntar." },
      { title: "Feedback regular aos pais", text: "Sabe como correu a semana, o comportamento e os resultados, sem ter de perguntar." },
    ],
    testimonial: 0,
    interesse: "Apoio ao Estudo",
    faq: [
      {
        q: "Para que anos é o apoio ao estudo?",
        a: "Para alunos do 1.º ao 9.º ano, ou seja, todo o Ensino Básico (1.º, 2.º e 3.º ciclos). O apoio é ajustado ao ano e às disciplinas de cada aluno.",
      },
      {
        q: "Qual é a diferença entre apoio ao estudo e explicações?",
        a: "O apoio ao estudo é o acompanhamento diário, em grupo pequeno: trabalhos de casa, revisão da matéria e preparação de testes. As explicações são sessões dirigidas a uma dificuldade concreta, individuais ou em pequeno grupo. Muitos alunos combinam os dois.",
      },
      {
        q: "Qual é a dimensão dos grupos?",
        a: "Trabalhamos em grupos pequenos para garantir atenção personalizada. Assim cada aluno é acompanhado de perto e sente-se à vontade para colocar dúvidas.",
      },
      {
        q: "Como sei como está a correr?",
        a: "Damos feedback regular sobre o progresso, o comportamento e os resultados de cada aluno, por contacto direto e sempre que necessário.",
      },
    ],
  },

  explicacoes: {
    title: "Explicações em Vila Nova de Gaia · 1.º ao 9.º ano · Bloco de Notas",
    description:
      "Explicações individuais e em pequeno grupo em Vila Nova de Gaia, do 1.º ao 9.º ano: Matemática, Português e outras disciplinas, com um plano ajustado a cada aluno.",
    h1: "Explicações individuais do 1.º ao 9.º ano, em Vila Nova de Gaia",
    lede: "Quando há uma dificuldade concreta, uma matéria que não ficou percebida, um teste ou uma prova final à porta, as explicações dão ao aluno o tempo e a atenção que a sala de aula não consegue dar.",
    image: { src: "/img/sala-de-estudo.webp", w: 900, h: 1200, alt: "Sala de estudo do Bloco de Notas com mesas de trabalho e quadro" },
    pointsTitle: "Como funcionam",
    points: [
      { title: "Individuais ou em pequeno grupo", text: "Escolhemos o formato que melhor se ajusta ao aluno e ao objetivo." },
      { title: "Um plano para cada aluno", text: "Começamos por perceber onde está a dificuldade e definimos objetivos claros e alcançáveis." },
      { title: "Professores qualificados", text: "Uma equipa que domina as matérias e conhece as dificuldades mais comuns em cada ano." },
      { title: "Matemática, Português e mais", text: "Todas as disciplinas do Ensino Básico, do 1.º ao 9.º ano." },
      { title: "Preparação para testes e provas", text: "Revisões orientadas antes dos testes e das provas finais do 9.º ano." },
      { title: "Pais a par do progresso", text: "Feedback regular sobre a evolução e os resultados." },
    ],
    testimonial: 1,
    interesse: "Explicações Individuais",
    faq: [
      {
        q: "Fazem explicações individuais?",
        a: "Sim. Além do apoio ao estudo em grupo, damos explicações individuais e em pequeno grupo, com professores especializados e um plano ajustado às dificuldades de cada aluno.",
      },
      {
        q: "De que disciplinas e anos?",
        a: "De todas as disciplinas do Ensino Básico, do 1.º ao 9.º ano.",
      },
      {
        q: "Preciso de estar inscrito no centro de estudos para ter explicações?",
        a: "Fale connosco: ajustamos os serviços ao que o seu filho precisa, e as explicações podem ser combinadas com o apoio ao estudo ou não.",
      },
      {
        q: "Quanto custam as explicações?",
        a: "Os valores dependem do formato (individual ou em pequeno grupo) e do número de sessões. Contacte-nos para uma proposta ajustada.",
      },
    ],
  },

  "transporte-e-refeicoes": {
    title: "Centro de Estudos com Transporte e Almoço em Gaia · Alternativa ao ATL · Bloco de Notas",
    description:
      "Procura um ATL em Vila Nova de Gaia? Transporte da Soares dos Reis e das escolas de Laborim, almoço, lanche e apoio ao estudo com professores, das 7h30 às 19h00.",
    h1: "Transporte da escola e refeições, com o dia resolvido",
    lede: "Vamos buscar o seu filho à escola, ele almoça e lancha connosco e faz os trabalhos no centro. Quando o vem buscar, o dia está feito. É o que procura num ATL, com apoio ao estudo a sério.",
    image: { src: "/img/entrada.webp", w: 900, h: 1200, alt: "Entrada do Bloco de Notas com o mural da mascote" },
    pointsTitle: "O que inclui",
    points: [
      { title: "Transporte escola–centro", text: "Recolhemos os alunos na Soares dos Reis e nas escolas de Laborim de Cima e de Laborim de Baixo, em conforto e segurança." },
      { title: "Refeições", text: "Almoço assegurado nos dias em que o seu filho precisa." },
      { title: "Lanches", text: "Um lanche a meio da tarde, antes de voltar ao estudo." },
      { title: "Aberto das 7h30 às 19h00", text: "De segunda a sexta, para encaixar no horário de quem trabalha." },
      { title: "Estudo e convívio", text: "Entre a escola e a hora de ir para casa: trabalhos feitos, matéria revista e tempo para brincar." },
      { title: "Comunicação com os pais", text: "Sabe sempre como correu o dia." },
    ],
    testimonial: 2,
    escolas: [
      "Escola EB 2/3 Soares dos Reis",
      "Escola Básica do 1.º CEB de Laborim de Cima",
      "Escola Básica do 1.º CEB de Laborim de Baixo",
    ],
    interesse: "Transporte e Refeições",
    faq: [
      {
        q: "O Bloco de Notas é um ATL?",
        a: "Muitos pais procuram-nos como ATL, e o dia a dia é parecido: ficamos com o seu filho depois das aulas, das 7h30 às 19h00, com transporte da escola, almoço e lanche. A diferença é que somos um centro de estudos: esse tempo é passado a fazer os trabalhos e a estudar com professores, em grupos pequenos. Explicamos as diferenças no blog, no artigo «Centro de estudos ou ATL: diferenças e como escolher».",
      },
      {
        q: "Têm transporte e refeições?",
        a: "Sim. Asseguramos o transporte entre a escola e o centro e disponibilizamos refeições e lanches, para que o dia do seu filho decorra com tranquilidade e segurança.",
      },
      {
        q: "De que escolas fazem o transporte?",
        a: "Fazemos o transporte a partir da Escola EB 2/3 Soares dos Reis, da Escola Básica do 1.º CEB de Laborim de Cima e da Escola Básica do 1.º CEB de Laborim de Baixo. Se o seu filho anda noutra escola, fale connosco.",
      },
      {
        q: "Qual é o horário?",
        a: "Estamos abertos de segunda a sexta-feira, das 7h30 às 19h00.",
      },
      {
        q: "Posso escolher só alguns dias ou serviços?",
        a: "Os valores dependem dos serviços pretendidos (apoio ao estudo, explicações, transporte e refeições). Contacte-nos para uma proposta ajustada ao seu dia a dia.",
      },
    ],
  },

  "atividades-de-verao": {
    title: "Atividades de Verão para Crianças em Vila Nova de Gaia · Bloco de Notas",
    description:
      "Atividades de verão em Vila Nova de Gaia para alunos do 1.º ao 9.º ano: praia, passeios, piqueniques e convívio, com momentos de estudo quando necessário.",
    h1: "Atividades de verão em Vila Nova de Gaia",
    lede: "Nas férias, o Bloco de Notas troca os livros pela praia, pelos passeios e pelos piqueniques, sem perder o acompanhamento e a segurança de todo o ano.",
    image: { src: "/img/sala-de-convivio.webp", w: 1400, h: 1050, alt: "Sala de convívio do Bloco de Notas, com matraquilhos, sofás e paredes coloridas" },
    pointsTitle: "O que fazemos",
    points: [
      { title: "Praia", text: "Dias de praia com a supervisão da equipa." },
      { title: "Passeios", text: "Saídas para conhecer a cidade e a região." },
      { title: "Piqueniques", text: "Ao ar livre, em grupo." },
      { title: "Convívio", text: "Jogos e tempo com os amigos, no centro e fora dele." },
      { title: "Estudo quando faz falta", text: "Para quem tem matéria a recuperar ou quer começar o ano seguinte com vantagem." },
      { title: "A equipa de todo o ano", text: "As mesmas caras e o mesmo cuidado dos meses de aulas." },
    ],
    interesse: "Atividades de Verão",
    faq: [
      {
        q: "Têm atividades de verão?",
        a: "Sim. Durante o verão organizamos atividades como praia, passeios e piqueniques, combinando lazer, convívio e momentos de estudo quando necessário.",
      },
      {
        q: "Para que idades são?",
        a: "Para alunos do 1.º ao 9.º ano. Fale connosco para saber se há lugar para o seu filho.",
      },
      {
        q: "Quando abrem as inscrições?",
        a: "Contacte-nos para saber as datas e reservar lugar para o próximo verão.",
      },
    ],
  },
};
