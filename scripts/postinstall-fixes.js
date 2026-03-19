/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function patchFile({ filePath, apply }) {
  if (!fs.existsSync(filePath)) return false;
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = apply(original);
  if (updated === original) return false;
  fs.writeFileSync(filePath, updated, 'utf8');
  return true;
}

function main() {
  // babel-loader brings its own schema-utils@2.x which relies on ajv-keywords@3.x.
  // With the current ajv config, ajv._formats is missing and ajv-keywords crashes.
  // Enabling Ajv's formats option prevents the crash.
  const target = path.join(
    __dirname,
    '..',
    'node_modules',
    'babel-loader',
    'node_modules',
    'schema-utils',
    'dist',
    'validate.js'
  );

  patchFile({
    filePath: target,
    apply: (content) => {
      if (content.includes('formats: true')) return content;

      // Insert `formats: true` after `allErrors: true,`
      return content.replace(
        /const ajv = new Ajv\(\{\s*allErrors:\s*true,\s*/,
        (match) => `${match}formats: true,\n  `
      );
    },
  });
}

main();

