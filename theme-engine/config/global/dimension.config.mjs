/**
 * Dimension configuration - SSOT for data/dimension/<variant>.json.
 * Used by dynamic-themes/scripts/generate-dimension.mjs.
 * Referenced from config/global/themes.config.json (global.dimension).
 *
 * Scale is computed per variant from constants (layoutUnit × scaleMultiplierFactor = defaultDesignUnit).
 * Formula: value_px = round((key/100) * defaultDesignUnit). See dimension-scale.mjs and docs/context/dimension/01-spatial-system.md.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { computeScale } from '../../dynamic-themes/scripts/dimension-scale.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const THEMES_CONFIG_PATH = path.join(__dirname, 'themes.config.json');

const DEFAULT_SCALE_LEVELS = 5;
const FALLBACK_LAYOUT_UNIT = 4;
const FALLBACK_SCALE_MULTIPLIER_FACTOR = 4;

function loadThemesDimensionConfig() {
  try {
    if (!fs.existsSync(THEMES_CONFIG_PATH)) return null;
    const raw = fs.readFileSync(THEMES_CONFIG_PATH, 'utf-8');
    const data = JSON.parse(raw);
    return data?.global?.dimension ?? null;
  } catch {
    return null;
  }
}

function validatePositiveInteger(value, name, variant) {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1) {
    throw new Error(
      `Dimension config: ${name} for variant "${variant}" must be a positive integer, got: ${value}`
    );
  }
  return n;
}

/** Default semantic (Gran). Proportional scale: key 100 = 1ud (medium). Descriptions: usage only, no px. */
const DEFAULT_SEMANTIC = {
  zero: { value: '{dimension.scale.0}', description: 'Zero spacing - removes all spacing, used for resetting margins/padding' },
  pico: { value: '{dimension.scale.6}', description: 'Minimal spacing - hairline gaps, subtle borders, pixel-perfect adjustments' },
  nano: { value: '{dimension.scale.12}', description: 'Nano spacing - minimal gaps, tight icon spacing, subtle borders' },
  micro: { value: '{dimension.scale.25}', description: 'Micro spacing - compact padding, small gaps between related elements' },
  extraSmall: { value: '{dimension.scale.50}', description: 'Extra small spacing - standard padding for compact components' },
  small: { value: '{dimension.scale.75}', description: 'Small spacing - comfortable padding for small components, form field spacing' },
  medium: { value: '{dimension.scale.100}', description: 'Medium spacing - default padding for most components, standard gap between elements' },
  large: { value: '{dimension.scale.125}', description: 'Large spacing - generous padding, section spacing, larger gaps' },
  extraLarge: { value: '{dimension.scale.150}', description: 'Extra large spacing - substantial padding, major section gaps, card spacing' },
  mega: { value: '{dimension.scale.175}', description: 'Mega spacing - large component padding, significant section separation' },
  giga: { value: '{dimension.scale.275}', description: 'Giga spacing - generous padding, section spacing' },
  tera: { value: '{dimension.scale.450}', description: 'Tera spacing - enormous padding, hero section spacing, major page divisions' },
  peta: { value: '{dimension.scale.725}', description: 'Peta spacing - maximum layout spacing, full-page hero sections, extreme layouts' }
};

function mergeSemanticEntries(result, configSemantic, descriptionFallback) {
  for (const [name, entry] of Object.entries(configSemantic)) {
    if (entry && typeof entry === 'object' && entry.value != null) {
      result[name] = {
        value: String(entry.value),
        description: entry.description != null ? String(entry.description) : (descriptionFallback[name]?.description ?? '')
      };
    } else if (typeof entry === 'string') {
      result[name] = { value: entry, description: descriptionFallback[name]?.description ?? '' };
    }
  }
}

/** List of dimension variants. From themes.config.json global.dimension.variants; fallback ['normal']. */
export function getVariants() {
  const dimConfig = loadThemesDimensionConfig();
  const variants = dimConfig?.variants;
  if (Array.isArray(variants) && variants.length > 0) return variants;
  return ['normal'];
}

/** Constants for a variant from themes.config.json global.dimension.params. Fallback: Gran defaults. */
export function getConstants(variant = 'normal') {
  const dimConfig = loadThemesDimensionConfig();
  const defaultVariant = dimConfig?.defaultVariant ?? 'normal';
  const params = dimConfig?.params ?? {};
  const globalFactor = dimConfig?.scaleMultiplierFactor;

  const variantParams = params[variant] ?? params[defaultVariant] ?? null;

  if (!variantParams || typeof variantParams.layoutUnit === 'undefined') {
    return {
      layoutUnit: FALLBACK_LAYOUT_UNIT,
      scaleMultiplierFactor: FALLBACK_SCALE_MULTIPLIER_FACTOR,
      defaultDesignUnit: FALLBACK_LAYOUT_UNIT * FALLBACK_SCALE_MULTIPLIER_FACTOR,
      scaleLevels: DEFAULT_SCALE_LEVELS
    };
  }

  const layoutUnit = validatePositiveInteger(
    variantParams.layoutUnit,
    'layoutUnit',
    variant
  );
  const scaleMultiplierFactor = validatePositiveInteger(
    variantParams.scaleMultiplierFactor ?? globalFactor ?? FALLBACK_SCALE_MULTIPLIER_FACTOR,
    'scaleMultiplierFactor',
    variant
  );
  const defaultDesignUnit = layoutUnit * scaleMultiplierFactor;
  const scaleLevels = Number.isInteger(variantParams.scaleLevels) && variantParams.scaleLevels >= 1
    ? variantParams.scaleLevels
    : DEFAULT_SCALE_LEVELS;

  if (defaultDesignUnit < 1 || defaultDesignUnit > 128) {
    throw new Error(
      `Dimension config: defaultDesignUnit (layoutUnit * scaleMultiplierFactor) for variant "${variant}" is ${defaultDesignUnit}; expected between 1 and 128.`
    );
  }

  return {
    layoutUnit,
    scaleMultiplierFactor,
    defaultDesignUnit,
    scaleLevels
  };
}

/** Scale overrides for a variant. Optional key -> value (e.g. '100': '16px') to override formula. */
export function getOverrides(variant = 'normal') {
  return {};
}

/** Scale for variant. Computed from constants: value_px = round((key/100) * defaultDesignUnit). */
export function getScale(variant = 'normal') {
  const constants = getConstants(variant);
  const overrides = getOverrides(variant);
  return computeScale(constants, overrides);
}

/** Scale for backward compat: same as getScale('normal'). */
export const scale = getScale('normal');

/** Semantic aliases for variant. From config when present; merge over DEFAULT_SEMANTIC (Gran). */
export function getSemantic(variant = 'normal') {
  const dimConfig = loadThemesDimensionConfig();
  const configSemantic = dimConfig?.semantic;

  const defaultSemantic = { ...DEFAULT_SEMANTIC };
  if (configSemantic && typeof configSemantic === 'object') {
    mergeSemanticEntries(defaultSemantic, configSemantic, DEFAULT_SEMANTIC);
  }

  const variantOverrides = dimConfig?.semanticByVariant?.[variant];
  if (!variantOverrides || typeof variantOverrides !== 'object') {
    return defaultSemantic;
  }

  const result = { ...defaultSemantic };
  mergeSemanticEntries(result, variantOverrides, defaultSemantic);
  return result;
}

/** Semantic aliases. Backward compat: same as getSemantic('normal'). */
export const semantic = getSemantic('normal');
