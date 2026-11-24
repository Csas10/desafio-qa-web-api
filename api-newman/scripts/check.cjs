const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const base = path.join(__dirname, '..');
const collection = JSON.parse(fs.readFileSync(path.join(base, 'collections/dummyjson.postman_collection.json')));
const environment = JSON.parse(fs.readFileSync(path.join(base, 'environments/dummyjson.postman_environment.json')));
const requests = collection.item.flatMap(folder => folder.item);
assert.equal(requests.length, 9);
assert.equal(environment.values.find(v => v.key === 'token').value, '');
assert.ok(collection.info.schema.includes('v2.1.0'));
for (const request of requests) {
  const tests = request.event.find(e => e.listen === 'test').script.exec.join('\n');
  assert.ok(tests.includes('below(2000)'));
  assert.ok(tests.includes('to.have.status('));
  assert.ok(tests.includes('to.have.jsonSchema('));
  for (const event of request.event) new vm.Script(event.script.exec.join('\n'));
}
assert.equal(requests[2].request.auth.bearer[0].value, '{{token}}');
console.log('PASS: 9 requests, scripts validos, HTTP/tempo/schema em todos; Bearer variavel e token vazio.');
