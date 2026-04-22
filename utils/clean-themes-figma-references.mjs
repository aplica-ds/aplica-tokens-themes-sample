/**
 * Clears Figma-specific reference maps in Tokens Studio `$themes.json` so the
 * file matches the sanitized shape of `data/$themes.engine.json.template`
 * (empty objects, no style/variable ID payloads).
 *
 * Keys reset on each theme object when present:
 * - $figmaStyleReferences
 * - figmaVariableReferences
 * - $figmaVariableReferences
 *
 * Usage:
 *   node utils/clean-themes-figma-references.mjs [path/to/$themes.json]
 * Default path: data/$themes.json (repo root relative to this script).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const FIGMA_REFERENCE_KEYS = [
  '$figmaStyleReferences',
  'figmaVariableReferences',
  '$figmaVariableReferences',
];

/**
 * @param {unknown} entry
 */
function cleanThemeEntry(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return;
  for (const key of FIGMA_REFERENCE_KEYS) {
    if (Object.prototype.hasOwnProperty.call(entry, key)) {
      entry[key] = {};
    }
  }
}

function main() {
  const rel = process.argv[2] ?? path.join('data', '$themes.json');
  const target = path.isAbsolute(rel) ? rel : path.resolve(REPO_ROOT, rel);

  const raw = fs.readFileSync(target, 'utf8');
  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    console.error('Expected a JSON array at the document root.');
    process.exit(1);
  }

  for (const item of data) {
    cleanThemeEntry(item);
  }

  const out = `${JSON.stringify(data, null, 2)}\n`;
  fs.writeFileSync(target, out, 'utf8');

  console.log(
    `Cleaned Figma reference maps: ${path.relative(REPO_ROOT, target)} (${data.length} theme entries).`,
  );
}

main();
