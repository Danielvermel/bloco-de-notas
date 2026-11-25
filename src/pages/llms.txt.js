import { faq, services, site } from "../data/site.js";
import { getPublishedPosts } from "../data/blog.js";

/**
 * /llms.txt (llmstxt.org): a plain summary of the site for answer engines.
 *
 * Built like sitemap.xml, from the same data the pages render, so a new
 * article is listed on the day it is published and a changed phone number or
 * timetable changes here too. Only facts printed on the site go in.
 */
export async function GET() {
  const posts = await getPublishedPosts();
  // "07:30" -> "7h30", the way the page prints it.
  const h = (t) => t.replace(/^0/, "").replace(":", "h");
  const hours = `segunda a sexta-feira, das ${h(site.opens)} às ${h(site.closes)}`;
  const lines = [
    `# ${site.name}`,
    "",
    `> O Bloco de Notas é um centro de estudos em ${site.locality} para alunos do 1.º ao 9.º ano (Ensino Básico). Faz apoio ao estudo diário e explicações individuais ou em pequeno grupo, com professores qualificados, transporte entre a escola e o centro, refeições e lanches, e atividades de verão. Muitos pais procuram-no como ATL: o horário e a logística são parecidos, mas o tempo é passado a estudar com professores. Está aberto de ${hours}.`,
    "",
    `- Morada: ${site.street}, ${site.locality}`,
    `- Telemóvel e WhatsApp: ${site.phone}`,
    `- Email: ${site.email}`,
    `- Horário: ${hours}`,
    `- Valores: dependem dos serviços pretendidos; o centro faz uma proposta a pedido.`,
    "",
    "## Páginas principais",
    "",
    `- [Página inicial](${site.url}/): serviços, espaço, testemunhos de pais, perguntas frequentes e contactos.`,
    ...services.map((s) => `- [${s.title}](${site.url}/servicos/${s.slug}): ${s.text}`),
    `- [Perguntas frequentes](${site.url}/#faq): ${faq.length} respostas sobre anos de escolaridade, explicações, transporte, grupos, horários e valores.`,
    `- [Contactos](${site.url}/#contactos): morada, telemóvel, email, horário e formulário para marcar uma visita.`,
    `- [Blog](${site.url}/blog): artigos para pais e alunos do Ensino Básico, cada um com as fontes em que se apoia.`,
    "",
    "## Artigos do blog",
    "",
    ...posts.map((p) => `- [${p.data.title}](${site.url}/blog/${p.id}): ${p.data.description}`),
    "",
    "## Opcional",
    "",
    `- [Política de Privacidade](${site.url}/privacidade): como o centro trata os dados enviados pelo formulário de contacto.`,
    `- [Instagram](${site.instagram})`,
    `- [Facebook](${site.facebook})`,
    `- [Google Maps](${site.mapsLink}): localização e avaliações no Google.`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
