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
public/            imagens, tipos de letra, robots.txt, sitemap.xml (copiados tal e qual)
src/
  data/site.js     conteúdo do site — moradas, serviços, testemunhos, FAQ…
  layouts/         estrutura HTML partilhada (meta tags, JSON-LD, tipos de letra)
  components/      cabeçalho, rodapé e as secções da página inicial
  pages/           index.astro · privacidade.astro · 404.astro
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

## Formulário de contacto

O formulário submete para o [Formspree](https://formspree.io) (`formEndpoint`
em `src/data/site.js`). Se o endpoint voltar ao valor de exemplo, o envio faz
fallback para o cliente de email do visitante.
