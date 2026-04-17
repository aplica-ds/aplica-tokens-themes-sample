import path from 'path';
import { pathToFileURL } from 'url';

const packageRoot = process.env.APLICA_THEME_ENGINE_PACKAGE_ROOT;

if (!packageRoot) {
  throw new Error('APLICA_THEME_ENGINE_PACKAGE_ROOT is required for migrated legacy bridge modules.');
}

const mod = await import(pathToFileURL(path.join(packageRoot, 'schemas/typography-styles.mjs')).href);

export const TYPOGRAPHY_STYLES_SCHEMA = mod.TYPOGRAPHY_STYLES_SCHEMA;
export const loadTypographyStylesForFoundation = mod.loadTypographyStylesForFoundation;
export default mod.default;
