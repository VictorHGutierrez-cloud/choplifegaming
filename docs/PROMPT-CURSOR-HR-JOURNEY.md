# Prompt Cursor — HR Journey (5 steps)

Use **after** or **together with** `PROMPT-CURSOR-7-SLIDES.md`.  
Source: `transcricao/reuniao.txt` + `cliente.config.json`.

---

```
TAREFA: Adaptar a HR Journey (/jornada) para um NOVO CLIENTE usando APENAS a transcrição.

LER PRIMEIRO:
1. transcricao/reuniao.txt — narrativa, dores, citações, stakeholders
2. cliente.config.json — clientName, language
3. src/utils/constants.ts — journeyTitle, journeySubline, journeyNextStepsIntro, clientQuoteAttribution
4. docs/factorial-funcionalidades-modulos.md — módulos por fase

ESTRUTURA (NÃO ALTERAR):
- 5 passos em src/data/journeySteps.ts (JOURNEY_STEPS)
- 3 next steps (NEXT_STEPS) — Explore · Go live · Results
- Componentes em src/components/journey/ — não refatorar
- Rota /jornada já configurada em App.tsx

CADA PASSO DEVE TER:
- title, character, moment — do contexto do cliente
- painToday — estado atual (só o que veio na transcrição)
- withFactorial — outcome modular (não prometer rip-and-replace)
- quote (opcional) — citação real da call
- moduleLabel — módulo Factorial mapeado
- demoVideos[] — URLs Google Drive preview (se tiveres vídeos; senão deixar [])
- screenshots[] (opcional) — ficheiros em public/journey/

IMAGENS:
- Substituir public/journey/step1.png … step5.png por ilustrações do cliente (ou manter temporariamente)
- passoa/b/c.png para secção "path forward"
- Ver public/journey/README.md

CONSTANTS (src/utils/constants.ts):
- journeyTitle — headline da página journey
- journeySubline — subtítulo com contexto do cliente
- journeyNextStepsIntro — texto da secção "The path forward"
- storyHeadline, storySubline — alinhar com slides

NÃO FAZER:
- Inventar dores ou citações
- Prometer substituir payroll/T&A se o cliente já tem fornecedor
- Alterar SlidePresenter, JourneyTimeline estrutura

AO TERMINAR, listar:
- URL local: http://localhost:8080/[repoName]/jornada
- Passos preenchidos (títulos)
- Vídeos demo adicionados (ou pendentes)
- Imagens a substituir manualmente
```
