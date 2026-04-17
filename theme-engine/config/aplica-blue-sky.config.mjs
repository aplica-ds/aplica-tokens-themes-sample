/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * THEME ENGINE – Reference template for creating new themes
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Use this file as the base for configuring your own theme. All sections are
 * documented; omit any that you do not need (the generator uses defaults).
 *
 * HOW TO CREATE A NEW THEME:
 * 1. Copy this file to a new name, e.g. my-theme.config.mjs
 * 2. Change `name` to the theme ID (e.g. 'my_theme') – this becomes the folder name in data/brand/
 * 3. Register the theme in config/themes.config.json under themes.{name}
 * 4. Adjust colors and mapping to your brand colors
 * 5. Optional: adjust options, typography, overrides
 * 6. Run: npm run themes:generate (or npm run build:themes for full pipeline)
 *
 * DOCUMENTATION:
 * - Full structure: docs/context/DYNAMIC_THEMES.md
 * - Overrides and accessibility: docs/context/dynamic-themes-reference/OVERRIDE-BEST-PRACTICES.md
 * - Gradients: config/themes.config.json (global.gradientConfig) – structure is global
 *
 * COLOR NAMING CONVENTION:
 * - brand_*     → Brand identity colors (3 slots: first, second, third in mapping)
 * - action_*     → Buttons, links, interactive elements
 * - feedback_*   → System status (info, success, warning, danger); _alt = secondary variant
 * - product_*    → Domain (promo, cashback, premium); _alt = secondary variant
 */

