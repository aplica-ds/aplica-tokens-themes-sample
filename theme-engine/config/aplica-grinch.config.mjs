/**
 * Aplica Grinch Theme Configuration
 * 
 * Grinch is characterized by various shades of green, from moss to emerald.
 * A nature-inspired and vibrant brand with green as the primary identity.
 */

export default {
  name: 'aplica_grinch',
  
  // Base colors extracted from current files
  colors: {
    // Brand colors (various greens inspired by Grinch)
    grinch_moss: '#58BD59',      // Moss/olive green (earthy and natural)
    grinch_christmas: '#EA323C',   // Emerald green (vibrant and rich)
    grinch_golden: '#FFA833',       // Lime green (bright and energetic)
    
    // Functional colors (greens for actions, with contrast)
    action_grinch: '#418B43',    // Primary action (vibrant lime green)
    action_christmas: '#AD3E25',    // Secondary action (dark forest green)
    link_week: '#C09E72',        // Links (teal blue-green for subtle contrast)
    
    // Feedback colors (default = lighter, secondary = more saturated)
    info_blue: '#A5E7D9',           // Info default (ocean blue)
    info_blue_dark: '#46CEB1',      // Info secondary (saturated blue)
    success_pink: '#E7A6C5',       // Success default (bright green)
    success_pink_dark: '#CE4685',  // Success secondary (saturated green)
    warning_orange: '#E7CDA6',      // Warning default (lemon yellow)
    warning_orange_dark: '#E59B2E', // Warning secondary (saturated gold)
    danger_black: '#021802',          // Error/Danger default (crimson pink)
    danger_black_week: '#E5EBE5',     // Error/Danger secondary (saturated magenta)
    
    // Product colors (default = lighter, secondary = more saturated)
    promo_green: '#E3F6CC',       // Promo default (vibrant magenta)
    promo_green_dark: '#AEE071',  // Promo secondary (saturated magenta)
    
    cashback_amber: '#FCE7D4',      // Cashback default (golden amber)
    cashback_amber_dark: '#E0A671', // Cashback secondary (saturated amber)
    
    premium_blue: '#E2E8EC',      // Premium default (electric violet)
    premium_blue_dark: '#71ADE0'  // Premium secondary (deep violet)
  },
  
  mapping: {
    brand: {
      first: 'grinch_moss',
      second: 'grinch_christmas',
      third: 'grinch_golden'
    },
    interface: {
      function: {
        primary: 'action_grinch',
        secondary: 'action_christmas',
        link: 'link_week'
      },
      feedback: {
        info_default: 'info_blue',
        info_secondary: 'info_blue_dark',
        success_default: 'success_pink',
        success_secondary: 'success_pink_dark',
        warning_default: 'warning_orange',
        warning_secondary: 'warning_orange_dark',
        danger_default: 'danger_black',
        danger_secondary: 'danger_black_week'
      }
    },
    product: {
      promo_default: 'promo_green',
      promo_secondary: 'promo_green_dark',
      cashback_default: 'cashback_amber',
      cashback_secondary: 'cashback_amber_dark',
      premium_default: 'premium_blue',
      premium_secondary: 'premium_blue_dark'
    }
  },

  // Optional: gradient-only colors (first/second/third). Matiz claro (lowest) → escuro (default) para gradiente.
  gradientColors: {
    first:  { lowest: '#c4ffc1', default: '#58BD59', highest: '#003700' },
    second: { lowest: '#ffcac1', default: '#EA323C', highest: '#620000' },
    third:  { lowest: '#ffea9d', default: '#FFA833', highest: '#5c0a00' }
  },

  // Gradient structure: config/themes.config.json (global.gradientConfig). Per-theme only overrides (overrides.*).

  options: {
    // 'high-contrast': text is always black or white (maximum contrast)
    // 'brand-tint': text uses closest palette color that passes WCAG (maintains brand tone)
    txtOnStrategy: 'brand-tint',
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
    
    // Interactive fallback: ask user when AAA fails (default: true)
    // true: Interactive mode - asks user to accept AA level when AAA fails
    // false: Non-interactive mode - only shows warnings
    interactiveFallback: true,
    
    // Auto-accept AA level when AAA fails (default: false)
    // true: Automatically accepts AA level (4.5:1) for all failures
    // false: Requires user interaction or shows warnings
    acceptAALevelFallback: false,
    
    // Accessibility bypass: allow generation even if AA validation fails
    // true: Bypass AA validation (will be documented in $meta.json)
    // false: Require AA compliance (default)
    // Note: When accessibilityLevel is 'AAA', bypass may be required for failures
    accessibilityBypass: true,

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

