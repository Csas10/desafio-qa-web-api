// Fonte versionada: gera a coleção v2.1 e o ambiente sem tokens.
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const field = (type, rest = {}) => ({ type, ...rest });
const product = { id: field('integer', { minimum: 1 }), title: field('string'), price: field('number'), category: field('string') };
const user = { id: field('integer', { minimum: 1 }), firstName: field('string'), lastName: field('string'), email: field('string') };
const profile = { ...user, username: field('string'), gender: field('string'), image: field('string') };
const schema = (properties) => ({ type: 'object', required: Object.keys(properties), properties, additionalProperties: true });
function request(id, title, method, url, expected, properties, assertions, body, before = [], after = [], auth) {
  const tests = [
    `pm.test('HTTP ${expected}', () => pm.response.to.have.status(${expected}));`,
    "pm.test('Tempo menor que 2000ms', () => pm.expect(pm.response.responseTime).to.be.below(2000));",
    "pm.test('Content-Type JSON', () => pm.expect(pm.response.headers.get('Content-Type')).to.match(/application\\/json/i));",
    `pm.test('Schema com campos e tipos obrigatorios', () => pm.response.to.have.jsonSchema(${JSON.stringify(schema(properties))}));`,
    "pm.test('Conteudo esperado', () => { const j = pm.response.json();",
    ...assertions,
    '});',
    ...after
  ];
  const item = { name: `${id} ${title}`, request: { method, header: [], url: `{{baseUrl}}${url}` }, event: [] };
  if (body) {
    item.request.header.push({ key: 'Content-Type', value: 'application/json' });
    item.request.body = { mode: 'raw', raw: JSON.stringify(body, null, 2), options: { raw: { language: 'json' } } };
  }
  if (auth) item.request.auth = { type: 'bearer', bearer: [{ key: 'token', value: '{{token}}', type: 'string' }] };
  if (before.length) item.event.push({ listen: 'prerequest', script: { type: 'text/javascript', exec: before } });
  item.event.push({ listen: 'test', script: { type: 'text/javascript', exec: tests } });
  return item;
}
const identity = [
  "pm.expect(j.id).to.eql(Number(pm.environment.get('expectedUserId')));",
  "pm.expect(j.username).to.eql(pm.environment.get('username'));",
  "pm.expect(j.email).to.eql(pm.environment.get('expectedEmail'));"
];
const collection = {
  info: { name: 'QA Final — DummyJSON', schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    description: 'CRUD simulado não persistente; ids existentes usados no PUT/DELETE. Token capturado apenas após validação de identidade. Todas as chamadas exigem tempo <2000ms.' },
  item: [
    { name: 'Auth — executar na ordem', item: [
      request('API-AUT-01', 'Referencia independente do usuario', 'GET', '/users/1', 200, profile,
        ["pm.expect(j.id).to.eql(1);", "pm.expect(j.username).to.eql(pm.environment.get('username'));"], undefined,
        ["['token','expectedUserId','expectedEmail'].forEach(k => pm.environment.unset(k));"],
        ["if (pm.response.code === 200) { const j = pm.response.json(); if (j.id === 1 && j.username === pm.environment.get('username') && typeof j.email === 'string') { pm.environment.set('expectedUserId', j.id); pm.environment.set('expectedEmail', j.email); } }"]),
      request('API-AUT-02', 'Login e captura de token', 'POST', '/auth/login', 200,
        { ...profile, accessToken: field('string', { minLength: 1 }), refreshToken: field('string', { minLength: 1 }) },
        identity, { username: '{{username}}', password: '{{password}}', expiresInMins: 10 },
        ["pm.environment.unset('token');", "if (!pm.environment.get('expectedEmail')) throw new Error('Execute API-AUT-01 antes do login');"],
        ["if (pm.response.code === 200) { const j = pm.response.json(); if (j.id === Number(pm.environment.get('expectedUserId')) && j.username === pm.environment.get('username') && j.email === pm.environment.get('expectedEmail') && typeof j.accessToken === 'string' && j.accessToken.length > 0) pm.environment.set('token', j.accessToken); }"]),
      request('API-AUT-03', 'Bearer e identidade em auth/me', 'GET', '/auth/me', 200, profile, identity, undefined,
        ["if (!pm.environment.get('token')) throw new Error('Token ausente: execute a pasta Auth desde o inicio');"], [], true)
    ] },
    { name: 'Produtos — operacoes simuladas independentes', item: [
      request('API-PRO-01', 'Adicionar produto', 'POST', '/products/add', 201, product,
        ["pm.expect(j.id).to.be.above(0);", "pm.expect(j.title).to.eql('Produto QA Final');", "pm.expect(j.price).to.eql(19.9);", "pm.expect(j.category).to.eql('beauty');"],
        { title: 'Produto QA Final', price: 19.9, category: 'beauty' }),
      request('API-PRO-02', 'Atualizar produto existente', 'PUT', '/products/1', 200, product,
        ["pm.expect(j.id).to.eql(1);", "pm.expect(j.title).to.eql('Produto QA Atualizado');", "pm.expect(j.price).to.eql(29.9);"],
        { title: 'Produto QA Atualizado', price: 29.9 }),
      request('API-PRO-03', 'Remover produto existente', 'DELETE', '/products/1', 200,
        { ...product, isDeleted: field('boolean'), deletedOn: field('string') },
        ["pm.expect(j.id).to.eql(1);", "pm.expect(j.isDeleted).to.eql(true);", "pm.expect(Number.isNaN(Date.parse(j.deletedOn))).to.eql(false);"])
    ] },
    { name: 'Usuarios — operacoes simuladas independentes', item: [
      request('API-USR-01', 'Adicionar usuario', 'POST', '/users/add', 201, user,
        ["pm.expect(j.id).to.be.above(0);", "pm.expect(j.firstName).to.eql('QA');", "pm.expect(j.lastName).to.eql('Final');", "pm.expect(j.email).to.eql('qa-final@example.com');"],
        { firstName: 'QA', lastName: 'Final', email: 'qa-final@example.com', age: 30 }),
      request('API-USR-02', 'Atualizar usuario 2', 'PUT', '/users/2', 200, user,
        ["pm.expect(j.id).to.eql(2);", "pm.expect(j.lastName).to.eql('QA Atualizado');"], { lastName: 'QA Atualizado' }),
      request('API-USR-03', 'Remover usuario 1', 'DELETE', '/users/1', 200,
        { ...user, isDeleted: field('boolean'), deletedOn: field('string') },
        ["pm.expect(j.id).to.eql(1);", "pm.expect(j.isDeleted).to.eql(true);", "pm.expect(Number.isNaN(Date.parse(j.deletedOn))).to.eql(false);"])
    ] }
  ]
};
const environment = { name: 'DummyJSON — dados publicos sinteticos', _postman_variable_scope: 'environment',
  values: Object.entries({ baseUrl: 'https://dummyjson.com', username: 'emilys', password: 'emilyspass', token: '', expectedUserId: '', expectedEmail: '' })
    .map(([key, value]) => ({ key, value, enabled: true, type: key === 'token' ? 'secret' : 'default' })) };
for (const [dir, file, data] of [['collections', 'dummyjson.postman_collection.json', collection], ['environments', 'dummyjson.postman_environment.json', environment]]) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
  fs.writeFileSync(path.join(root, dir, file), `${JSON.stringify(data, null, 2)}\n`);
}
console.log('Colecao e ambiente gerados. 9 requests; token exportado vazio.');
