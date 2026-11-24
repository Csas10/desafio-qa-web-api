# Roteiro de apresentação de 3 a 5 minutos

Gravar a tela após executar os testes. Não apresentar comandos não executados como
aprovação. Ocultar senhas, tokens e informações pessoais. Este arquivo é um roteiro,
não é um vídeo e não substitui o link de uma gravação real.

## 0:00 a 0:30 — Objetivo

Apresentar Automation Exercise e DummyJSON. Mostrar o monorepo com web-cypress e
api-newman e explicar que os package.json e lockfiles são independentes.

## 0:30 a 1:15 — Casos e plano

No Testomat autenticado, mostrar as 7 suítes, 21 casos, plano ponta a ponta e uma
Manual Run com prints. Explicar um caso negativo e uma falha/bloqueio, se houver.
Não substituir a rodada manual por resultados automatizados.

## 1:15 a 2:30 — Web

Abrir pedido.feature, pedidoSteps.js e cypress.config.cjs. Explicar o cadastro e o
login pela interface, assertions de valores/endereço e limpeza por API. Executar
`npx cypress run` dentro de web-cypress ou mostrar a gravação identificada da execução.
Se o ambiente bloquear o binário ou o site, mostrar o bloqueio real sem afirmar PASS.

## 2:30 a 3:45 — API

Mostrar a coleção e o ambiente com token vazio no arquivo. Explicar GET de referência,
POST login, token em variável e Bearer no auth/me; CRUD simulado não persistente.
Executar `npm test` dentro de api-newman e mostrar status, schema e limite de 2000ms.
Abrir o relatório HTML e o resumo sanitizado. Não exibir token real.

## 3:45 a 4:30 — Fechamento

Mostrar README principal e READMEs das duas automações, commit executado e resultados
reais. Mostrar acesso de correção ao Testomat e falhas/bloqueios existentes. Enviar
somente o link do vídeo efetivamente gravado, com permissões testadas.
