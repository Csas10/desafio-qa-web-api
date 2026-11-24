# Rodada manual E2E 01 — resultado observado

Registro consolidado em 24/11/2026. Execução manual assistida pelo navegador Chrome
no Automation Exercise; não é execução de Cypress.

## Identificação

- Projeto Testomat: Desafio QA Web - Automation Exercise; 21 casos em 7 suítes.
- Plano: Pedido de usuário autenticado; 9 casos selecionados.
- Rodada: cdd2c7f3 — Rodada manual E2E 01 - execução assistida.
- Estado: encerrada com Finish Run; **7 Passed, 1 Failed, 1 Skipped/Blocked**.
- Pendentes na rodada: 0. Resultado global: **Failed**.
- Duração registrada pelo Testomat: 8h47m59s, incluindo pausas e retomada do ambiente;
  não representa tempo ativo de teste.

Links reais, com autenticação necessária:

- [Projeto e 21 casos](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/)
- [Plano E2E](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/plans/484bb46d)
- [Rodada encerrada](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/runs/cdd2c7f3)
- [Relatório e evidências](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/report/cdd2c7f3)

## Resultado por caso

| Caso | Resultado no Testomat | Evidência e limite observado |
| --- | --- | --- |
| WEB-CAD-01 — Cadastro | Skipped, motivo Blocked | Conta criada pelo usuário durante uma pausa. A retomada mostrou a sessão autenticada, mas não a confirmação ACCOUNT CREATED. Evidência parcial anexada; cadastro completo não aprovado. |
| WEB-LOG-03 — Logout | Passed | Sessão autenticada seguida de saída para a página de login, com Signup / Login disponível. |
| WEB-LOG-01 — Login válido | Passed | Login efetuado e identificação da conta Csas10 visível. Nenhuma senha consta das evidências. |
| WEB-PRO-01 — Detalhes | Passed | Blue Top na listagem e nos detalhes: unitário 500, categoria Women > Tops, marca Polo, estoque e condição apresentados. |
| WEB-PRO-02 — Quantidade | Passed | Carrinho inicialmente vazio; quantidade 2, inclusão confirmada e linha do produto no carrinho. |
| WEB-CAR-03 — Total | Passed | Uma linha: 500 × 2 = 1000. Conferência do subtotal e do total no checkout. |
| WEB-CHK-02 — Endereços | Passed | Entrega e cobrança conferidas; o responsável confirmou que os dados são inteiramente fictícios e correspondem ao cadastro. |
| WEB-CHK-03 — Pedido | Passed | Comentário, pagamento demonstrativo e uma única confirmação. ORDER PLACED! e Congratulations! Your order has been confirmed! observados. |
| WEB-PAG-02 — Fatura | Failed | Download real concluído: TXT de 65 bytes, com cliente e total 1000. Não apresenta itens/quantidades exigidos pelo terceiro passo do caso. Os dois primeiros passos foram aprovados; o terceiro não. |

Os preços usam a notação **Rs.** apresentada pelo site, sem convertê-los para reais
ou presumir código monetário. A página final contém 1000 no caminho; esse valor
não foi tratado como identificador único de pedido.

## Evidências e cuidados

As capturas do fluxo e o arquivo da fatura foram anexados aos respectivos casos no
Testomat antes da atribuição de resultados. O relatório guarda as notas com esperado
e observado. Uma captura inicial do checkout não enquadrou o total: a limitação foi
registrada, o anexo foi preservado e a conferência usou as capturas corretas do
carrinho e da tabela de checkout, sem atribuir evidência ao recorte incorreto.

A conta foi criada pelo usuário; não foi excluída nem recriada para obter aprovação
artificial. O pedido foi realizado uma única vez, em site de prática e com dados
sintéticos. Não houve transação com cartão real. Foi capturado o formulário de
pagamento vazio, não os campos preenchidos.

A falha da fatura é uma divergência perante o **caso escrito**. O download funcionou;
o TXT retornado não contém itens e quantidades. Deve-se revisar a expectativa contra
o comportamento/contrato do site antes de classificá-la como defeito do produto.
Não foi alterado o teste nem substituído seu resultado nesta rodada.

## Limites da entrega atual

- Os 21 casos foram cadastrados; somente os 9 selecionados receberam classificação
  nesta rodada. Os outros 12 não foram executados aqui. Os estados Not Run nos
  documentos-fonte de casos representam o desenho inicial, não o resultado desta rodada.
- A execução manual não desbloqueia nem substitui a execução Cypress/Cucumber,
  impedida pelo HTTP 403 no download do binário.
- Newman mantém os dois resultados reais: 36/45 asserções aprovadas por execução,
  9 falhas de tempo por execução, com limite estrito inferior a 2000ms preservado.
- O responsável solicitou encerrar a operação e concluir a atualização no GitHub.
  O compartilhamento público do Testomat foi cancelado antes da criação. Não houve
  convite, nova execução, repetição do pedido ou exposição pública do projeto.
- Não foi gravado vídeo. O roteiro disponível não equivale a uma gravação.

Este fechamento documenta o que foi implementado e observado; **não declara
aprovação integral da atividade**.
