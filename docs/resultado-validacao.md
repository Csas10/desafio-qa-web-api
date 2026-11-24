# Resultado das verificações

Execução de API: 24/11/2026 01:47:58 UTC, equivalente a 23/11/2026 22:47:58 em
America/Sao_Paulo. Ambiente: Linux, Node.js 24.22.3 e npm 11.19.1.

## Newman contra DummyJSON

Resultado global: **FAIL**. Uma iteração, 9 requests executados, 45 asserções,
36 aprovadas e 9 falhas. As nove falhas são de tempo; o limite permanece <2000ms.
Os códigos HTTP, Content-Type JSON, schemas e conteúdo passaram em todos os casos.
A captura do token e a correspondência de id/username/email em auth/me foram
exercitadas contra o serviço real. Nenhum token foi exportado com as evidências.

| Request | HTTP | Tempo ms | Tempo <2000ms |
| --- | --- | --- | --- |
| API-AUT-01 Referência | 200 | 6504 | FAIL |
| API-AUT-02 Login | 200 | 6173 | FAIL |
| API-AUT-03 auth/me | 200 | 6701 | FAIL |
| API-PRO-01 Adicionar | 201 | 6194 | FAIL |
| API-PRO-02 Atualizar | 200 | 6648 | FAIL |
| API-PRO-03 Remover | 200 | 6235 | FAIL |
| API-USR-01 Adicionar | 201 | 6204 | FAIL |
| API-USR-02 Atualizar | 200 | 6052 | FAIL |
| API-USR-03 Remover | 200 | 6305 | FAIL |

As medições são do percurso de rede deste ambiente; não isolam a latência do servidor.
O código de saída 1 foi preservado. Não houve retry para buscar resultado aprovado.
Evidências: [resumo seguro](../evidencias/newman-resumo.json) e
[relatório HTML sanitizado](../evidencias/newman-relatorio.html).

### Segunda execução comparativa

Em 23/11/2026 23:12:33 (America/Sao_Paulo), uma segunda execução foi feita no mesmo
ambiente, sem alterar coleção, limite de tempo, proxy ou credenciais. Não houve
retry automático. Os relatórios anteriores não foram sobrescritos.

| Request | Execução 01 (ms) | Execução 02 (ms) | Tempo <2000ms na execução 02 |
| --- | --- | --- | --- |
| API-AUT-01 Referência | 6504 | 8833 | FAIL |
| API-AUT-02 Login | 6173 | 6246 | FAIL |
| API-AUT-03 auth/me | 6701 | 6083 | FAIL |
| API-PRO-01 Adicionar | 6194 | 6160 | FAIL |
| API-PRO-02 Atualizar | 6648 | 6679 | FAIL |
| API-PRO-03 Remover | 6235 | 6233 | FAIL |
| API-USR-01 Adicionar | 6204 | 6021 | FAIL |
| API-USR-02 Atualizar | 6052 | 5250 | FAIL |
| API-USR-03 Remover | 6305 | 6141 | FAIL |

Resultado da segunda rodada: **FAIL**, 9 requests, 45 asserções, 36 aprovadas e 9
falhas exclusivamente de tempo; saída 1. HTTP, Content-Type, schema e conteúdo
passaram novamente. Isso não demonstra a causa da latência nem aprova o requisito.
Evidências: [resumo 02](../evidencias/newman-execucao-02-resumo.json) e
[HTML sanitizado 02](../evidencias/newman-execucao-02-relatorio.html).

## Web Cypress e Cucumber

Sintaxe da configuração/steps: PASS. Carregamento dos módulos da configuração: PASS.
Bundle dos steps com esbuild: PASS. Pacotes e lockfile instalados com versões fixadas.
Isso não comprova execução de navegador, seletores nem sucesso de compra.

Execução E2E: **BLOCKED**. Download oficial do aplicativo Cypress 16.3.0 retornou
HTTP 403 antes de iniciar o navegador. A instalação dos pacotes JavaScript sem o
aplicativo foi usada somente para análise estática; não é uma execução alternativa
de Cypress. Nenhum cadastro/pagamento Web foi realizado por esse cenário aqui.
Uma segunda tentativa pelo mesmo instalador oficial também retornou HTTP 403 para
Cypress 16.3.0, Linux x64. Nenhum espelho ou rota alternativa foi usado.

## Gestão manual e apresentação

21 casos documentados: PASS na conferência de contagem e unicidade; 7 suítes e 3 casos
por suíte. Login no Testomat via GitHub concluído. Projeto criado sem dados de demo,
21 casos importados e contagens conferidas; conteúdo do WEB-HOM-01 inspecionado.
Plano E2E 484bb46d salvo com 9 casos. Manual Run cdd2c7f3 criada e aberta, com
0/9 concluídos e 9 Pending; nenhum teste foi marcado Passed, Failed ou Skipped.
Os links reais de acesso autenticado estão no [guia de gestão](./gestao-testomat.md).

Execução dos casos e anexação de evidências: **NOT RUN** neste checkpoint. A página
Signup / Login do Automation Exercise foi aberta para iniciar o cadastro de teste,
mas isso não cumpre sozinho um caso. Compartilhamento público para correção:
**pendente**. Vídeo narrado: **não gravado**. O CSV e a criação da rodada não são
evidências de testes executados.

Portanto, o material não deve ser declarado integralmente aprovado: há falhas de
tempo medidas e requisitos de execução/gestão ainda não concluídos.

## Publicação

O bloqueio inicial HTTP 403 foi resolvido após o responsável adicionar somente
Csas10/desafio-qa-web-api à instalação já existente, preservando os 7 repositórios
anteriormente autorizados. A escrita foi comprovada com um arquivo real, seguida
da publicação de 30 arquivos de código, documentação e evidências. As três árvores
remotas foram comparadas com as árvores dos commits locais e são idênticas.
O [registro de publicação](./publicacao.md) documenta a correspondência de commits.
Publicação de código não equivale a aprovação dos testes ou conclusão do Testomat.
