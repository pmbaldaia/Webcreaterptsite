# WebCreaterPT — Nuxt 4

Projeto do website WebCreaterPT com portefólio e páginas legais, preparado para publicação estática.

## Requisitos

- Node.js 22.23.2 ou superior compatível com `package.json`
- npm

## Executar

```bash
npm install
npm run dev
```

## Validar e publicar

```bash
npm run typecheck
npm run generate
```

Os ficheiros estáticos são gerados em `.output/public/` para alojamento compatível com Nuxt/Nitro. Verifique os links, os contactos e as páginas legais antes de publicar.

## Portefólio e carrossel

- 10 projetos, incluindo MAL, Kékai Studio, Euphoria e VanessaKloset (com a indicação discreta de pausa nas vendas).
- Capturas em `public/images/work/`, com variantes WebP para ecrãs pequenos e grandes; as imagens surgem sem cortes.
- Galeria inicial não clicável, implementada com Swiper Vue (`app/components/PortfolioShowcase.vue`).
- Movimento contínuo, linear, automático e circular (`autoplay.delay = 0`, `speed = 6500`, `loop = true`).
- Controlo visual exclusivamente com o ícone pausa/reprodução. O botão tem uma descrição acessível para leitores de ecrã.
- Se o utilizador definiu `prefers-reduced-motion: reduce`, a reprodução automática não arranca até ser ativada manualmente.
- Links de acesso aos sites apenas na secção de Trabalhos, por baixo dos respetivos cartões.

## Estrutura

- `app/components/section/`: secções da homepage.
- `app/components/PortfolioShowcase.vue`: carrossel visual de projetos.
- `app/utils/content.ts`: conteúdos, contactos e links dos dez trabalhos.
- `app/utils/portfolioImages.ts`: URLs WebP e `srcset`.
- `app/pages/policy/`: páginas legais.
- `public/images/` e `public/svg/`: recursos usados pelas páginas.

## Limpeza

A entrega não inclui PNG de origem, cópias de backup de imagens, relatório histórico de migração ou componentes/composable sem referências no código. Os ficheiros WebP utilizados no site e todas as variantes responsivas necessárias estão preservados.

## Validação

Esta edição foi verificada estaticamente (referências dos recursos, 10 trabalhos, 4 páginas, estrutura Vue, e configuração de Swiper). O build e o comportamento real do carrossel **não foram testados num browser** neste ambiente, porque não foi possível instalar as dependências npm. Execute os comandos acima e teste em desktop e mobile antes de publicar.
