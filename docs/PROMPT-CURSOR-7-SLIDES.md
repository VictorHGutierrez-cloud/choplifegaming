# Prompt Cursor — Proposta 7 slides + storytelling

Copie **todo o bloco abaixo** no chat Agent (modo Agent).  
Depois corra também `PROMPT-CURSOR-HR-JOURNEY.md` para a página `/jornada`.

---

```
TAREFA: Adaptar esta proposta Factorial para um NOVO CLIENTE usando APENAS a transcrição e cliente.config.json.

LER PRIMEIRO (obrigatório):
1. transcricao/reuniao.txt — fonte única da narrativa e dores
2. cliente.config.json — clientName, repoName, language, pricingMode, deck
3. docs/factorial-funcionalidades-modulos.md — bundles e módulos (bundle-first)
4. reference/ROW USD Prices.xlsx — preços quando pricingMode = "final"
5. docs/PROMPT-UNICO-PROPOSTA.md — regras de design invioláveis
6. docs/PROMPT-CURSOR-HR-JOURNEY.md — HR Journey (5 passos em /jornada)

CONFIGURAÇÃO TÉCNICA:
- vite.config.ts: base = "/" + repoName + "/" (de cliente.config.json)
- GitHub Pages URL: https://[githubUser].github.io/[repoName]/
- Rotas: / (landing) · /proposta (slides) · /jornada (HR Journey)
- Idioma da copy: conforme cliente.config.json (en ou pt)

REGRAS DE DESIGN (NÃO VIOLAR):
- NÃO modificar: SlidePresenter.tsx, SlideLayout.tsx, cinematic-hero.tsx, components/journey/* estrutura
- NÃO inventar novos tipos de slide ou rotas
- Manter SlideData, SectionLabel, SlideTitle, FactorialCard, ActCard, px-[100px]
- Atualizar particle words: ["Factorial HR", "CLIENT NAME UPPERCASE"]
- Remover TODA copy de clientes anteriores

REGRAS DE PITCH — 7 SLIDES (ordem fixa, narrativa storytelling):
1. cover — storyHeadline + storySubline + quote real + vendedor Victor Gutierrez
2. three-acts — 3 ActCards (passado · hoje · janela) com citações da transcrição
3. peak-pain — 3 cards (controlo · oportunidade · urgência) mapeados às dores
4. modular-path — Phase 1/2/3 modular; bundle-first; banner demo
5. how-it-fits — tabela 6 linhas: Area | Today | With Factorial
6. path-forward — 3 passos + pricing (placeholder ou final) + bundle
7. factorial-video — título com nome do cliente; closingVideoId

BUNDLE (regra comercial):
- Sempre recomendar Starter ou PRO bundle primeiro
- Add-ons só se gap crítico na transcrição
- Abordagem modular — não rip-and-replace do stack existente

FICHEIROS A EDITAR (ordem):
1. Resumir em 12 linhas o que extraiu da transcrição
2. src/utils/constants.ts — todos os campos incl. storyHeadline, journeyTitle, journeySubline
3. src/components/slides/slides.tsx — reescrever copy dos 7 slides
4. src/data/journeySteps.ts — 5 passos + NEXT_STEPS (ver PROMPT-CURSOR-HR-JOURNEY.md)
5. src/pages/Landing.tsx + particle-text-effect.tsx — nome do cliente
6. index.html — title e meta
7. vite.config.ts — repoName correto
8. Criar intake-[cliente].json e proposta-[cliente].md

NÃO FAZER:
- Refatorar components/ui
- Adicionar dependências npm
- Inventar dores ou preços

AO TERMINAR, listar:
- URL local: http://localhost:8080/[repoName]/ e /jornada
- Ficheiros alterados
- Itens [A DEFINIR] para revisão humana
- Bundle recomendado e justificação em 2 frases
```
