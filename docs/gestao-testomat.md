# Gestão e correção no Testomat

## Casos e importação

O arquivo [casos-web.md](./casos-web.md) contém os 21 casos completos. O arquivo
`casos-web.json` é sua fonte estruturada; não é um formato nativo de importação Testomat.
O gerador produz também `casos-testomat.csv`, com as colunas do formato customizado documentado
com Title, Folder, Description e demais colunas. A importação foi concluída e
conferida na conta autenticada: 21 testes manuais, 7 suítes e 3 casos por suíte.
Pré-condições, passos e resultados esperados foram preservados; o caso WEB-HOM-01
foi aberto para conferir o conteúdo renderizado.

Na tela Tests, usar o menu de importação de outro TMS/CSV-XLSX, selecionar Testomat.io
e o CSV. Conferir a prévia: exatamente 7 suítes e 3 casos em cada, descrição com
pré-condições, passos e resultado esperado. Se o importador da conta diferir, cadastrar
os casos a partir do Markdown sem alterar seus critérios. ID interno fica vazio para
que o Testomat o gere; WEB-HOM-01 e outros IDs externos estão no título e nas tags.

Criar o Test Plan descrito em [plano-testes.md](./plano-testes.md) e uma Manual Run para
esse plano. Criar também uma rodada com todos os 21 casos. Rodadas e evidências reais
não são geradas pelo arquivo de importação. O campo Status da importação identifica
o tipo manual, não o resultado Passed/Failed.

## Compartilhamento

Settings/Team controla equipe/permissões, mas não é necessariamente onde se gera o link
do relatório. Na interface atual, conferir Runs e o relatório estendido para compartilhar
o resultado; opções dependem das permissões da conta. Escolher acesso restrito/protegido
quando disponível e verificar a sessão de correção. Compartilhar um relatório não
significa automaticamente conceder acesso completo ao projeto.

Não ativar exposição pública nem enviar convite a pessoa não confirmada. O endereço do
tutor indicado no documento da atividade deve ser reconfirmado antes do envio. Tokens,
senhas e dados pessoais não devem aparecer nas evidências nem no repositório.

## Situação

Projeto criado: [Desafio QA Web - Automation Exercise](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/).
Formato Classical para descrições manuais, sem dados de demonstração. Isso não
altera os cenários Gherkin do módulo Cypress/Cucumber.

Plano salvo: [Pedido de usuário autenticado](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/plans/484bb46d),
com os 9 casos e a ordem lógica documentados no plano local. Rodada encerrada com
Finish Run: [Manual Run 01](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/runs/cdd2c7f3).
Resultado: **7 Passed, 1 Failed, 1 Skipped/Blocked e 0 Pending**; resultado global
Failed. Nove classificações não equivalem a nove casos aprovados.

O [relatório autenticado](https://app.testomat.io/projects/desafio-qa-web-automation-exercise/report/cdd2c7f3)
contém os resultados e anexos reais. O pedido foi confirmado com dados fictícios.
O cadastro ficou bloqueado por falta da evidência da confirmação, e a fatura TXT
falhou perante o critério escrito de conferir itens e quantidades. O
[registro detalhado](./rodada-manual-e2e-01.md) preserva essas limitações.

Os outros 12 casos permanecem fora desta rodada, sem resultado de execução aqui.
Não foi iniciada uma rodada completa dos 21 casos. Os endereços acima exigem
autenticação e não são links públicos de correção. A opção de relatório protegido
foi consultada, mas o compartilhamento foi cancelado antes da criação, conforme
orientação do responsável para encerrar a operação. Não se alterou a exposição do
projeto nem se enviou convite. O vídeo não foi gravado.

Referências: https://docs.testomat.io/project/import-export/import/import-tests-from-csv-xlsx/
e https://docs.testomat.io/project/runs/reports/