export default {
  // ─────────────────────────────────────────────────────────────────────────
  // THEME NAME (required)
  // Used as folder name in data/brand/{name}/ and in config/themes.config.json
  // ─────────────────────────────────────────────────────────────────────────
  name: 'aplica_blue_sky',

  // ═══════════════════════════════════════════════════════════════
  // COLORS (required)
  // All keys referenced in mapping must exist here.
  // ═══════════════════════════════════════════════════════════════
  colors: {
    // Brand (3 slots: first, second, third in mapping.brand)
    brand_primary: '#265ED9',
    brand_secondary: '#FECB01',
    brand_accent: '#8952E0',

    // Actions (buttons, links)
    action_primary: '#013FC4',
    action_secondary: '#A68A18',
    action_link: '#5000D1',

    // Feedback: default = lighter; _alt = secondary variant (more saturated)
    feedback_info: '#02D9FF',
    feedback_info_alt: '#46B9CE',
    feedback_success: '#00AD26',
    feedback_success_alt: '#228137',
    feedback_warning: '#FF9A00',
    feedback_warning_alt: '#C18933',
    feedback_error: '#F53232',
    feedback_error_alt: '#C43B3B',

    // Product: promo, cashback, premium (default + secondary each)
    product_promo: '#6BC200',
    product_promo_alt: '#D2FD9D',
    product_cashback: '#FFBB00',
    product_cashback_alt: '#FFF94F',
    product_premium: '#B200AF',
    product_premium_alt: '#EBC2DD'
  },

  // ═══════════════════════════════════════════════════════════════
  // MAPPING (required)
  // Links semantic structure to colors keys. Schema requires
  // brand (first, second, third), interface.function, interface.feedback,
  // product (promo_default, promo_secondary, cashback_*, premium_*).
  // ═══════════════════════════════════════════════════════════════
  mapping: {
    brand: {
      first: 'brand_primary',
      second: 'brand_secondary',
      third: 'brand_accent'
    },
    interface: {
      function: {
        primary: 'action_primary',
        secondary: 'action_secondary',
        link: 'action_link'
      },
      feedback: {
        info_default: 'feedback_info',
        info_secondary: 'feedback_info_alt',
        success_default: 'feedback_success',
        success_secondary: 'feedback_success_alt',
        warning_default: 'feedback_warning',
        warning_secondary: 'feedback_warning_alt',
        danger_default: 'feedback_error',
        danger_secondary: 'feedback_error_alt'
      }
    },
    product: {
      promo_default: 'product_promo',
      promo_secondary: 'product_promo_alt',
      cashback_default: 'product_cashback',
      cashback_secondary: 'product_cashback_alt',
      premium_default: 'product_premium',
      premium_secondary: 'product_premium_alt'
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // FOUNDATION (optional)
  // Controls which brand color is used as base for neutrals/ambient.
  // ═══════════════════════════════════════════════════════════════
  // foundation: {
  //   // Which brand color to use as base for neutrals/contrast (default: 'first')
  //   neutralsSource: 'first'  // 'first' | 'second' | 'third'
  //   },

  // Optional: gradient-only colors (first/second/third). Uses theme brand colors; fills gradient.brandColors in semantic.
  gradientColors: {
    first:  { lowest: '#a8c8f4', default: '#265ED9', highest: '#013FC4' },
    second: { lowest: '#ffeb80', default: '#FECB01', highest: '#a68a18' },
    third:  { lowest: '#c9b0f4', default: '#8952E0', highest: '#5000D1' }
  },

  // ═══════════════════════════════════════════════════════════════
  // GRADIENTS
  // Gradient structure is defined in config/themes.config.json
  // (global.gradientConfig: degrees, steps, defaultComposites first/second/third).
  // Themes do not define gradients here; only overrides in overrides.* if needed.
  // ═══════════════════════════════════════════════════════════════

  // ═══════════════════════════════════════════════════════════════
  // OPTIONS – Generation behavior (all optional)
  // ═══════════════════════════════════════════════════════════════
  options: {
    // Text contrast strategy on colored backgrounds:
    // 'high-contrast' → black or white (maximum readability)
    // 'brand-tint'    → palette color that passes WCAG (maintains brand tone)
    // 'custom-tint'   → (since 2.23.0) optional fixed text colors per mode + fallback; see docs/context/THEME_CONFIG_REFERENCE.md
    // Example (reference only — do not enable unless product requires it):
    // txtOnStrategy: 'custom-tint',
    // txtOnCustomTint: { light: '#1a1a1a', dark: '#f5f5f5', fallback: 'brand-tint' | 'high-contrast' },
    txtOnStrategy: 'high-contrast',

    // Dark mode saturation (1.0 = same as light; 0.85 = recommended; 0.7 = softer)
    darkModeChroma: 0.85,

    // Generate _ui.json with UI tokens (sizing, states)
    uiTokens: false,

    // Generate _primitive_theme.json (full palettes). true = refs in _brand; false = direct HEX (lower Figma memory)
    includePrimitives: true,

    // WCAG contrast level: 'AA' (4.5:1) or 'AAA' (7:1)
    accessibilityLevel: 'AA',

    // Fail build when contrast does not meet level (useful in CI)
    // strictValidation: false,

    // When AAA is active and a color fails AAA but passes AA:
    // true = accept AA automatically; false = warnings (or interactive)
    // acceptAALevelFallback: false,

    // Interactive mode: prompt user when AAA fails (default: true in CLI)
    // interactiveFallback: true,

    // Bypass accessibility validation (documented in $meta.json). Use with care.
    // accessibilityBypass: false

    // Optional (since 2.24.0): per-state palette levels (10–190) for interface.function / interface.feedback.
    // Defaults: positive — normal 100, action 120, active 140 (pressed), focus 50 (keyboard ring / former highlight).
    // Negative surfaces use inverted mapping. See docs/context/THEME_CONFIG_REFERENCE.md.
    // interfaceFunctionPaletteLevels: { normal: 100, action: 120, active: 140, focus: 50 },
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPOGRAPHY (required)
  // All families must declare the 5 semantic weights: light, regular, semibold, bold, black.
  // If a font has no exact weight, map to the closest (e.g. light → Regular).
  // ═══════════════════════════════════════════════════════════════
  typography: {
    fontFamilies: {
      main: 'Roboto',
      content: 'Roboto',
      display: 'Sansita',
      code: 'IBM Plex Mono'
    },
    weights: {
      main: {
        light: { normal: 'Light', italic: 'Light Italic', numeric: 300 },
        regular: { normal: 'Regular', italic: 'Regular Italic', numeric: 400 },
        semibold: { normal: 'SemiBold', italic: 'SemiBold Italic', numeric: 600 },
        bold: { normal: 'Bold', italic: 'Bold Italic', numeric: 700 },
        black: { normal: 'Black', italic: 'Black Italic', numeric: 900 }
      },
      content: {
        light: { normal: 'Light', italic: 'Light Italic', numeric: 300 },
        regular: { normal: 'Regular', italic: 'Regular Italic', numeric: 400 },
        semibold: { normal: 'SemiBold', italic: 'SemiBold Italic', numeric: 600 },
        bold: { normal: 'Bold', italic: 'Bold Italic', numeric: 700 },
        black: { normal: 'Black', italic: 'Black Italic', numeric: 900 }
      },
      display: {
        light: { normal: 'Regular', italic: 'Regular Italic', numeric: 400 },
        regular: { normal: 'Regular', italic: 'Regular Italic', numeric: 400 },
        semibold: { normal: 'Bold', italic: 'Bold Italic', numeric: 700 },
        bold: { normal: 'ExtraBold', italic: 'ExtraBold Italic', numeric: 800 },
        black: { normal: 'Black', italic: 'Black Italic', numeric: 900 }
      },
      code: {
        light: { normal: 'Light', italic: 'Light Italic', numeric: 300 },
        regular: { normal: 'Regular', italic: 'Regular Italic', numeric: 400 },
        semibold: { normal: 'SemiBold', italic: 'SemiBold Italic', numeric: 600 },
        bold: { normal: 'Bold', italic: 'Bold Italic', numeric: 700 },
        black: { normal: 'Black', italic: 'Black Italic', numeric: 700 }
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // BORDERS
  // Border radius: uses references to data/dimension (config/dimension.config.mjs).
  // Leave {} to use dimension defaults.
  // ═══════════════════════════════════════════════════════════════
  borders: {},

  // ═══════════════════════════════════════════════════════════════
  // OVERRIDES – Manual values that replace automatic generation
  // See: docs/context/dynamic-themes-reference/OVERRIDE-BEST-PRACTICES.md
  // ═══════════════════════════════════════════════════════════════
  overrides: {
    // Example: "active" state for buttons/links (one color for primary, secondary, link)
    // If string (hex), generator sets surface=hex, txtOn=black/white per WCAG, border=surface darkened ~20%
    interface: {
      function: {
        active: '#0067FF'
      }
    },

    // Neutrals: override the neutrals scale for a brand color.
    // Key = color name in config.colors (e.g. the one used in mapping.brand.first).
    // Option B (automatic decomposition): baseColor + referenceLevel
    // Option C (manual): surface (and optionally txtOn, border) with levels '5','10',…,'140'
    neutrals: {
      brand_primary: {
        surface: {
          '5': '#F6F3F5',
          '10': '#ECE7EA',
          '20': '#EBD4E3',
          '30': '#E6BBD6',
          '40': '#E7A1DC',
          '50': '#D38FE0',
          '60': '#AA74C5',
          '70': '#8B69CE',
          '80': '#6C47D1',
          '90': '#4828A0',
          '100': '#352184',
          '110': '#181144',
          '120': '#0C0A28',
          '130': '#020208',
          '140': '#010104'
        }
      }
      // Option B example (uncomment and adjust):
      // other_brand_color: {
      //   baseColor: '#2e2e2e',
      //   referenceLevel: 100
      // }
    },

    // Grayscale: override global grayscale scale (interface base)
    // grayscale: {
    //   baseColor: '#2e2e2e',
    //   referenceLevel: 100
    // }
    // or manual:
    // grayscale: {
    //   surface: { '5': '#faf8f5', '100': '#2e2e2e', '140': '#1a1814' },
    //   txtOn: { '5': '#1a1814', '100': '#ffffff', '140': '#ffffff' }
    // }

    // Brand: deep merge over generated theme.color.* object (Tokens Studio structure)
    // brand: { theme: { color: { light: { brand: { ... } } } } }
  }
};
