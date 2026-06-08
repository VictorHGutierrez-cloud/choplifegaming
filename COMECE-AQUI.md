# Comece aqui — Proposta Factorial (modelo)

Esta pasta é o **modelo reutilizável**. Para cada cliente novo, **não copie** a pasta do último cliente — duplique **sempre** esta pasta.

Cada proposta tem **duas experiências**:
- **Enter proposal** — 7 slides com narrativa storytelling
- **HR Journey** — 5 passos interativos (antes vs. com Factorial) em `/jornada`

---

## Passo a passo (cada cliente novo)

### 1. Duplicar o modelo

- No Finder: clique com o botão direito em `proposta-factorial-MODELO` → **Duplicar**
- Renomeie para `proposta-nome-do-cliente` (ex.: `proposta-acme`)
- Ou use o script (mais rápido):

```bash
cd ~/Desktop/proposta-factorial-MODELO
./scripts/novo-cliente.sh "Acme Corp" "acme"
```

Isto cria `~/Documents/proposta-acme` já com nomes trocados.

### 2. Colar a transcrição

1. Abra `transcricao/reuniao.txt`
2. Apague as linhas de instrução no topo
3. Cole o texto **integral** da discovery call (SDR ou demo)

### 3. Configurar o cliente

1. Copie `cliente.config.json.example` → `cliente.config.json`
2. Preencha:

| Campo | Exemplo | O que é |
|-------|---------|---------|
| `clientName` | Acme Corp | Nome na capa da proposta |
| `repoName` | acme | Nome do repositório GitHub (sem espaços) |
| `githubUser` | VictorHGutierrez-cloud | Seu utilizador GitHub |
| `language` | en ou pt | Idioma da copy nos slides |
| `deck` | 7 ou 19 | 7 = storytelling + HR Journey; 19 = pitch completo |
| `pricingMode` | placeholder ou final | placeholder = preço na demo; final = números fechados |

### 4. Abrir no Cursor

1. **File → Open Folder** → escolha a pasta duplicada do cliente
2. Cole o prompt de `docs/PROMPT-CURSOR-7-SLIDES.md` no chat **Agent**
3. Depois cole `docs/PROMPT-CURSOR-HR-JOURNEY.md` (ou num único chat)
4. Anexe: `@transcricao/reuniao.txt` e `@cliente.config.json`

O Agent adapta slides, constants, journey steps e copy usando a transcrição.

### 5. Ver o site no computador

```bash
cd ~/Documents/proposta-acme
npm ci
npm run dev
```

| URL | O que é |
|-----|---------|
| `http://localhost:8080/REPO/` | Landing (2 botões) |
| `http://localhost:8080/REPO/proposta` | 7 slides |
| `http://localhost:8080/REPO/jornada` | HR Journey |

### 6. Publicar no GitHub

1. Crie repositório **vazio** no GitHub = `repoName`
2. **Settings → Pages** → fonte: **GitHub Actions**
3. Na pasta do cliente:

```bash
git init
git add -A
git commit -m "Add proposal for [Client Name]"
git branch -M main
git remote add origin https://github.com/VictorHGutierrez-cloud/REPO.git
git push -u origin main
```

4. Site live: `https://victorhgutierrez-cloud.github.io/REPO/`

---

## O que tem dentro desta pasta

| Pasta / ficheiro | Para quê |
|------------------|----------|
| `src/pages/Journey.tsx` | Página HR Journey |
| `src/data/journeySteps.ts` | 5 passos + next steps (editar por cliente) |
| `src/components/journey/` | UI da jornada (não alterar estrutura) |
| `public/journey/` | Ilustrações step1–5, passoa–c, screenshots |
| `src/components/slides/slides.tsx` | 7 slides storytelling |
| `docs/PROMPT-CURSOR-HR-JOURNEY.md` | Prompt para adaptar a jornada |
| `transcricao/reuniao.txt` | **Cole a transcrição aqui** |

---

## Depois da demo

- `src/utils/constants.ts` — preços finais
- `src/data/journeySteps.ts` — vídeos demo (Google Drive URLs)
- `public/journey/` — imagens finais do cliente
- `git push` → site atualiza sozinho

---

## Dúvidas frequentes

**7 ou 19 slides?**  
- **7 + HR Journey** — padrão atual (qualificação / pré-demo)  
- **19** — pitch longo com ROI (template em `templates/19-slide-template/`)

**Posso estragar o design?**  
Não altere `SlidePresenter.tsx`, `JourneyTimeline.tsx` nem UI base. Só texto, constants e `journeySteps.ts`.
