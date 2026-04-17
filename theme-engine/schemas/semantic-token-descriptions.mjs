/**
 * Semantic token descriptions – SSOT for $description on semantic layer tokens.
 * Used by sync-architecture.mjs when generating data/semantic/default.json.
 * Aligns with: canonical-taxonomy-and-naming-contract.md, token-usage-for-components-and-figma.md,
 * Technical Reference (#05). Semantic = exposed layer; purpose (brand, feedback, product, contrast, text).
 */

const PROP_LABELS = {
  background: 'Background',
  txtOn: 'Text on',
  border: 'Border'
};

const FEEDBACK_LABELS = {
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger'
};

const PRODUCT_LABELS = {
  promo: 'Promo',
  cashback: 'Cashback',
  premium: 'Premium'
};

const BRAND_LABELS = {
  first: 'Primary brand',
  second: 'Secondary brand',
  third: 'Tertiary brand',
  fourth: 'Fourth brand'
};

const LEVEL_LABELS = {
  lowest: 'lowest intensity',
  default: 'default intensity',
  highest: 'highest intensity'
};

/** semantic.color.brand.branding.{item}.{level}.{prop} */
export function getBrandBrandingDescription(item, level, prop) {
  const brandLabel = BRAND_LABELS[item] || item;
  const levelLabel = LEVEL_LABELS[level] || level;
  const propLabel = PROP_LABELS[prop] || prop;
  return `${brandLabel} ${propLabel.toLowerCase()}. Use for ${levelLabel} brand surfaces and borders.`;
}

/** semantic.color.interface.feedback.{item}.{variant}.{level}.{prop} */
export function getFeedbackDescription(item, variant, level, prop) {
  const feedbackLabel = FEEDBACK_LABELS[item] || item;
  const variantLabel = variant === 'secondary' ? 'secondary variant' : 'default';
  const propLabel = PROP_LABELS[prop] || prop;
  return `${feedbackLabel} feedback ${propLabel.toLowerCase()}. Use for ${variantLabel} feedback states and messages.`;
}

/** semantic.color.product.{item}.{variant}.{level}.{prop} */
export function getProductDescription(item, variant, level, prop) {
  const productLabel = PRODUCT_LABELS[item] || item;
  const variantLabel = variant === 'secondary' ? 'secondary variant' : 'default';
  const propLabel = PROP_LABELS[prop] || prop;
  return `${productLabel} product ${propLabel.toLowerCase()}. Use for product-specific ${variantLabel} surfaces.`;
}

/** semantic.color.brand.ambient.contrast.{base|deep}.{positive|negative}.{prop} */
export function getContrastDescription(semanticKey, prop) {
  const depth = semanticKey === 'deep' ? 'Deep' : 'Base';
  const propLabel = PROP_LABELS[prop] || prop;
  return `${depth} contrast ${propLabel.toLowerCase()}. Use for main canvas and surface contrast (positive/negative).`;
}

/** semantic.color.text.{key} – title, body, highlight, muted, label, info_default, etc. */
export function getTextDescription(key) {
  const textDescriptions = {
    title: 'Title text color. Use for headings and primary text.',
    body: 'Body text color. Use for main content.',
    highlight: 'Highlight text color. Use for emphasized content.',
    muted: 'Muted text color. Use for secondary or disabled text.',
    label: 'Label text color. Use for form labels and captions.',
    info_default: 'Info feedback text. Use for informational message text.',
    info_secondary: 'Info feedback text (secondary variant).',
    success_default: 'Success feedback text. Use for success message text.',
    success_secondary: 'Success feedback text (secondary variant).',
    warning_default: 'Warning feedback text. Use for warning message text.',
    warning_secondary: 'Warning feedback text (secondary variant).',
    danger_default: 'Danger feedback text. Use for error and destructive message text.',
    danger_secondary: 'Danger feedback text (secondary variant).',
    promo_default: 'Promo product text. Use for promo-related content.',
    promo_secondary: 'Promo product text (secondary variant).',
    cashback_default: 'Cashback product text. Use for cashback-related content.',
    cashback_secondary: 'Cashback product text (secondary variant).',
    premium_default: 'Premium product text. Use for premium-related content.',
    premium_secondary: 'Premium product text (secondary variant).'
  };
  return textDescriptions[key] || `Semantic text color: ${key}. Use for UI text.`;
}

const FUNCTION_ITEMS = {
  primary: 'Primary function',
  secondary: 'Secondary function',
  link: 'Link',
  active: 'Active/selected function',
  disabled: 'Disabled'
};

/** Interface.function states: normal, action, active (darker), focus (keyboard / former active look) */
const FUNCTION_STATES = {
  normal: 'default state',
  action: 'hover / pressed',
  active: 'pressed / selected (darker than action)',
  focus: 'keyboard focus / focus indicator'
};

function defaultFunctionItemLabel(item) {
  if (!item || typeof item !== 'string') return item;
  return item.charAt(0).toUpperCase() + item.slice(1).replace(/_/g, ' ');
}

/** semantic.color.interface.function.{item}.{state}.{prop} (items from schema; disabled has only state normal) */
export function getFunctionDescription(item, state, prop) {
  const propLabel = PROP_LABELS[prop] || prop;
  const itemLabel = FUNCTION_ITEMS[item] || defaultFunctionItemLabel(item);
  if (item === 'disabled') {
    return `Disabled control. ${propLabel.toLowerCase()}. Use for disabled buttons and controls.`;
  }
  const stateLabel = FUNCTION_STATES[state] || state;
  return `${itemLabel} (${stateLabel}). ${propLabel.toLowerCase()}. Use for CTAs and interactive elements.`;
}

/** @deprecated semantic.color.gradient.interface|product removed; gradient layer only exposes brand (config/composites). Kept for backwards compatibility. */
export function getGradientDescription(category, surface, name) {
  const cat = category === 'interface' ? 'Interface' : 'Product';
  return `${cat} gradient (${surface}). Use for gradient fills on ${surface} surface.`;
}

/** semantic.color.gradient.config.colors.{name}.{level?} */
export function getGradientConfigColorDescription(name, level) {
  if (level) {
    return `Gradient config color: ${name} (${level}). Use for gradient stop.`;
  }
  return `Gradient config color: ${name}. Use for gradient stop.`;
}

/** semantic.color.gradient.brand.{name} (composite) */
export function getGradientCompositeDescription(name) {
  return `Brand gradient: ${name}. Use for hero areas and brand gradient fills.`;
}
