# Automação Web com Cypress e Cucumber

Fluxo de pedido no https://automationexercise.com/. O cenário em português cria uma
conta sintética descartável pela interface, desloga, faz login, busca Blue Top,
adiciona 2 unidades, confere carrinho e endereços e conclui pagamento fictício.

O cadastro e o login são exercitados pela interface. A conta sintética criada por
esta execução é removida por API ao final, inclusive em falhas do cenário.

## Instalação

Node.js 22 ou 24 e npm. A versão do Cypress fixada no lockfile exige uma versão
suportada de Node. Em Linux, instalar as bibliotecas de sistema exigidas pelo Cypress
conforme a documentação oficial: https://docs.cypress.io/app/get-started/install-cypress

Na raiz do monorepo:

```bash
cd web-cypress
npm ci
npm run verify
```

`npm install` também instala as dependências; `npm ci` reproduz o lockfile. Não é
necessário criar conta manual ou fornecer senha: o teste gera uma fixture exclusiva.
Não utilizar dados pessoais nem cartão real.

## Execução

```bash
npx cypress run
```

Alternativas:

```bash
npm test
npm run test:open
npm run check
```

`check` valida sintaxe, não executa o navegador. `npm test` executa o Cypress Electron.
Se faltar o binário, `npx cypress install` é o procedimento normal numa máquina com
download autorizado. Não desativar TLS nem contornar bloqueios da rede.

## Arquivos

- `cypress/e2e/features/pedido.feature`: cenário Gherkin com `# language: pt`.
- `cypress/e2e/step_definitions/pedidoSteps.js`: passos completos e limpeza.
- `cypress.config.cjs`: bundler, preprocessor, testIsolation e relatórios.
- `.cypress-cucumber-preprocessorrc.json`: busca explícita dos step definitions.

O bundler esbuild é configurado em setupNodeEvents; apenas instalar o preprocessor
não basta. Cada validação verifica resultado concreto, sem esperas fixas ou bypass
global de exceções. Retries estão desativados para preservar a primeira falha.

## Evidências

Cypress gera screenshots de marcos e de falhas, vídeo e JUnit/Cucumber na execução.
As saídas geradas são ignoradas pelo Git. Só compartilhar após revisão dos dados.
O vídeo do Cypress é evidência de automação e não substitui a apresentação narrada.

Execução E2E neste ambiente: bloqueada antes de iniciar, pois o download oficial do
Cypress 16.3.0 retornou HTTP 403. Os pacotes JavaScript foram instalados sem baixar
o aplicativo para permitir a validação estática. Não há resultado E2E PASS alegado.
