const forbidden = ['node_modules', '.env', 'dist'];

const changed = require('child_process')
  .execSync('git diff --cached --name-only')
  .toString()
  .split('\n');

const invalid = changed.filter(file =>
  forbidden.some(f => file.startsWith(f))
);

if (invalid.length > 0) {
  console.error(':( Arquivos proibidos no commit:\n', invalid.join('\n'));
  process.exit(1);
}