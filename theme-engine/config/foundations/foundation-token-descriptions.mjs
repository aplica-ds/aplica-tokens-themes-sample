/**
 * Foundation token descriptions – SSOT for default $description on data/foundation/{brand}/default.json.
 * Each foundation config can override via config.descriptions (path → string). Used by generate-foundation.mjs.
 */

/** Default descriptions by logical path (e.g. bg.primary, txt.title). */
export const DEFAULT_FOUNDATION_DESCRIPTIONS = {
  'bg.primary': 'Primary background. Use for main page/section backgrounds and hero areas.',
  'bg.weak': 'Weak background. Use for subtle surfaces and cards.',
  'bg.mid': 'Mid neutral background. Use for raised panels and secondary surfaces.',
  'bg.highContrast': 'High contrast background. Use for emphasis and inverse surfaces.',
  'bg.disabled': 'Disabled background. Use for disabled controls and states.',
  'bg.brand.first.primary': 'Primary brand (first) background. Use for hero and CTAs.',
  'bg.brand.first.secondary': 'Secondary brand (first) background. Use for accents.',
  'bg.brand.second.primary': 'Primary brand (second) background.',
  'bg.brand.second.secondary': 'Secondary brand (second) background.',
  'bg.brand.third.primary': 'Primary brand (third) background.',
  'bg.brand.third.secondary': 'Secondary brand (third) background.',
  'bg.brand.ai.primary': 'Primary brand (ai) background.',
  'bg.brand.ai.secondary': 'Secondary brand (ai) background.',
  'bg.neutral.primary': 'Primary neutral background. Use for main canvas.',
  'bg.neutral.secondary': 'Secondary neutral background.',
  'bg.neutral.highContrast': 'High contrast neutral. Use for emphasis.',
  'bg.feedback.info.primary': 'Info feedback background. Use for informational messages and states.',
  'bg.feedback.info.secondary': 'Info feedback secondary.',
  'bg.feedback.success.primary': 'Success feedback background. Use for success states.',
  'bg.feedback.success.secondary': 'Success feedback secondary.',
  'bg.feedback.warning.primary': 'Warning feedback background. Use for warning states.',
  'bg.feedback.warning.secondary': 'Warning feedback secondary.',
  'bg.feedback.danger.primary': 'Danger feedback background. Use for errors and destructive actions.',
  'bg.feedback.danger.secondary': 'Danger feedback secondary.',
  'border.primary': 'Primary border. Use for main dividers and outlines.',
  'border.weak': 'Weak border. Use for subtle dividers.',
  'border.mid': 'Mid neutral border.',
  'border.highContrast': 'High contrast border.',
  'border.disabled': 'Disabled border.',
  'border.neutral.primary': 'Primary neutral border.',
  'border.neutral.secondary': 'Secondary neutral border.',
  'border.neutral.highContrast': 'High contrast neutral border.',
  'txt.title': 'Title text. Use for headings.',
  'txt.body': 'Body text. Use for paragraphs and main content.',
  'txt.highlight': 'Highlight text. Use for emphasis.',
  'txt.muted': 'Muted text. Use for secondary content.',
  'txt.disabled': 'Disabled text.',
  'txt.label': 'Label text. Use for form labels and captions.',
  'txt.info': 'Info feedback text.',
  'txt.success': 'Success feedback text.',
  'txt.warning': 'Warning feedback text.',
  'txt.danger': 'Danger feedback text.'
};

// Opacity (grayscale + light) – legacy structure.opacity === true
const OPACITY_ITEM_NAMES = ['superTransparent', 'semiTranslucid', 'translucid', 'superTranslucid', 'semiOpaque'];
const OPACITY_GRAYSCALE_DESC = 'Opacity (grayscale). Use for overlays and scrims.';
const OPACITY_LIGHT_DESC = 'Opacity (light). Use for overlays and scrims.';
for (const item of OPACITY_ITEM_NAMES) {
  DEFAULT_FOUNDATION_DESCRIPTIONS[`opacity.color.grayscale.${item}`] = OPACITY_GRAYSCALE_DESC;
  DEFAULT_FOUNDATION_DESCRIPTIONS[`opacity.color.light.${item}`] = OPACITY_LIGHT_DESC;
}

// Opacity (config-driven: structure.opacity = { grayscale: ['dimmer', 'paywall'] }, etc.)
DEFAULT_FOUNDATION_DESCRIPTIONS['opacity.grayscale.dimmer'] = 'Opacity (grayscale). Use for overlays and scrims.';
DEFAULT_FOUNDATION_DESCRIPTIONS['opacity.grayscale.paywall'] = 'Opacity (grayscale). Use for overlays and scrims.';

// Sizing
const SIZING_ITEM_NAMES = ['zero', 'pico', 'nano', 'micro', 'extraSmall', 'small', 'medium', 'large', 'extraLarge', 'mega', 'giga', 'tera', 'peta'];
const SIZING_DESC = 'Sizing dimension. Use for width, height and layout scale.';
for (const item of SIZING_ITEM_NAMES) {
  DEFAULT_FOUNDATION_DESCRIPTIONS[`sizing.${item}`] = SIZING_DESC;
}

// Spacing
const SPACING_ITEM_NAMES = ['zero', 'micro', 'extraSmall', 'small', 'medium', 'large', 'extraLarge', 'mega', 'giga', 'tera', 'peta'];
const SPACING_DESC = 'Spacing dimension. Use for margin and padding.';
for (const item of SPACING_ITEM_NAMES) {
  DEFAULT_FOUNDATION_DESCRIPTIONS[`spacing.${item}`] = SPACING_DESC;
}

/** Returns default description for a foundation token path, or undefined. Supports pattern fallbacks for foundation sections overwritten by sync. */
export function getDefaultFoundationDescription(path) {
  if (DEFAULT_FOUNDATION_DESCRIPTIONS[path]) return DEFAULT_FOUNDATION_DESCRIPTIONS[path];
  if (path.startsWith('bg.feedback.')) return 'Feedback background. Use for feedback states and messages.';
  if (path.startsWith('bg.product.')) return 'Product/career background. Use for product-specific surfaces.';
  if (path.startsWith('border.feedback.')) return 'Feedback border. Use for feedback outlines.';
  if (path.startsWith('border.product.')) return 'Product/career border. Use for product-specific outlines.';
  if (path.startsWith('txt.on.feedback.')) return 'Feedback text on background. Use for feedback content.';
  if (path.startsWith('txt.on.product.')) return 'Product/career text on background. Use for product content.';
  if (path.startsWith('txt.') && path.includes('_')) return 'Semantic text color. Use for consistent typography.';
  if (path.startsWith('opacity.')) return 'Opacity. Use for overlays and scrims.';
  return undefined;
}
