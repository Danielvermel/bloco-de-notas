# Bloco de Notas — Centro de Estudos

Site institucional do [Bloco de Notas](https://blocodenotas.com.pt), centro de
estudos em Vila Nova de Gaia. Site estático construído com
[Astro](https://astro.build) e alojado na Cloudflare.

## Comandos

| Comando           | Ação                                            |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Instala as dependências                         |
| `npm run dev`     | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build`   | Gera o site estático em `dist/`                 |
| `npm run preview` | Pré-visualiza o `dist/` localmente              |

## Estrutura

```
public/            imagens, tipos de letra, robots.txt (copiados tal e qual)
src/
  content/blog/    artigos do blog, um ficheiro Markdown por artigo
  content.config.js  campos obrigatórios de cada artigo (fontes, crédito da foto…)
  data/site.js     conteúdo do site — moradas, serviços, testemunhos, FAQ…
  data/blog.js     lista dos artigos publicados, datas e tempo de leitura
  layouts/         estrutura HTML partilhada (meta tags, JSON-LD, tipos de letra)
  components/      cabeçalho, rodapé e as secções da página inicial
  pages/           index.astro · privacidade.astro · 404.astro · blog.astro ·
                   blog/[slug].astro · sitemap.xml.js (gerado, inclui os artigos)
astro.config.mjs   configuração do build
wrangler.toml      configuração da Cloudflare (serve ./dist)
```

### Onde alterar o conteúdo

Quase tudo o que é texto ou dados vive em `src/data/site.js`: contactos,
horários, serviços, motivos («Porquê Nós»), fotografias da galeria,
testemunhos e as perguntas frequentes. As FAQ alimentam ao mesmo tempo a
secção visível e o JSON-LD `FAQPage`, por isso basta editá-las num sítio.

### Notas de build

- `build.format: "file"` mantém os URL existentes (`/privacidade.html`, e não
  `/privacidade/`). Alterar isto quebra o canonical e o sitemap.
- `build.inlineStylesheets: "always"` mantém o CSS embutido no HTML, como no
  site anterior, para não haver um pedido bloqueante antes do primeiro render.
- O CSS é minificado pelo esbuild em vez do Lightning CSS, que descartava a
  declaração `backdrop-filter` sem prefixo usada no cabeçalho fixo.

## Blog

Cada artigo é um ficheiro em `src/content/blog/<endereço>.md`; o nome do
ficheiro é o URL (`/blog/<endereço>`). O cabeçalho do ficheiro tem o título, a
descrição, a data, a palavra-chave (do Google Keyword Planner), a foto com o
respetivo crédito e licença, e a lista de fontes (mínimo duas). O build falha
se faltar algum destes campos.

- As fotos ficam em `public/img/blog/<endereço>.webp` (1200×675) e vêm de
  fontes livres (Wikimedia Commons, CC0 / domínio público / CC BY / CC BY-SA).
  O crédito é mostrado por baixo da foto.
- Um artigo com data futura só aparece no primeiro build a partir dessa data,
  por isso dá para escrever artigos com antecedência.
- O `sitemap.xml` é gerado no build e inclui os artigos publicados.

## Formulário de contacto

O formulário submete para o [Formspree](https://formspree.io) (`formEndpoint`
em `src/data/site.js`). Se o endpoint voltar ao valor de exemplo, o envio faz
fallback para o cliente de email do visitante.
