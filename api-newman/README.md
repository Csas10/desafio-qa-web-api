# Automação de API com Postman e Newman

Coleção Postman v2.1 para https://dummyjson.com, com 9 requests em três pastas:
Auth (referência, login e auth/me), Produtos (POST/PUT/DELETE) e Usuários
(POST/PUT/DELETE). Todas as chamadas validam status, tempo <2000ms, Content-Type,
campos/tipos por JSON Schema e conteúdo relevante.

## Instalação e execução

Node.js 22 ou 24 e npm. A partir da raiz do monorepo:

```bash
cd api-newman
npm ci
npm run check
npm test
```

Não exige instalação global. `npm test` executa Newman pela API Node e gera relatório
HTML sem bodies/headers, JUnit e resumo seguro numa pasta única por execução.
Retorna código 1 se houver falhas de teste ou erro de execução, sem apagar os relatórios.

Execução CLI equivalente (dentro de api-newman):

```bash
npx newman run collections/dummyjson.postman_collection.json -e environments/dummyjson.postman_environment.json -r cli,htmlextra --reporter-htmlextra-skipSensitiveData
```

## Uso no Postman

Importar os JSONs de collections e environments e selecionar o ambiente. Executar a
coleção inteira na ordem. A pasta Auth limpa token/referências antigos; consulta o
usuário 1 independentemente, autentica a conta pública de demonstração emilys e
salva o token somente após validar a identidade. auth/me recebe Bearer {{token}} e
compara id, username e email. Rodar auth/me isoladamente sem login não é o fluxo válido.

## Limitações da API simulada

POST adiciona produto/usuário apenas na resposta; PUT e DELETE também são simulados.
Por isso os testes usam produtos/1, users/2 para atualizar e users/1 para excluir,
sem encadear o ID de uma criação não persistida. Usuário criado não é uma nova conta
persistente para login. Os status previstos são 201 para criações e 200 nos demais.

Schemas permitem campos adicionais para não falhar quando auth/me retorna mais
propriedades. Não usar all.keys com apenas sete campos. Latência >=2000ms é falha
mesmo se o HTTP for 200. Não confundir limite por chamada com teste de carga.

## Manutenção e segurança

`scripts/build-collection.cjs` é a fonte legível. Após alterá-lo, executar `npm run
generate` e versionar os JSONs gerados. `npm run check` confere scripts e cobertura
estrutural; não substitui Newman contra o serviço real. O ambiente versionado contém
somente credenciais públicas de exemplo e token vazio.

Não exportar ambiente com token preenchido nem salvar o summary bruto do Newman.
O runner não faz retry e não usa insecure/SSL bypass. Relatórios locais devem ser
revisados antes de compartilhar; falhas de contrato/tempo são preservadas.
