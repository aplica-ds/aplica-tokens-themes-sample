import path from 'path';
import { pathToFileURL } from 'url';

const packageRoot = process.env.APLICA_THEME_ENGINE_PACKAGE_ROOT;

if (!packageRoot) {
  throw new Error('APLICA_THEME_ENGINE_PACKAGE_ROOT is required for migrated architecture schema modules.');
}

const base = await import(pathToFileURL(path.join(packageRoot, 'schemas/architecture.mjs')).href);

const LEGACY_BRAND_ITEMS = [
  "first",
  "second",
  "third"
];
const LEGACY_INTENSITY_LEVELS = [
  "lowest",
  "low",
  "default",
  "high",
  "highest"
];
const LEGACY_NEUTRAL_LEVELS = [
  "lowest",
  "lower",
  "low",
  "mid",
  "high",
  "higher",
  "highest"
];
const LEGACY_GRAYSCALE_LEVELS = [
  "lowest",
  "lower",
  "low",
  "mid",
  "high",
  "higher",
  "highest"
];
const LEGACY_INTERFACE_FUNCTION_ITEMS = [
  "primary",
  "secondary",
  "link"
];
const LEGACY_MODE_BRAND_ALIAS_LEVELS = {
  "light": [
    "lowest",
    "default",
    "highest"
  ],
  "dark": [
    "lowest",
    "default",
    "highest"
  ]
};
const LEGACY_TEXT_LEVELS_BY_MODE = {
  "light": {
    "positive": {
      "title": 120,
      "body": 100,
      "highlight": 120,
      "muted": 40,
      "label": 120
    },
    "negative": {
      "title": 10,
      "body": 40,
      "highlight": 5,
      "muted": 100,
      "label": 10
    }
  },
  "dark": {
    "positive": {
      "title": 130,
      "body": 100,
      "highlight": 140,
      "muted": 40,
      "label": 130
    },
    "negative": {
      "title": 20,
      "body": 40,
      "highlight": 20,
      "muted": 100,
      "label": 20
    }
  }
};
const LEGACY_SEMANTIC_AMBIENT_NEUTRAL_BORDER_ALIASES = {
  "high": "mid"
};

function pickAmbientItems(names) {
  return names.map((name) => {
    const found = Array.isArray(base.AMBIENT_LEVEL_ITEMS)
      ? base.AMBIENT_LEVEL_ITEMS.find((item) => item?.name === name)
      : null;
    return found ? { ...found } : { name };
  });
}

export const FEEDBACK_SCHEMA = {
  items: ["info","success","warning","danger"],
  variants: ["default","secondary"]
};

export const PRODUCT_SCHEMA = {
  items: ["promo","cashback","premium"],
  variants: ["default","secondary"]
};

export function getProductSchemaForFoundation() {
  return {
    items: [...PRODUCT_SCHEMA.items],
    variants: [...PRODUCT_SCHEMA.variants]
  };
}

export function getProductMapping() {
  const out = {};
  for (const item of PRODUCT_SCHEMA.items) {
    for (const variant of PRODUCT_SCHEMA.variants) {
      out[`${item}_${variant}`] = `${item}_${variant}`;
    }
  }
  return out;
}

export const BRAND_SCHEMA = {
  items: [...LEGACY_BRAND_ITEMS]
};

export const REFERENCE_BRAND_COLORS = base.REFERENCE_BRAND_COLORS;
export function getBrandMapping() {
  return Object.fromEntries(BRAND_SCHEMA.items.map((item) => [item, `brand_${item}`]));
}

