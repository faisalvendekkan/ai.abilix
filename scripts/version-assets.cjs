// Run before publishing after changes to app.js or styles.css.
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const root = path.resolve(__dirname, '..');
const versions = Object.fromEntries(['app.js', 'styles.css'].map(file => [
  file,
  createHash('sha256').update(fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n')).digest('hex').slice(0, 12)
]));
for (const file of fs.readdirSync(root).filter(file => file.endsWith('.html'))) {
  const target = path.join(root, file);
  const original = fs.readFileSync(target, 'utf8');
  const updated = original.replace(/(src|href)="(app\.js|styles\.css)(?:\?[^"\s]*)?"/g,
    (_, attribute, asset) => `${attribute}="${asset}?v=${versions[asset]}"`);
  if (updated !== original) fs.writeFileSync(target, updated);
}
console.log('Asset versions:', versions);
