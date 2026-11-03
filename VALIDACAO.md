# Validação — FAQ, WebP e acessibilidade

## Confirmado por inspeção estática

- Seis questões/respostas em PT-PT, sem publicação de preços fixos.
- Novo componente acessível de FAQ incluído em `app/pages/index.vue` antes de Contacto.
- Dez trabalhos e parceria SousaDesignx preservados.
- Todos os ficheiros raster em `public/images/` são WebP; não se converteram SVG/ICO indevidamente.
- Imagens convertidas do logótipo e perfil têm píxeis idênticos aos PNG originais (WebP lossless).
- Imagens de portefólio responsivas e ligações internas referenciadas existem.
- Controlo de pausa e preferência de movimento reduzido do Swiper preservados.
- A página de resolução de litígios expõe `aria-expanded` e `aria-controls`.

## Por testar num ambiente Nuxt completo

- `npm ci`, `npm run typecheck`, `npm run generate` e teste visual do site.
- Lighthouse mobile/desktop e teste manual de teclado/leitores de ecrã.

Neste ambiente, só está instalado Node v22.16.0 (abaixo do mínimo do projeto), e `npm ci --offline` não terminou por falta de um pacote na cache (`@parcel/watcher-wasm`). Não afirmar validação do build ou conformidade WCAG até à execução local.


## Atualização — projetos em desenvolvimento (3 de novembro de 2026)

- GYSA Store e CallPhone adicionadas como projetos em desenvolvimento, sem integração no Swiper.
- Duas imagens novas com variantes 480, 960, 1440 e original, em WebP sem cortes.
- Links guardados apenas nos dados para utilização futura; não são mostrados como projetos lançados.
- Confirmar visualmente a secção em mobile, tablet e desktop e realizar `npm run typecheck` e `npm run generate` antes da publicação.

## Atualização — AM Shoes (3 de novembro de 2026)

- Captura original convertida para quatro ficheiros WebP, preservando proporção, sem cortes e com referência no portefólio.
- GYSA Store e CallPhone continuam apresentados como `Em desenvolvimento`; AM Shoes aparece como `Desenvolvimento em pausa`.
- Nenhum dos projetos em preparação está no Swiper inicial e os seus cartões não contêm links clicáveis.
- Testes estáticos de referências de imagens, dados e integridade do ZIP concluídos; build Nuxt e testes visuais responsivos ainda pendentes.


## Revisão do contacto (03/11/2026)

- [x] Verificação estática: nova grelha e sem larguras fixas no formulário.
- [x] Verificação estática: erros de nome, email, mensagem e consentimento associados aos campos por `aria-describedby` e `aria-invalid`.
- [x] Verificação estática: foco programado para o primeiro campo inválido.
- [x] Verificação estática: botões alinhados e métodos WhatsApp/email preservados.
- [ ] `npm ci && npm run typecheck && npm run generate` num ambiente com Node compatível.
- [ ] Teste visual e navegação por teclado em mobile, tablet e desktop.
