# Gestão e correção no Testomat

## Casos e importação

O arquivo [casos-web.md](./casos-web.md) contém os 21 casos completos. O arquivo
`casos-web.json` é sua fonte estruturada; não é um formato nativo de importação Testomat.
O gerador produz também `casos-testomat.csv`, com as colunas do formato customizado documentado
com Title, Folder, Description e demais colunas. A importação ainda exige validação na
conta autenticada: não há afirmação de importação concluída.

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

Os casos e o plano estão documentados. Criação do projeto, importação, Manual Runs e
compartilhamento no Testomat dependem de autenticação. Nenhum link de projeto ou execução
foi inserido porque essas ações ainda não foram concluídas.

Referências: https://docs.testomat.io/project/import-export/import/import-tests-from-csv-xlsx/
e https://docs.testomat.io/project/runs/reports/
