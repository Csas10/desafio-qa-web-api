# Publicação e rastreabilidade

Destino: https://github.com/Csas10/desafio-qa-web-api — branch `main`.

O primeiro envio retornou HTTP 403 (`Resource not accessible by integration`).
O responsável adicionou o novo repositório à instalação existente da integração,
preservando os 7 acessos anteriores. A escrita foi então comprovada pela criação
real de `.gitattributes`, sem PAT amplo nem cópia de credenciais entre ferramentas.

## Publicação inicial verificada

A integração inicializou a branch com o commit
`5692cae0c173d32154d6396e10606c38b0776153`. Em seguida publicou três commits por
etapa, mantendo o conteúdo exato dos snapshots locais. Os SHAs de commit diferem
porque foram criados pela integração, com outro encadeamento e metadados. Não se
afirma que houve push dos objetos locais originais.

| Etapa | Commit local de origem | Commit remoto equivalente |
| --- | --- | --- |
| Plano e 21 casos | `f7ae56be0c5ef63d699b69078b67bf11319af689` | `dcc112b62094bd60bd111f9ff9c5c9feccaf8b8d` |
| Web Cypress/Cucumber | `6c5014d2e5d1e986d56a55414b7fe67a8ef796ee` | `3ce2aa2147b2350de0ff3e1ccd770f47ebca0d48` |
| API Newman e evidências | `02feb176edecf7740f35b21eafaa9f1fa8f48555` | `28cbbfe62ebc9f0e567792dbd59cb02860a25253` |

As árvores Git de cada etapa foram comparadas por SHA e coincidem. A última árvore
da publicação inicial é `a384ccdaa8540d8f012c5fa25ffc02c9a6f093e6`, com 30 arquivos,
sem truncamento na listagem remota. A branch foi atualizada sem force e com guarda
do HEAD esperado. Os commits locais originais permanecem preservados.

Um commit posterior acrescenta as evidências da segunda execução Newman e atualiza
o estado documental. Não há PR ou merge pendente criado para esta publicação.

## Continuar pelo computador do responsável

Para trabalhar sobre o histórico publicado, clonar em uma pasta nova:

```bash
git clone https://github.com/Csas10/desafio-qa-web-api.git
cd desafio-qa-web-api
git status
git log --oneline -5
```

Não repetir `git init` dentro de um clone nem usar force push para substituir a
branch pelo histórico local de origem. O ZIP anterior e seu `historico.bundle`
representam um checkpoint local, anterior à liberação da escrita; não são uma
prova de que os testes pendentes passaram. A autenticação da integração, do
navegador e da CLI continua independente. Não publicar tokens ou senhas.
