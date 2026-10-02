# Nicole Vaz — Massagem na Barra da Tijuca

Projeto Astro independente, adaptado a partir do site de Patricia Adonias. A pasta do projeto original não foi alterada.

## Executar

Node.js 22.19 ou superior. Instale com `npm ci`; use `npm run dev -- --port 4322` para a prévia e `npm run build` para gerar `dist`.

## Dados do negócio

- Nicole Vaz.
- WhatsApp: (21) 96657-5078.
- Avenida das Américas, 7890, Barra da Tijuca, Rio de Janeiro.
- Segunda a sexta, das 10h às 22h; sábado, das 10h às 20h.
- Conteúdo de bem-estar não sexual: massagem relaxante, tântrica e desportiva.
- Instagram e domínio não informados. Nenhum perfil foi presumido.

## Publicação

Vercel ou Cloudflare Pages: comando `npm run build`, saída `dist`. Configure `SITE_URL` com o domínio HTTPS de produção. O projeto também reconhece `VERCEL_PROJECT_PRODUCTION_URL` e `CF_PAGES_URL`. Sem domínio, a prévia permanece com noindex e robots bloqueado. Canonical, URLs de compartilhamento e sitemap usam a URL configurada na compilação.

## Conteúdo e identidade

Página, serviços, horários e schema: `src/pages/index.astro`. CSS: `src/styles/global.css`. Fotos: `src/assets/`. Animações: `src/scripts/motion.ts`.

Identidade em vinho profundo, preto quente e dourado, com a assinatura “Nicole Vaz — Massagem relaxante e tântrica”. Hero com a foto “Spa Luxuoso à Luz de Velas”, fornecida em 01/10/2026. CTA final com foto de massagem ao fundo e sobreposição escura. WhatsApp flutuante verde em todas as telas. SVG de mãos e folhas no cabeçalho e rodapé. Fontes locais, imagens WebP responsivas, carregamento sob demanda e animações GSAP com suporte a movimento reduzido.

SEO local com LocalBusiness, endereço, telefone, serviços e horários estruturados. Valores, duração, qualificações e avaliações não fornecidos; a consulta desses detalhes ocorre pelo WhatsApp.