export const INTENSITY_LEVELS = [...LEGACY_INTENSITY_LEVELS];
export const BRAND_INTENSITY_PALETTE_DEFAULT = base.BRAND_INTENSITY_PALETTE_DEFAULT;
export const BEHAVIOR_LEVELS = base.BEHAVIOR_LEVELS;
export const INTERFACE_BEHAVIOR_STATES = base.INTERFACE_BEHAVIOR_STATES;
export const DEFAULT_INTERFACE_BEHAVIOR_MAP = base.DEFAULT_INTERFACE_BEHAVIOR_MAP;
export const DEFAULT_INTERFACE_DISABLED_LEVELS = base.DEFAULT_INTERFACE_DISABLED_LEVELS;
export const BEHAVIOR_TO_INTENSITY = base.BEHAVIOR_TO_INTENSITY;
export const THEME_COLOR_PROPERTIES = base.THEME_COLOR_PROPERTIES;
export const COLOR_PROPERTIES = base.COLOR_PROPERTIES;
export const THEME_TO_ARCH_PROPERTY = base.THEME_TO_ARCH_PROPERTY;
export const ARCH_TO_THEME_PROPERTY = base.ARCH_TO_THEME_PROPERTY;
export const INTERFACE_FUNCTION_SCHEMA = {
  ...(base.INTERFACE_FUNCTION_SCHEMA ?? {}),
  items: [...LEGACY_INTERFACE_FUNCTION_ITEMS]
};
export const AMBIENT_LEVEL_ITEMS = base.AMBIENT_LEVEL_ITEMS;
export const AMBIENT_CONTRAST_SCHEMA = base.AMBIENT_CONTRAST_SCHEMA;
export const AMBIENT_SCHEMA = {
  ...base.AMBIENT_SCHEMA,
  neutral: {
    ...(base.AMBIENT_SCHEMA?.neutral ?? {}),
    items: pickAmbientItems(LEGACY_NEUTRAL_LEVELS)
  },
  grayscale: {
    ...(base.AMBIENT_SCHEMA?.grayscale ?? {}),
    items: pickAmbientItems(LEGACY_GRAYSCALE_LEVELS)
  }
};
export const SURFACE_TYPES = base.SURFACE_TYPES;
export const TEXT_SCHEMA = base.TEXT_SCHEMA;
export const GRADIENT_SCHEMA = {
  ...base.GRADIENT_SCHEMA,
  get repertoireLevels() {
    return [...INTENSITY_LEVELS];
  },
  get defaultBrandNames() {
    return [...BRAND_SCHEMA.items];
  }
};

export const LEGACY_COMPATIBILITY = {
  modeBrandAliases: {
    enabled: Object.keys(LEGACY_MODE_BRAND_ALIAS_LEVELS).length > 0,
    levelsByMode: LEGACY_MODE_BRAND_ALIAS_LEVELS
  },
  text: {
    levelsByMode: LEGACY_TEXT_LEVELS_BY_MODE
  },
  semantic: {
    ambientNeutralBorderAliases: LEGACY_SEMANTIC_AMBIENT_NEUTRAL_BORDER_ALIASES
  }
};

export const ARCHITECTURE_SCHEMA = {
  ...base.ARCHITECTURE_SCHEMA,
  feedback: FEEDBACK_SCHEMA,
  product: PRODUCT_SCHEMA,
  brand: BRAND_SCHEMA,
  interfaceFunction: INTERFACE_FUNCTION_SCHEMA,
  intensityLevels: INTENSITY_LEVELS,
  ambient: AMBIENT_SCHEMA,
  text: TEXT_SCHEMA,
  gradient: GRADIENT_SCHEMA,
  legacyCompatibility: LEGACY_COMPATIBILITY
};

export function generateMappingKeys(schema) {
  const keys = [];
  for (const item of schema.items ?? []) {
    for (const variant of schema.variants ?? []) {
      keys.push(`${item}_${variant}`);
    }
  }
  return keys;
}

export function validateMapping(mapping, schema) {
  const expectedKeys = generateMappingKeys(schema);
  const actualKeys = Object.keys(mapping ?? {});
  const missing = expectedKeys.filter((key) => !actualKeys.includes(key));
  const extra = actualKeys.filter((key) => !expectedKeys.includes(key));
  return { valid: missing.length === 0 && extra.length === 0, missing, extra };
}

export function generateMappingTemplate(schema, prefix = '') {
  const template = {};
  for (const item of schema.items ?? []) {
    for (const variant of schema.variants ?? []) {
      const key = `${item}_${variant}`;
      const colorName = prefix ? `${prefix}_${item}_${variant}` : key;
      template[key] = colorName;
    }
  }
  return template;
}

export function printSchema() {
  console.log('\n===============================================================');
  console.log('  ARCHITECTURE SCHEMA (migrated legacy compatibility)');
  console.log('===============================================================\n');
  console.log('FEEDBACK:', FEEDBACK_SCHEMA.items.join(', '), '| Variants:', FEEDBACK_SCHEMA.variants.join(', '));
  console.log('PRODUCT:', PRODUCT_SCHEMA.items.join(', '), '| Variants:', PRODUCT_SCHEMA.variants.join(', '));
  console.log('BRAND:', BRAND_SCHEMA.items.join(', '));
  console.log('INTENSITY:', INTENSITY_LEVELS.join(', '));
  console.log('AMBIENT NEUTRAL:', LEGACY_NEUTRAL_LEVELS.join(', '));
  console.log('AMBIENT GRAYSCALE:', LEGACY_GRAYSCALE_LEVELS.join(', '));
  console.log('\n===============================================================\n');
}
