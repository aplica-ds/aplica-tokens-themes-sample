import path from 'path';
import { pathToFileURL } from 'url';

const packageRoot = process.env.APLICA_THEME_ENGINE_PACKAGE_ROOT;

if (!packageRoot) {
  throw new Error('APLICA_THEME_ENGINE_PACKAGE_ROOT is required for migrated legacy bridge modules.');
}

const mod = await import(pathToFileURL(path.join(packageRoot, 'dynamic-themes/scripts/dimension-scale.mjs')).href);

export const computeScale = mod.computeScale;
export default mod.default;
