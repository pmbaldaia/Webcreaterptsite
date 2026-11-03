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


## Parceiros

- Nova secção `Parceiros` na homepage, entre Serviços e Portefólio.
- SousaDesignx: marca pessoal portuguesa de design gráfico, especializada em identidade visual, cartazes, pósteres e conteúdos criativos.
- Logótipo fornecido pelo utilizador, convertido em WebP com recorte apenas das margens brancas, em `public/images/partners/sousadesignx.webp`.
- Link Instagram `@sousadesignx` e contactos presentes no cartão.
- Dados editáveis em `app/utils/content.ts` e apresentação em `app/components/section/Partners.vue`.

## Ajustes visuais e responsivos — novembro de 2026

Esta revisão mantém o logótipo e a navegação exatamente como enviados no ZIP de origem.

- **Hero:** espaçamento superior e inferior afinado, preservando os textos e os botões.
- **Separadores:** removidas margens duplicadas, responsáveis pelo excesso de espaço entre secções.
- **Secções:** espaçamento vertical uniformizado em telemóveis, tablets e desktops.
- **Carrossel inicial:** molduras 2:1 e legendas com altura consistente, sem cortar as imagens (`object-contain`). O número de cartões visíveis ajusta-se aos ecrãs (cerca de 1 no telemóvel, 2 no tablet e 3 no desktop).
- **Swiper:** continua automático, infinito, com velocidade linear e controlo apenas por ícone. A inicialização do autoplay foi reforçada para diferentes ordens de montagem do Vue; o comportamento de movimento reduzido mantém-se.
- **Portefólio:** tom de fundo das imagens harmonizado com o carrossel; links dos projetos continuam apenas na secção de trabalhos.
- **Limpeza:** removidos os diretórios gerados `.nuxt/` e `.data/` do ZIP; serão recriados automaticamente quando necessários.

### Verificações locais antes de publicar

```bash
npm ci
npm run typecheck
npm run generate
npm run preview
```

Validar a navegação, o Swiper, o botão pausa/reprodução, a secção Parceiros e o formulário em ecrãs de 375, 768, 1024 e 1440 px. Confirmar também `prefers-reduced-motion: reduce`. A validação estática dos ficheiros foi realizada nesta entrega; o build completo depende de Node.js e das dependências indicadas acima.

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

## Apresentação responsiva do logótipo SousaDesignx

A secção Parceiros mantém os contactos e informação existentes. O logótipo foi recortado apenas nas margens brancas a partir da imagem original fornecida, sem alteração do desenho, e guardado em WebP. A imagem está centrada num cartão branco compacto sobre fundo escuro: sem altura fixa em mobile e com alinhamento vertical ao centro no desktop.

## Finais de linha e Git (Windows)

O projeto utiliza **LF** nos ficheiros de código, configuração e documentação, em qualquer sistema operativo. As regras encontram-se em `.gitattributes` e `.editorconfig`; os recursos binários não são transformados. Os scripts Windows `.bat` e `.cmd`, caso sejam acrescentados, utilizam CRLF.

Se já tiver o projeto num repositório Git, execute **uma única vez** após copiar os ficheiros atualizados:

```bash
git add --renormalize .
git add .
git status
```

Isto atualiza os finais de linha no índice do repositório sem alterar o conteúdo funcional do site. Não é necessário mudar `core.autocrlf` globalmente no Windows. Para verificar um ficheiro: `git ls-files --eol app/app.vue` (deverá indicar `i/lf w/lf`).


## FAQ, imagens WebP e acessibilidade (novembro de 2026)

Esta revisão acrescenta a secção **Perguntas frequentes** entre Portefólio e Contacto, mantendo o design, o Navbar, o logótipo e a navegação existentes.

### FAQ

As perguntas e respostas estão em `app/utils/content.ts` (`FAQ`) e são apresentadas por `app/components/section/Faq.vue`. Podem ser alteradas sem mexer no componente. Incluem critérios de orçamento, custos de plataformas, condições de pagamento, prazos, apoio inicial e melhorias em websites existentes. Não publicam um preço fixo. As condições comerciais devem ser confirmadas antes da publicação se entretanto tiverem mudado.

### Imagens

