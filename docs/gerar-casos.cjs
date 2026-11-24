const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const cases = require('./casos-web.json');
assert.equal(cases.length, 21);
assert.equal(new Set(cases.map(c => c.id)).size, 21);
const suites = [...new Set(cases.map(c => c.suite))];
assert.equal(suites.length, 7);
for (const suite of suites) assert.equal(cases.filter(c => c.suite === suite).length, 3);
let markdown = '# Casos manuais Web\n\n21 casos completos, 7 suítes. Todos Not Run; nenhuma evidência manual alegada.\n';
for (const suite of suites) {
  markdown += `\n## ${suite}\n`;
  for (const c of cases.filter(c => c.suite === suite)) {
    markdown += `\n### ${c.id} — ${c.titulo}\n\nPré-condições: ${c.pre}\n\n`;
    markdown += c.passos.map((step, i) => `${i + 1}. ${step}`).join('\n');
    markdown += `\n\nEsperado: ${c.esperado}\n\nEvidência a coletar: ${c.evidencia}\n\nStatus: ${c.status}.\n`;
  }
}
fs.writeFileSync(path.join(__dirname, 'casos-web.md'), markdown);
const headers = ['ID','Title','Status','Folder','Emoji','Priority','Tags','Owner','Description','Labels','Issues'];
const cell = value => `"${String(value).replaceAll('"','""')}"`;
const rows = cases.map(c => ['', `${c.id} ${c.titulo}`, 'manual', `/${c.suite}`, '', 'normal', c.id, '',
  `Pré-condições: ${c.pre}\n\nPassos:\n${c.passos.map((p,i) => `${i+1}. ${p}`).join('\n')}\n\nResultado esperado: ${c.esperado}\n\nEvidência: ${c.evidencia}`, '', '']);
fs.writeFileSync(path.join(__dirname,'casos-testomat.csv'), '\ufeff' + [headers, ...rows].map(row => row.map(cell).join(',')).join('\r\n') + '\r\n');
console.log('PASS: 21 casos, 7 suites, 3 por suite. Markdown e CSV completos gerados.');
