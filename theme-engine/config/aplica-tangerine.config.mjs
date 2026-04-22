/**
 * Aplica Tangerine Theme Configuration
 * 
 * Tangerine is characterized by warm yellows, oranges, and coral.
 * A warm and inviting brand.
 */

export default {
  name: 'aplica_tangerine',
  
  // Base colors extracted from current files
  colors: {
    // Brand colors
    tangerine_yellow: '#FFAE03', // Soft golden yellow
    tangerine_weak: '#F8F0D4', // Bright tangerine orange
    tangerine_black: '#2A2D05',    // Coral red/salmon
    
    // Functional colors
    action_tangerine: '#C48601', // Primary action (warm gold)
    action_brown: '#231D06',    // Secondary action (dark brown)
    link_green: '#C3D100',       // Links (deep blue)
    
    // Feedback colors (default = lighter, secondary = more saturated)
    info_blue: '#02D9FF',           // Info default (ocean blue)
    info_blue_dark: '#46B9CE',      // Info secondary (saturated blue)
    success_green: '#00AD26',       // Success default (bright green)
    success_green_dark: '#228137',  // Success secondary (saturated green)
    warning_orange: '#FF9A00',      // Warning default (lemon yellow)
    warning_orange_dark: '#C18933', // Warning secondary (saturated gold)
    danger_red: '#F53232',          // Error/Danger default (crimson pink)
    danger_red_dark: '#C43B3B',     // Error/Danger secondary (saturated magenta)
    
    // Product colors (default = lighter, secondary = more saturated)
    promo_green: '#D2FD9D',           // Promo default (vivid red)
    promo_green_dark: '#6BC200',      // Promo secondary (saturated red)
    
    cashback_gold: '#FFF94F',       // Cashback default (golden yellow)
    cashback_gold_dark: '#FFBB00',  // Cashback secondary (saturated gold)
    
    premium_purple: '#EBC2DD',      // Premium default (electric purple)
    premium_purple_dark: '#B200AF'  // Premium secondary (deep purple)
  },
  
  mapping: {
    brand: {
      first: 'tangerine_yellow',
      second: 'tangerine_weak',
      third: 'tangerine_black'
    },
    interface: {
      function: {
        primary: 'action_tangerine',
        secondary: 'action_brown',
        link: 'link_green'
      },
      feedback: {
        info_default: 'info_blue',
        info_secondary: 'info_blue_dark',
        success_default: 'success_green',
        success_secondary: 'success_green_dark',
        warning_default: 'warning_orange',
        warning_secondary: 'warning_orange_dark',
        danger_default: 'danger_red',
        danger_secondary: 'danger_red_dark'
      }
    },
    product: {
      promo_default: 'promo_green',
      promo_secondary: 'promo_green_dark',
      cashback_default: 'cashback_gold',
      cashback_secondary: 'cashback_gold_dark',
      premium_default: 'premium_purple',
      premium_secondary: 'premium_purple_dark'
    }
  },

  // Optional: gradient-only colors (first/second/third). Matiz claro (lowest) → escuro (default) para gradiente.
  gradientColors: {
    first:  { lowest: '#ffdd80', default: '#FFAE03', highest: '#c48601' },
    second: { lowest: '#F8F0D4', default: '#e8d4a0', highest: '#8a7a50' },
    third:  { lowest: '#6a6d35', default: '#2A2D05', highest: '#0a0c00' }
  },

  // Gradient structure: config/themes.config.json (global.gradientConfig). Per-theme only overrides (overrides.*).

  options: {
    // 'high-contrast': text is always black or white (maximum contrast)
    // 'brand-tint': text uses closest palette color that passes WCAG (maintains brand tone)
    txtOnStrategy: 'brand-tint',
    // Optional: preferred surface level used as the starting reference for the general `txt` token.
    // If omitted, `txt` starts from the same reference logic as `border` and is then accessibility-normalized.
    // txtBaseColorLevel: 100,
    // UI tokens generation (set to true to generate _ui.json)
    uiTokens: false,
    
    // Dark mode chroma/saturation factor
    // 1.0 = same saturation as light mode
    // 0.85 = 15% less saturated (default, easier on eyes)
    // 0.7 = 30% less saturated (very muted dark mode)
    darkModeChroma: 0.85,
    
    // Whether to generate _primitive_theme.json
    // true (default): Generates _primitive_theme.json with all color decompositions
    //                 _brand.json uses references like {_color_palette.mode.light.color.palette.surface.100}
    // false: Does NOT generate _primitive_theme.json
    //        _brand.json contains raw HEX values directly
    //        Reduces memory usage in Figma and faster processing
    includePrimitives: false,
    
    // Accessibility level: 'AA' (4.5:1) or 'AAA' (7:1)
    // 'AA' (default): Industry standard minimum for text accessibility
    // 'AAA': Enhanced accessibility for better readability
    accessibilityLevel: 'AAA',
    
    // Auto-accept AA level when AAA fails (default: false)
    // true: Automatically accepts AA level (4.5:1) for all failures
    // false: Requires user interaction or shows warnings
    acceptAALevelFallback: true,
    
    // Interactive fallback: ask user when AAA fails (default: true)
    // Note: When acceptAALevelFallback is true, this is ignored
    interactiveFallback: false,

    // Optional (since 2.24.0): per-state palette levels (10–190) for interface.function / interface.feedback.
    // Defaults (positive): normal 100, action 120, active 140 (pressed), focus 50 (keyboard ring / former highlight).
    // Negative surfaces use the inverted mapping. See docs/context/THEME_CONFIG_REFERENCE.md.
    // interfaceFunctionPaletteLevels: { normal: 100, action: 120, active: 140, focus: 50 },
  },
  
  // Typography configuration
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

  // Border configuration (uses dimension references)
  borders: {}
};
