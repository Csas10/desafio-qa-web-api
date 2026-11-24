# Publicação no repositório criado

O destino já foi criado: https://github.com/Csas10/desafio-qa-web-api
O envio por integração foi interrompido com HTTP 403. Não há código publicado até
esta preparação. A autenticação da CLI e a autorização do conector são independentes
da sessão do navegador; não copiar cookies, tokens ou senhas entre essas superfícies.

## Publicar pelo computador do responsável

Extrair o ZIP e abrir a pasta desafio-qa-web-api. Ela contém os arquivos completos,
sem node_modules, vídeos ou credenciais privadas. A partir dessa pasta, executar:

```bash
git init
git add .
git commit -m "chore: estrutura monorepo para testes Web e API"
git branch -M main
git remote add origin https://github.com/Csas10/desafio-qa-web-api.git
git push -u origin main
```

Executar somente se a pasta extraída ainda não estiver versionada e o destino
continuar vazio. Se já houver .git ou commits remotos, conferir o estado primeiro;
não usar force push nem reset para substituir trabalho existente. O login GitHub
deve ocorrer pelo mecanismo normal do Git/Git Credential Manager, sem senhas em chat.

O ZIP também contém historico.bundle fora da pasta do projeto. Para preservar os três
commits locais em vez de iniciar outro histórico, pode-se clonar esse bundle numa
nova pasta e então usar `git remote set-url origin` para o destino real. Escolher
um dos procedimentos, não os dois. Após envio, confirmar arquivos, READMEs e SHA
no GitHub. O conteúdo deste guia é um procedimento, não prova de push executado.
