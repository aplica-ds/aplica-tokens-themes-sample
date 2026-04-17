import path from 'path';
import { pathToFileURL } from 'url';

const packageRoot = process.env.APLICA_THEME_ENGINE_PACKAGE_ROOT;

if (!packageRoot) {
  throw new Error('APLICA_THEME_ENGINE_PACKAGE_ROOT is required for migrated legacy bridge modules.');
}

const mod = await import(pathToFileURL(path.join(packageRoot, 'schemas/foundation-styles.mjs')).href);

export const TYPOGRAPHY_STYLES_SCHEMA_CSS = mod.TYPOGRAPHY_STYLES_SCHEMA_CSS;
export const ELEVATION_LEVELS = mod.ELEVATION_LEVELS;
export const ELEVATION_STYLES_SCHEMA = mod.ELEVATION_STYLES_SCHEMA;
export const validateTypographyStyles = mod.validateTypographyStyles;
export const validateElevationStyles = mod.validateElevationStyles;
export const getTypographyStylesBrands = mod.getTypographyStylesBrands;
export const extractTypographyStyles = mod.extractTypographyStyles;
export const extractElevationStyles = mod.extractElevationStyles;
export const FOUNDATION_STYLES_SCHEMA = mod.FOUNDATION_STYLES_SCHEMA;
export default mod.default;
