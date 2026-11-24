const fs = require('node:fs');
const path = require('node:path');
const newman = require('newman');
const root = path.join(__dirname, '..');
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const output = path.join(root, 'newman', runId);
fs.mkdirSync(output, { recursive: true });
newman.run({
  collection: require(path.join(root, 'collections/dummyjson.postman_collection.json')),
  environment: require(path.join(root, 'environments/dummyjson.postman_environment.json')),
  reporters: ['cli', 'junit', 'htmlextra'],
  reporter: {
    junit: { export: path.join(output, 'junit.xml') },
    htmlextra: { export: path.join(output, 'relatorio.html'), skipSensitiveData: true, showEnvironmentData: false, showGlobalData: false }
  },
  timeoutRequest: 20000,
  timeoutScript: 10000,
  insecure: false,
  delayRequest: 100
}, (error, summary) => {
  // Não exportar summary bruto: ele contém headers, tokens e bodies.
  const safe = { runId, target: 'https://dummyjson.com',
    status: error || summary?.run.failures.length ? 'FAIL' : 'PASS',
    error: error ? error.name : null,
    stats: summary?.run.stats,
    timings: summary?.run.timings,
    assertions: (summary?.run.executions ?? []).map(e => ({
      request: e.item.name,
      statusCode: e.response?.code ?? null,
      responseTimeMs: e.response?.responseTime ?? null,
      tests: (e.assertions ?? []).map(a => ({ name: a.assertion, passed: !a.error, errorType: a.error?.name ?? null }))
    }))
  };
  fs.writeFileSync(path.join(output, 'resumo-seguro.json'), `${JSON.stringify(safe, null, 2)}\n`);
  console.log(`Resultado: ${safe.status}. Relatorios em newman/${runId}/`);
  process.exitCode = safe.status === 'PASS' ? 0 : 1;
});
