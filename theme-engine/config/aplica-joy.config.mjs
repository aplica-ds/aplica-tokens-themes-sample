/**
 * Aplica Joy Theme Configuration
 * 
 * Joy is characterized by vibrant pink, blue, and purple.
 * A playful and energetic brand.
 */

export default {
  name: 'aplica_joy',
  
  // Base colors extracted from current files
  colors: {
    // Brand colors
    joy_pink: '#E7398A',       // Vibrant pink/magenta
    joy_blue: '#38C2D0',       // Sky blue
    joy_purple: '#8F58BD',     // Soft purple
    
    // Functional colors
    action_magenta: '#C40145', // Primary action (deep magenta)
    action_cyan: '#1872A6',    // Secondary action (ocean blue)
    link_pink: '#FF0F80',      // Links (deep pink)
    
    // Feedback colors (default = lighter, secondary = more saturated)
    info_blue: '#CBF6ED',           // Info default (bright cyan)
    info_blue_dark: '#A5E7D9',      // Info secondary (saturated teal)
    success_green: '#D7F6CB',       // Success default (forest green)
    success_green_dark: '#86C46D',  // Success secondary (saturated green)
    warning_orange: '#FEE6C2',      // Warning default (amber)
    warning_orange_dark: '#FDB750', // Warning secondary (saturated orange)
    danger_red: '#F9C8C8',          // Error/Danger default (bright red)
    danger_red_dark: '#EE5A5A',     // Error/Danger secondary (saturated red)
    
    // Product colors (default = lighter, secondary = more saturated)
    promo_green: '#E3F6CC',           // Promo default (vivid red)
    promo_green_dark: '#AEE071',      // Promo secondary (saturated red)
    
    cashback_pink: '#FCE0D4',       // Cashback default (golden yellow)
    cashback_pink_dark: '#FEA680',  // Cashback secondary (saturated gold)
    
    premium_purple: '#ECE2E9',      // Premium default (electric purple)
    premium_purple_dark: '#B200AF'  // Premium secondary (deep purple)
  },
  
  mapping: {
    brand: {
      first: 'joy_pink',
      second: 'joy_blue',
      third: 'joy_purple'
    },
    interface: {
      function: {
        primary: 'action_magenta',
        secondary: 'action_cyan',
        link: 'link_pink'
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
      cashback_default: 'cashback_pink',
      cashback_secondary: 'cashback_pink_dark',
      premium_default: 'premium_purple',
      premium_secondary: 'premium_purple_dark'
    }
  },

  // Optional: gradient-only colors (first/second/third). Matiz claro (lowest) → escuro (default) para gradiente.
  gradientColors: {
    first:  { lowest: '#fad4e8', default: '#E7398A', highest: '#8a1b4a' },
    second: { lowest: '#b8eef4', default: '#38C2D0', highest: '#1872A6' },
    third:  { lowest: '#d4b8e8', default: '#8F58BD', highest: '#4a2d6a' }
  },

  // Gradient structure is defined in config/themes.config.json (global.gradientConfig); per-theme configs only allow overrides (overrides.*).

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
    
    // Accessibility level: 'AA' (4.5:1) or 'AAA' (7:1)
    // 'AA' (default): Industry standard minimum for text accessibility
    // 'AAA': Enhanced accessibility for better readability
    accessibilityLevel: 'AAA',

    // Optional (since 2.24.0): per-state palette levels (10–190) for interface.function / interface.feedback.
    // Defaults (positive): normal 100, action 120, active 140 (pressed), focus 50 (keyboard ring / former highlight).
    // Negative surfaces use the inverted mapping. See docs/context/THEME_CONFIG_REFERENCE.md.
    // interfaceFunctionPaletteLevels: { normal: 100, action: 120, active: 140, focus: 50 },
  },
  
  // Typography configuration
  typography: {
    fontFamilies: {
      main: 'Noto Sans',
      content: 'Noto Sans',
      display: 'Poppins',
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
        light: { normal: 'Light', italic: 'Light Italic', numeric: 300 },
        regular: { normal: 'Regular', italic: 'Regular Italic', numeric: 400 },
        semibold: { normal: 'SemiBold', italic: 'SemiBold Italic', numeric: 600 },
        bold: { normal: 'Bold', italic: 'Bold Italic', numeric: 700 },
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
