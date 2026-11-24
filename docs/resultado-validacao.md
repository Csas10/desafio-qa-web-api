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

## Web Cypress e Cucumber

Sintaxe da configuração/steps: PASS. Carregamento dos módulos da configuração: PASS.
Bundle dos steps com esbuild: PASS. Pacotes e lockfile instalados com versões fixadas.
Isso não comprova execução de navegador, seletores nem sucesso de compra.

Execução E2E: **BLOCKED**. Download oficial do aplicativo Cypress 16.3.0 retornou
HTTP 403 antes de iniciar o navegador. A instalação dos pacotes JavaScript sem o
aplicativo foi usada somente para análise estática; não é uma execução alternativa
de Cypress. Nenhum cadastro/pagamento Web foi realizado por esse cenário aqui.

## Gestão manual e apresentação

21 casos documentados: PASS na conferência de contagem e unicidade; 7 suítes e 3 casos
por suíte. Rodada manual: **NOT RUN**. O CSV não é evidência de testes executados.
Testomat apresentou tela de login; projeto, importação, plano, execução e
compartilhamento ainda não foram realizados na conta. Não existe link de Testomat
ou de vídeo nesta entrega de código. Vídeo narrado: **não gravado**.

Portanto, o material não deve ser declarado integralmente aprovado: há falhas de
tempo medidas e requisitos de execução/gestão ainda não concluídos.

## Publicação

O repositório GitHub Csas10/desafio-qa-web-api foi criado, mas o primeiro envio de
conteúdo pelo conector retornou HTTP 403, Resource not accessible by integration.
Nenhum arquivo foi publicado. O código e as evidências estão preservados no pacote
local, sem apresentar o repositório vazio como entrega concluída. É necessário liberar
acesso de escrita da integração ao novo repositório antes de continuar o envio.
