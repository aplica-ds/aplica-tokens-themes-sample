/**
 * Typography Scale Schema
 *
 * Single source of truth for:
 * 1. Font size scale keys (ordered list of size names used in fontSizes and lineHeights matrix).
 * 2. Line-height semantics (density keys and default ratios in percentage).
 *
 * Used to validate configs (global.typography.fontSizeScale, global.typography.lineHeightSemantics)
 * and by the typography generator to build the lineHeights matrix.
 *
 * WHEN TO MODIFY:
 * - Add/remove font size steps or line-height densities.
 * - Change default line-height ratios.
 */

/** Default font size scale keys (order matters for generation). */
export const FONT_SIZE_SCALE_KEYS = [
  'nano',
  'micro',
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
  'mega',
  'giga',
  'tera',
  'peta',
  'exa',
  'zetta'
];

/** Default line-height semantics: density key → percentage (100 = 1, 120 = 1.2, etc.). */
export const LINE_HEIGHT_SEMANTICS_DEFAULT = {
  tight: 100,
  close: 120,
  regular: 140,
  wild: 180
};

/** Line-height density keys in order (for validation and iteration). */
export const LINE_HEIGHT_DENSITY_KEYS = Object.keys(LINE_HEIGHT_SEMANTICS_DEFAULT);

export default {
  FONT_SIZE_SCALE_KEYS,
  LINE_HEIGHT_SEMANTICS_DEFAULT,
  LINE_HEIGHT_DENSITY_KEYS
};