- `logo-white-horizontal.png` → `logo-white-horizontal.webp` (WebP **sem perdas**, mesmas dimensões e píxeis para preservar o aspeto do Navbar).
- `profile.png` → `profile.webp` (WebP **sem perdas**).
- Os três logótipos PNG antigos sem referências no código foram retirados de `public/images/`.
- Capturas do portefólio e parceiro já estavam em WebP, incluindo variantes responsivas com `srcset`; mantidas sem nova compressão para preservar a legibilidade das páginas capturadas.
- O favicon `.ico` e os ícones `.svg` continuam nos formatos apropriados.

### Acessibilidade

- Perguntas frequentes com `<details>` e `<summary>` nativos: navegação por teclado, estados abertos/fechados anunciados por tecnologias assistivas e ícones decorativos ocultos ao leitor de ecrã.
- Identificação dos estados `aria-expanded` e das regiões `aria-controls` nos painéis da página de resolução de litígios.
- Descrição revista para a imagem institucional; descrição de abertura de nova janela na ação WhatsApp do Hero.
- Mantidos: salto para o conteúdo, identificação de idioma `pt-PT`, foco visível, formulários com etiquetas e validação nativa, imagens com `alt`, Swiper com controlo de pausa e respeito por movimento reduzido.

### Validação local (antes de publicar)

O projeto requer Node.js conforme `package.json` / `.nvmrc`. Executar:

```bash
npm ci
npm run typecheck
npm run generate
npm run dev
```

Depois, testar FAQ e formulário com teclado, menu móvel e Swiper com movimento reduzido, e medir com Lighthouse/axe em mobile e desktop. Esta revisão **não comprova conformidade WCAG** sem testes completos de funcionamento e tecnologias assistivas.

## Projetos em desenvolvimento — GYSA Store e CallPhone (novembro de 2026)

- Adicionada uma área discreta **«Próximos projetos»** no final da secção Portefólio, depois dos dez projetos publicados.
- **GYSA Store** (`gysastore.pt`): loja online de moda, com novidades, mulher, homem e acessórios.
- **CallPhone** (`callphone.pt`): loja online de telemóveis, com produtos, retomas e reparações.
- São **pré-visualizações de projetos em desenvolvimento**: não aparecem no Swiper inicial, não incluem datas de lançamento, nem botões «Ver website» antes de serem classificados como concluídos.
- Os domínios estão guardados em `UPCOMING_WORK` (`app/utils/content.ts`), facilitando a passagem para `WORK.works` após a publicação.
- Capturas originais fornecidas pelo utilizador, convertidas sem cortes para WebP de qualidade 89, com variantes 480/960/1440 e originais de 2048 píxeis; `srcset` e `loading="lazy"` para reduzir o carregamento.
- Os dez projetos concluídos, a FAQ, a parceria SousaDesignx, o Navbar, o WhatsApp e as páginas legais foram preservados.

## Atualização — AM Shoes (3 de novembro de 2026)

- Adicionado **AM Shoes — Sapatarias Moreira** à secção de projetos em preparação.
- Estado **Desenvolvimento em pausa** identificado de forma discreta, distinto dos projetos que continuam em desenvolvimento.
- A imagem da homepage foi fornecida pelo utilizador e convertida sem cortes para `amoreirashoes.webp`, com versões `-480`, `-960` e `-1440` para ecrãs diferentes.
- URL de referência guardado nos dados: `http://ammoreirashoes.netlify.app/`. Não existe link público no cartão enquanto o projeto não for lançado.
- Mantidos os dez trabalhos realizados e os dois projetos em desenvolvimento (GYSA Store e CallPhone). O novo projeto não aparece no Swiper inicial.


## Formulário de contacto — revisão de alinhamento e acessibilidade (novembro de 2026)

- A secção Contacto tem agora apresentação em duas colunas no desktop (informação e formulário) e empilhada no mobile.
- Os campos Nome e Email partilham uma grelha com alturas e espaçamentos consistentes; as mensagens de erro aparecem imediatamente abaixo do respetivo campo, sem avisos flutuantes do navegador.
- A validação cobre nome, formato de email, mensagem e aceitação da Política de Privacidade. O primeiro campo inválido recebe foco no envio; os erros podem ser corrigidos sem recomeçar o formulário.
- Os dois botões de envio têm a mesma largura em desktop e ocupam a largura disponível em mobile.
- Mantiveram-se o WhatsApp, o email, o conteúdo da mensagem, os contactos e a abertura da aplicação escolhida. Não existe backend de envio: a mensagem só é enviada depois da confirmação no serviço externo.
- Testar com todos os campos vazios, email inválido, checkbox não assinalada, teclado e resoluções de 375, 768 e 1440 px.
