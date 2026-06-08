# proposta-factorial-MODELO

**Modelo reutilizável** para propostas Factorial — storytelling slides + **HR Journey**.

Leia primeiro: **[COMECE-AQUI.md](./COMECE-AQUI.md)**

## Padrão atual (v2)

| Experiência | Rota | Conteúdo |
|-------------|------|----------|
| Landing | `/` | 2 botões: Proposal + HR Journey |
| Proposal | `/proposta` | 7 slides narrativos (three acts, modular path) |
| HR Journey | `/jornada` | 5 passos · antes vs. Factorial · demos |

## Novo cliente

1. `./scripts/novo-cliente.sh "Client" "repo"`
2. Colar transcrição em `transcricao/reuniao.txt`
3. Preencher `cliente.config.json`
4. Prompts: `docs/PROMPT-CURSOR-7-SLIDES.md` + `docs/PROMPT-CURSOR-HR-JOURNEY.md`

## Dev

```bash
npm ci
npm run dev
# http://localhost:8080/__REPO_NAME__/
# http://localhost:8080/__REPO_NAME__/jornada
```

Referência de implementação completa: proposta Illovo Sugar (`illovosugar` no GitHub).
