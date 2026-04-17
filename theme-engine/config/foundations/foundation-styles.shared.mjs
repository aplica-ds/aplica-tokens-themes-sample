/**
 * Foundation Styles - Shared Definition
 *
 * ELEVATION: The level list (ELEVATION_LEVELS) is defined in schemas/foundation-styles.mjs (SSOT); here we re-export and define template/default description.
 * Per-foundation level map (x, y, blur, spread per level) is in config/foundations/{name}.config.mjs under styles.elevation (e.g. engine.config.mjs, sample.config.mjs).
 * Each foundation may override the semantic description per level via styles.elevation[level].description (optional string).
 *
 * TYPOGRAPHY: SSOT is schemas/typography-styles.mjs; content per foundation in config/foundations/{name}.config.mjs under styles.typography (importing typography-{name}.json).
 *
 * Usage:
 *   - generate-foundation-styles.mjs: typography = via typography-styles.mjs; elevation = from foundation config (styles.elevation) or template default.
 */

import { ELEVATION_LEVELS } from '../../schemas/foundation-styles.mjs';

// ═══════════════════════════════════════════════════════════════
// TYPOGRAPHY - Canonical model: docs/context/dynamic-themes-reference (see TYPOGRAPHY-SPEC.md)
// (Structure below kept for reference/legacy; generator uses the reference.)
// ═══════════════════════════════════════════════════════════════
export const TYPOGRAPHY_STRUCTURE = {
  heading: ['title_1', 'title_2', 'title_3', 'title_4'],
  body: ['body', 'body_large', 'label', 'informative', 'meta', 'quote', 'lead'],
  label: ['label'],
  code: ['code']
};

export const TYPOGRAPHY_TOKEN_TEMPLATE = {
  fontFamily: '{semantic.typography.fontFamilies.main}',
  fontWeight: '{semantic.typography.fontWeights.content.regular.normal}',
  fontSize: '{semantic.typography.fontSizes.medium}',
  lineHeight: '{semantic.typography.lineHeights.regular.medium}',
  letterSpacing: '{semantic.typography.letterSpacings.regular}',
  paragraphSpacing: '{semantic.dimension.spacing.zero}',
  paragraphIndent: '{semantic.dimension.spacing.zero}',
  textCase: '{semantic.typography.textCase.normal}',
  textDecoration: '{semantic.typography.textDecoration.default}'
};

export const TYPOGRAPHY_DESCRIPTION_DEFAULT = 'Foundation typography style';

// ═══════════════════════════════════════════════════════════════
// ELEVATION STYLES - Levels (SSOT in schemas/foundation-styles.mjs)
// ═══════════════════════════════════════════════════════════════
export { ELEVATION_LEVELS };

// Template for an elevation token (semantic has grayscale/light, no "medium"; use grayscale.translucid for shadow)
export const ELEVATION_TOKEN_TEMPLATE = {
  color: '{semantic.opacity.color.grayscale.translucid}',
  type: 'dropShadow',
  x: '{semantic.dimension.sizing.zero}',
  y: '{semantic.dimension.sizing.small}',
  blur: '{semantic.dimension.sizing.medium}',
  spread: '{semantic.dimension.sizing.zero}'
};

export const ELEVATION_DESCRIPTION_DEFAULT = 'Foundation elevation style';

/**
 * Semantic descriptions per elevation level (defaults). Used by the generator when no
 * styles.elevation[level].description is set in the foundation config.
 * Each foundation can override via config/foundations/{name}.config.mjs → styles.elevation[level].description.
 */
export const ELEVATION_LEVEL_DESCRIPTIONS = {
  level_minus_one: 'Inset shadow. Use for sunken or input-like surfaces.',
  level_zero: 'No elevation. Use for flat surfaces and base layers.',
  level_one: 'Subtle elevation. Use for cards and panels.',
  level_two: 'Low elevation. Use for dropdowns and raised controls.',
  level_three: 'Medium elevation. Use for popovers and tooltips.',
  level_four: 'High elevation. Use for modals and dialogs.',
  level_five: 'Higher elevation. Use for overlays and drawers.',
  level_six: 'Highest elevation. Use for full-screen overlays and toasts.'
};

// ═══════════════════════════════════════════════════════════════
// MAPPING foundation folder name → key in JSON (typography_styles.{key})
// e.g. engine → theme_engine (typography_styles.{key} in generated JSON)
// ═══════════════════════════════════════════════════════════════
export const FOUNDATION_STYLES_KEY = {
  engine: 'theme_engine',
  sample: 'sample'
};

export default {
  typography: {
    structure: TYPOGRAPHY_STRUCTURE,
    tokenTemplate: TYPOGRAPHY_TOKEN_TEMPLATE,
    descriptionDefault: TYPOGRAPHY_DESCRIPTION_DEFAULT
  },
  elevation: {
    levels: ELEVATION_LEVELS,
    tokenTemplate: ELEVATION_TOKEN_TEMPLATE,
    descriptionDefault: ELEVATION_DESCRIPTION_DEFAULT,
    levelDescriptions: ELEVATION_LEVEL_DESCRIPTIONS
  },
  foundationStylesKey: FOUNDATION_STYLES_KEY
};
