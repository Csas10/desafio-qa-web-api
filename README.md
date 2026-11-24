# Desafio de QA Web e API

Atividade final de Qualidade e Teste de Software: testes de compra no Automation
Exercise e testes de API no DummyJSON. Um monorepo, duas instalações independentes,
sem package.json compartilhado e sem alterar o projeto iTech.

## Conteúdo

- [Web Cypress e Cucumber](./web-cypress/README.md): fluxo de pedido e instruções.
- [API Postman e Newman](./api-newman/README.md): coleção, ambiente e execução.
- [Plano de testes](./docs/plano-testes.md): escopo, plano E2E e critérios de aceite.
- [21 casos Web](./docs/casos-web.md): 7 suítes com 3 casos completos cada.
- [Gestão no Testomat](./docs/gestao-testomat.md): importação e execução manual.
- [Roteiro do vídeo](./docs/roteiro-video.md): apresentação de 3 a 5 minutos.
- [Validação e evidências reais](./docs/resultado-validacao.md): resultados e limitações.

## Gestão no Testomat

- [Projeto](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/):
  importação conferida de 21 casos manuais, em 7 suítes com 3 casos cada.
- [Plano E2E](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/plans/484bb46d):
  Pedido de usuário autenticado, com 9 casos selecionados.
- [Manual Run 01](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/launch/cdd2c7f3?entry=912735680):
  rodada aberta, 0/9 concluídos e 9 pendentes no registro deste checkpoint.

Esses endereços exigem autenticação e não são links públicos de correção. A criação
da rodada não comprova execução ou aprovação; anexos e resultados ainda pendem.
O compartilhamento para correção e o vídeo permanecem pendentes.

## Execução rápida

Em terminais separados, a partir da raiz:

```bash
cd web-cypress
npm ci
npx cypress run
```

```bash
cd api-newman
npm ci
npm test
```

Node.js 22 ou 24; dependências e lockfiles próprios em cada subpasta. Verificar os
requisitos específicos nos READMEs. O runner de API gera HTML/JUnit e retorna falha
quando o contrato ou o tempo de 2000ms não é atendido.

## Delimitação da entrega

Os casos, plano, código de automação e scripts de geração são artefatos deste
repositório. Não foram criados links de Testomat ou vídeo sem existir uma entrega
real correspondente. A execução manual e o compartilhamento no Testomat exigem
sessão autenticada e não são substituídos por screenshots automatizados.

Não há vídeo explicativo gravado neste repositório. O roteiro não é uma gravação.
O teste Web não foi executado neste ambiente: o download do aplicativo Cypress
retornou HTTP 403. O Newman foi executado duas vezes. Em cada rodada foram 9 requests
e 45 asserções: 36 passaram e 9 falharam no limite de tempo de 2000ms. Os dois
resultados globais FAIL foram preservados, sem elevar o limite nem selecionar uma
execução aprovada. Ver o [comparativo](./docs/resultado-validacao.md).

## Versionamento

O código foi publicado em [Csas10/desafio-qa-web-api](https://github.com/Csas10/desafio-qa-web-api).
O [registro de publicação](./docs/publicacao.md) relaciona os commits locais aos
commits remotos equivalentes, com árvores de arquivos idênticas.

`.gitignore` exclui dependências, credenciais privadas e saídas geradas. Lockfiles
e arquivos de teste permanecem rastreados. Não enviar tokens, dados reais ou
node_modules. Não usar `git remote add origin https://github.com` sem owner/repo:
esse endereço não identifica um repositório. Usar somente a URL real fornecida pelo
GitHub após a criação. Para uma pasta já versionada, não repetir git init nem
reescrever o histórico; conferir `git status` e `git remote -v` antes do push.
