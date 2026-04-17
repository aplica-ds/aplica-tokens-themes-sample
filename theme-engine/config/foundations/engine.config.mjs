/**
 * Foundation Engine Configuration (Aplica)
 *
 * Defines the structure and reference mappings for engine/default.json foundation.
 * Product semantics: Aplica (promo, cashback, premium) from schemas/architecture.mjs.
 */

import { createRequire } from 'module';
import { PRODUCT_SCHEMA } from '../../schemas/architecture.mjs';

const require = createRequire(import.meta.url);
const typographyContent = require('./typography-engine.json');

export default {
  name: 'engine',
  outputPath: 'data/foundation/engine/default.json',

  // ═══════════════════════════════════════════════════════════════
  // STRUCTURE DEFINITION
  // ═══════════════════════════════════════════════════════════════
  structure: {
    bg: {
      base: {
        items: ['primary', 'secondary', 'disabled']
      },
      brand: {
        levels: ['lowest', 'low', 'default', 'high', 'highest'],
        naming: 'intensity'
      },
      neutral: {
        levels: ['lowest', 'low', 'default', 'high', 'highest'],
        naming: 'intensity'
      },
      feedback: {
        items: ['info', 'success', 'warning', 'danger'],
        variants: ['default', 'secondary'],
        naming: 'variant'
      },
      product: {
        items: PRODUCT_SCHEMA.items,
        variants: PRODUCT_SCHEMA.variants,
        naming: 'variant'
      }
    },

    border: {
      base: {
        items: ['primary', 'secondary', 'tertiary', 'disabled']
      },
      brand: {
        levels: ['lowest', 'low', 'default', 'high', 'highest'],
        naming: 'intensity'
      },
      neutral: {
        levels: ['lowest', 'low', 'default', 'high', 'highest'],
        naming: 'intensity',
        brandItem: 'second'
      },
      feedback: {
        items: ['info', 'success', 'warning', 'danger'],
        variants: ['default', 'secondary'],
        naming: 'variant'
      },
      product: {
        items: PRODUCT_SCHEMA.items,
        variants: PRODUCT_SCHEMA.variants,
        naming: 'variant'
      },

      // Border properties
      width: {
        items: ['none', 'small', 'medium', 'large', 'extraLarge']
      },

      radii: {
        items: ['none', 'micro', 'extraSmall', 'small', 'medium', 'large', 'extraLarge', 'circular', 'mega'],
        // Maps 'none' to 'straight' in semantic reference
        mapping: {
          none: 'straight'
        }
      }
    },

    txt: {
      // Base text colors
      base: {
        items: ['title', 'body', 'hiighlight', 'muted', 'disabled', 'label']
      },
      feedback: {
        items: ['info', 'success', 'warning', 'danger'],
        variants: ['default'],
        naming: 'variant'
      },
      product: {
        items: PRODUCT_SCHEMA.items,
        variants: PRODUCT_SCHEMA.variants,
        naming: 'variant'
      },
      // Text on backgrounds
      on: {
        brand: {
          levels: ['lowest', 'low', 'default', 'high', 'highest'],
          naming: 'intensity'
          // No items - generates txt.on.brand.lowest (not txt.on.brand.first.lowest)
        },
        neutral: {
          levels: ['lowest', 'low', 'default', 'high', 'highest'],
          naming: 'intensity'
          // Uses neutral.txtOn directly (corresponds to neutral.background)
        },
        feedback: {
          items: ['info', 'success', 'warning', 'danger'],
          variants: ['default', 'secondary'],
          naming: 'variant'
        },
        product: {
          items: PRODUCT_SCHEMA.items,
          variants: PRODUCT_SCHEMA.variants,
          naming: 'variant'
        }
      }
    },

    // Gradient: aliases to semantic.color.gradient.composites (declaration-defined in themes.config.json)
    gradient: {
      items: ['first', 'second', 'third']
    },

    // Other sections (opacity, sizing, spacing, typography)
    // These are typically direct references to semantic tokens
    opacity: true,
    sizing: true,
    spacing: true,
    typography: true
  },

  // ═══════════════════════════════════════════════════════════════
  // REFERENCE MAPPINGS
  // Defines how to build semantic token references
  // ═══════════════════════════════════════════════════════════════
  references: {
    bg: {
      primary: 'semantic.color.brand.ambient.contrast.base.positive.background',
      secondary: 'semantic.color.brand.ambient.neutral.lowest.background',
      disabled: 'semantic.color.interface.function.disabled.normal.background',
      brand: {
        // Direct levels (bg.brand.lowest, not bg.brand.first.lowest)
        lowest: 'semantic.color.brand.branding.first.lowest.background',
        low: 'semantic.color.brand.branding.first.low.background',
        default: 'semantic.color.brand.branding.first.default.background',
        high: 'semantic.color.brand.branding.first.high.background',
        highest: 'semantic.color.brand.branding.first.highest.background'
      },
      neutral: {
        // Direct intensity levels for backgrounds (ambient neutral has lowest, low, mid, high, highest)
        lowest: 'semantic.color.brand.ambient.neutral.lowest.background',
        low: 'semantic.color.brand.ambient.neutral.low.background',
        default: 'semantic.color.brand.ambient.neutral.mid.background',
        high: 'semantic.color.brand.ambient.neutral.high.background',
        highest: 'semantic.color.brand.ambient.neutral.highest.background',
        // For borders, uses second brand
        second: {
          lowest: 'semantic.color.brand.branding.second.lowest.border',
          low: 'semantic.color.brand.branding.second.low.border',
          default: 'semantic.color.brand.branding.second.default.border',
          high: 'semantic.color.brand.branding.second.high.border',
          highest: 'semantic.color.brand.branding.second.highest.border'
        }
      },
      feedback: {
        // State must be one of INTERFACE_BEHAVIOR_STATES (normal, action, active, focus); foundation uses normal for default appearance.
        pattern: 'semantic.color.interface.feedback.{item}.{variant}.normal.background'
      },
      product: {
        pattern: 'semantic.color.product.{item}.{variant}.default.background'
      }
    },

    border: {
      primary: 'semantic.color.brand.ambient.contrast.base.positive.border',
      secondary: 'semantic.color.brand.ambient.grayscale.lower.border',
      tertiary: 'semantic.color.brand.ambient.grayscale.mid.border',
      disabled: 'semantic.color.interface.function.disabled.normal.border',
      brand: {
        // Direct levels (border.brand.lowest, not border.brand.first.lowest)
        lowest: 'semantic.color.brand.branding.first.lowest.border',
        low: 'semantic.color.brand.branding.first.low.border',
        default: 'semantic.color.brand.branding.first.default.border',
        high: 'semantic.color.brand.branding.first.high.border',
        highest: 'semantic.color.brand.branding.first.highest.border'
      },
      neutral: {
        // Direct intensity levels for borders (uses second brand)
        second: {
          lowest: 'semantic.color.brand.branding.second.lowest.border',
          low: 'semantic.color.brand.branding.second.low.border',
          default: 'semantic.color.brand.branding.second.default.border',
          high: 'semantic.color.brand.branding.second.high.border',
          highest: 'semantic.color.brand.branding.second.highest.border'
        }
      },
      feedback: {
        // State must be one of INTERFACE_BEHAVIOR_STATES (normal, action, active, focus); foundation uses normal for default appearance.
        pattern: 'semantic.color.interface.feedback.{item}.{variant}.normal.border'
      },
      product: {
        pattern: 'semantic.color.product.{item}.{variant}.default.border'
      },
      width: {
        pattern: 'semantic.border.width.{item}'
      },
      radii: {
        pattern: 'semantic.border.radii.{item}',
        mapping: {
          none: 'straight'
        }
      }
    },

    txt: {
      title: 'semantic.color.text.title',
      body: 'semantic.color.text.body',
      hiighlight: 'semantic.color.text.highlight',
      muted: 'semantic.color.text.muted',
      disabled: 'semantic.color.interface.function.disabled.normal.txtOn',
      label: 'semantic.color.text.label',
      on: {
        brand: {
          // Direct levels (txt.on.brand.lowest, not txt.on.brand.first.lowest)
          lowest: 'semantic.color.brand.branding.first.lowest.txtOn',
          low: 'semantic.color.brand.branding.first.low.txtOn',
          default: 'semantic.color.brand.branding.first.default.txtOn',
          high: 'semantic.color.brand.branding.first.high.txtOn',
          highest: 'semantic.color.brand.branding.first.highest.txtOn'
        },
        neutral: {
          // Direct txtOn references that correspond to neutral backgrounds
          lowest: 'semantic.color.brand.ambient.neutral.lowest.txtOn',
          low: 'semantic.color.brand.ambient.neutral.low.txtOn',
          default: 'semantic.color.brand.ambient.neutral.mid.txtOn',
          high: 'semantic.color.brand.ambient.neutral.high.txtOn',
          highest: 'semantic.color.brand.ambient.neutral.highest.txtOn'
        },
        feedback: {
          // State must be one of INTERFACE_BEHAVIOR_STATES (normal, action, active, focus); foundation uses normal for default appearance.
          pattern: 'semantic.color.interface.feedback.{item}.{variant}.normal.txtOn'
        },
        product: {
          pattern: 'semantic.color.product.{item}.{variant}.default.txtOn'
        }
      },
      feedback: {
        pattern: 'semantic.color.text.{item}_{variant}'
      },
      product: {
        pattern: 'semantic.color.text.{item}_{variant}'
      }
    },

    gradient: {
      first: 'semantic.color.gradient.composites.first',
      second: 'semantic.color.gradient.composites.second',
      third: 'semantic.color.gradient.composites.third'
    }
  },

  // Typography and elevation: centralised per foundation. Typography from typography-engine.json; elevation level map for {themeName}_elevation_styles.json.
  styles: {
    typography: typographyContent,
    elevation: {
      level_minus_one: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'innerShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.zero}',
        blur: '{semantic.dimension.sizing.micro}',
        spread: "{semantic.depth.spread.close}"
      },
      level_zero: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'dropShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.zero}',
        blur: '{semantic.dimension.sizing.zero}',
        spread: "{semantic.depth.spread.close}"
      },
      level_one: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'dropShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.nano}',
        blur: '{semantic.dimension.sizing.small}',
        spread: "{semantic.depth.spread.next}",
        description: 'Subtle elevation for cards and panels.'
      },
      level_two: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'dropShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.nano}',
        blur: '{semantic.dimension.sizing.large}',
        spread: "{semantic.depth.spread.next}"
      },
      level_three: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'dropShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.micro}',
        blur: '{semantic.dimension.sizing.extraLarge}',
        spread: "{semantic.depth.spread.near}"
      },
      level_four: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'dropShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.extraSmall}',
        blur: '{semantic.dimension.sizing.mega}',
        spread: "{semantic.depth.spread.near}",
        description: 'High elevation for modals and dialogs.'
      },
      level_five: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'dropShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.small}',
        blur: '{semantic.dimension.sizing.giga}',
        spread: "{semantic.depth.spread.distant}"
      },
      level_six: {
        color: '{semantic.opacity.color.grayscale.superTransparent}',
        type: 'dropShadow',
        x: '{semantic.dimension.sizing.zero}',
        y: '{semantic.dimension.sizing.large}',
        blur: '{semantic.dimension.sizing.giga}',
        spread: "{semantic.depth.spread.distant}"
      }
    }
  }
};
