/**
 * Foundation Sample Configuration
 * 
 * Defines the structure and reference mappings for sample/default.json foundation.
 * This configuration demonstrates STRUCTURE-BASED approach (patterns only, no direct mapping).
 * 
 * This is an example of using ONLY pattern-based generation, contrasting with engine.config.mjs
 * which uses a hybrid approach (direct mapping + structure-based).
 * 
 * STRUCTURE PATTERNS:
 * - bg: Uses semantic naming (main, intermediate, secondary, tertiary) for brand/neutral
 * - border: Uses semantic naming (main, intermediate, secondary, tertiary) for brand/neutral
 * - txt: Uses semantic naming for brand/neutral
 * - feedback/product: Uses primary/secondary variants instead of default/secondary
 * 
 * NOTE: This config uses ONLY structure-based patterns. For direct mapping examples, see engine.config.mjs
 */

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const typographyContent = require('./typography-sample.json');

export default {
  name: 'sample',
  outputPath: 'data/foundation/sample/default.json',
  
  // ═══════════════════════════════════════════════════════════════
  // STRUCTURE DEFINITION
  // Defines what sections and items should be generated
  // ═══════════════════════════════════════════════════════════════
  structure: {
    bg: {
      // NOTE: No 'base' section - this config uses ONLY pattern-based structures
      // For direct mapping examples (including base items), see engine.config.mjs
      
      // Brand backgrounds with semantic naming
      brand: {
        items: ['brand'],
        levels: ['main', 'intermediate', 'secondary', 'tertiary'],
        naming: 'semantic' // Uses: main, intermediate, secondary, tertiary
      },
      
      // Neutral backgrounds with semantic naming
      neutral: {
        items: ['neutral'],
        levels: ['main', 'intermediate', 'secondary', 'tertiary'],
        naming: 'semantic'
      },
      
      // Feedback backgrounds with primary/secondary naming
      feedback: {
        items: ['info', 'success', 'warning', 'danger'],
        variants: ['primary', 'secondary'],
        naming: 'primary_secondary' // Uses: primary, secondary
      },
      
      // Product backgrounds with alternative items and primary/secondary naming
      product: {
        items: ['rewards', 'cold', 'promo', 'time_bomb', 'rgb'],
        variants: ['primary', 'secondary'],
        naming: 'primary_secondary'
      }
    },
    
    border: {
      // NOTE: No 'base' section - this config uses ONLY pattern-based structures
      // For direct mapping examples (including base items), see engine.config.mjs
      
      // Brand borders with semantic naming
      brand: {
        items: ['brand'],
        levels: ['main', 'intermediate', 'secondary', 'tertiary'],
        naming: 'semantic'
      },
      
      // Neutral borders with semantic naming
      neutral: {
        items: ['neutral'],
        levels: ['main', 'intermediate', 'secondary', 'tertiary'],
        naming: 'semantic'
      },
      
      // Feedback borders with primary/secondary naming
      feedback: {
        items: ['info', 'success', 'warning', 'danger'],
        variants: ['primary', 'secondary'],
        naming: 'primary_secondary'
      },
      
      // Product borders with alternative items and primary/secondary naming
      product: {
        items: ['rewards', 'cold', 'promo', 'time_bomb', 'rgb'],
        variants: ['primary', 'secondary'],
        naming: 'primary_secondary'
      },
      
      // Border properties
      width: {
        items: ['none', 'small', 'medium', 'large', 'extraLarge']
      },
      
      radii: {
        items: ['none', 'micro', 'extraSmall', 'small', 'medium', 'large', 'extraLarge', 'circular', 'mega'],
        mapping: {
          none: 'straight'
        }
      }
    },
    
    txt: {
      // NOTE: No 'base' section - this config uses ONLY pattern-based structures
      // For direct mapping examples (including base items), see engine.config.mjs
      
      // Text on backgrounds - similar structure but different references
      on: {
        brand: {
          items: ['brand'],
          levels: ['main', 'intermediate', 'secondary', 'tertiary'],
          naming: 'semantic'
        },
        neutral: {
          items: ['neutral'],
          levels: ['main', 'intermediate', 'secondary', 'tertiary'],
          naming: 'semantic'
        },
        feedback: {
          items: ['info', 'success', 'warning', 'danger'],
          variants: ['primary', 'secondary'],
          naming: 'primary_secondary'
        },
        product: {
          items: ['rewards', 'cold', 'promo', 'time_bomb', 'rgb'],
          variants: ['primary', 'secondary'],
          naming: 'primary_secondary'
        }
      },
      
      // Direct feedback/product text colors
      feedback: {
        items: ['info', 'success', 'warning', 'danger'],
        variants: ['primary', 'secondary'],
        naming: 'primary_secondary'
      },
      
      product: {
        items: ['rewards', 'cold', 'promo', 'time_bomb', 'rgb'],
        variants: ['primary', 'secondary'],
        naming: 'primary_secondary'
      }
    },
    
    // Other sections (opacity, sizing, spacing, typography)
    opacity: true,
    sizing: true,
    spacing: true,
    typography: true
  },
  
  // ═══════════════════════════════════════════════════════════════
  // REFERENCE MAPPINGS (STRUCTURE-BASED ONLY)
  // This config demonstrates pattern-based generation only.
  // No direct mappings - all tokens use structure definitions with patterns.
  // For direct mapping examples, see engine.config.mjs
  // ═══════════════════════════════════════════════════════════════
  references: {
    bg: {
      // NOTE: No direct mappings here (e.g., primary_clear, secondary, etc.)
      // This config uses ONLY structure-based patterns below
      
      brand: {
        brand: {
          main: 'semantic.color.brand.branding.first.default.background',
          intermediate: 'semantic.color.brand.branding.first.lowest.background',
          secondary: 'semantic.color.brand.branding.second.default.background',
          tertiary: 'semantic.color.brand.branding.third.default.background'
        }
      },
      neutral: {
        neutral: {
          main: 'semantic.color.brand.ambient.neutral.high.background',
          intermediate: 'semantic.color.brand.ambient.neutral.mid.background',
          secondary: 'semantic.color.brand.ambient.neutral.low.background',
          tertiary: 'semantic.color.brand.ambient.neutral.higher.background'
        }
      },
      feedback: {
        pattern: 'semantic.color.interface.feedback.{item}.{variant}.normal.background',
        variantMapping: {
          primary: 'main',
          secondary: 'secondary'
        }
      },
      product: {
        pattern: 'semantic.color.product.{item}_{variant}.default.background',
        variantMapping: {
          primary: 'default',
          secondary: 'secondary'
        }
      }
    },
    
    border: {
      // NOTE: No direct mappings here - only structure-based patterns
      
      brand: {
        brand: {
          main: 'semantic.color.brand.branding.first.default.border',
          intermediate: 'semantic.color.brand.branding.first.lowest.border',
          secondary: 'semantic.color.brand.branding.second.default.border',
          tertiary: 'semantic.color.brand.branding.third.default.border'
        }
      },
      neutral: {
        neutral: {
          main: 'semantic.color.brand.ambient.neutral.high.border',
          intermediate: 'semantic.color.brand.ambient.neutral.mid.border',
          secondary: 'semantic.color.brand.ambient.neutral.low.border',
          tertiary: 'semantic.color.brand.ambient.neutral.higher.border'
        }
      },
      feedback: {
        pattern: 'semantic.color.interface.feedback.{item}.{variant}.normal.border',
        variantMapping: {
          primary: 'main',
          secondary: 'secondary'
        }
      },
      product: {
        pattern: 'semantic.color.product.{item}_{variant}.default.border',
        variantMapping: {
          primary: 'default',
          secondary: 'secondary'
        }
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
      // NOTE: No direct mappings here (e.g., title, body, etc.)
      // This config uses ONLY structure-based patterns
      
      on: {
        brand: {
          brand: {
            main: 'semantic.color.brand.branding.first.default.txtOn',
            intermediate: 'semantic.color.brand.branding.first.lowest.txtOn',
            secondary: 'semantic.color.brand.branding.second.default.txtOn',
            tertiary: 'semantic.color.brand.branding.third.default.txtOn'
          }
        },
        neutral: {
          neutral: {
            main: 'semantic.color.brand.ambient.neutral.high.txtOn',
            intermediate: 'semantic.color.brand.ambient.neutral.mid.txtOn',
            secondary: 'semantic.color.brand.ambient.neutral.low.txtOn',
            tertiary: 'semantic.color.brand.ambient.neutral.higher.txtOn'
          }
        },
        feedback: {
          pattern: 'semantic.color.interface.feedback.{item}.{variant}.normal.txtOn',
          variantMapping: {
            primary: 'main',
            secondary: 'secondary'
          }
        },
        product: {
          pattern: 'semantic.color.product.{item}_{variant}.default.txtOn',
          variantMapping: {
            primary: 'default',
            secondary: 'secondary'
          }
        }
      },
      feedback: {
        pattern: 'semantic.color.text.{item}_{variant}',
        variantMapping: {
          primary: 'default',
          secondary: 'secondary'
        }
      },
      product: {
        pattern: 'semantic.color.text.{item}_{variant}',
        variantMapping: {
          primary: 'default',
          secondary: 'secondary'
        }
      }
    }
  },

  // Elevation/depth: level map for this foundation (same as engine for consistency).
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
        spread: "{semantic.depth.spread.next}"
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
        spread: "{semantic.depth.spread.near}"
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
