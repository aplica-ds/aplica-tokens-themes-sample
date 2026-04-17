# Foundation Configurations

This directory contains configurations for generating foundation token files and **foundation styles** (typography_styles.json, elevation_styles.json).

## Por que os estilos estão aqui (e não em `config/`)?

- **Styles são parte da foundation**: engine e sample podem ter conjuntos diferentes (ex.: sample com mais estilos de typography).
- **Reflete as fundações**: cada foundation config (`engine.config.mjs`, `sample.config.mjs`) pode opcionalmente definir uma seção `styles` para sobrescrever o shared.
- **Single source of truth**: `foundation-styles.shared.mjs` declara a estrutura base; o generator usa esse shared e, se o config da foundation tiver `styles`, faz merge/override.

## Foundation Styles (typography_styles.json, elevation_styles.json)

A definição base dos estilos fica em **`foundation-styles.shared.mjs`**:

- **Typography**: categorias (heading, body, label, code), nomes por categoria, template de token e descrição padrão.
- **Elevation**: níveis (level_minus_one … level_six), template de token e descrição padrão.
- **Mapeamento**: `FOUNDATION_STYLES_KEY` (ex.: engine → theme_engine) para a chave usada no JSON.

O script `generate-foundation-styles.mjs` usa esse shared por padrão. Se um foundation config exportar `styles` (ex.: `styles: { typography: { structure: {...} }, elevation: { levels: [...] } }`), esses valores sobrescrevem o shared para aquela foundation.

## Structure

Each configuration file (`.config.mjs`) defines:
- **Expected structure**: Which sections and items should be generated
- **Reference mappings**: How to build references to semantic tokens

## Configuration Files

### `engine.config.mjs`
Configuration for `data/foundation/engine/default.json`
- **Hybrid approach**: Uses both direct mapping AND structure-based patterns
- Uses intensity levels (`lowest`, `default`, `highest`) for brand/neutral
- Uses variants (`default`, `secondary`) for feedback/product
- Standard engine structure
- **Example of**: Direct mapping + structure-based patterns combined

### `sample.config.mjs`
Configuration for `data/foundation/sample/default.json`
- **Structure-based only**: Uses ONLY pattern-based generation (no direct mapping)
- Uses semantic naming (`main`, `intermediate`, `secondary`, `tertiary`) for brand/neutral
- Uses variants (`primary`, `secondary`) for feedback/product
- Alternative structure with different products (rewards, cold, time_bomb, rgb)
- **Example of**: Pure structure-based approach with patterns only

## Usage

### Generate all foundations (recommended):
```bash
npm run foundations:generate
```

This will:
- Generate all foundations from configurations
- Automatically validate each foundation
- Save validation reports in `.validation/` directories

### Generate a specific foundation:
```bash
node dynamic-themes/scripts/generate-foundation.mjs ./configs/foundations/engine.config.mjs
```

### Validate a foundation manually:
```bash
npm run foundations:validate data/foundation/engine/default.json
```

## Configuration Structure

Each configuration file exports an object with:

```javascript
export default {
  name: 'foundation_name',
  outputPath: 'data/foundation/path/default.json',
  
  structure: {
    bg: { /* background structure */ },
    border: { /* border structure */ },
    txt: { /* text structure */ },
    opacity: true,  // or false
    sizing: true,
    spacing: true,
    typography: true
  },
  
  references: {
    bg: { /* reference mappings for backgrounds */ },
    border: { /* reference mappings for borders */ },
    txt: { /* reference mappings for texts */ }
  }
}
```

## Hybrid Approach: Direct Mapping + Structure-Based

The system supports **two approaches** for defining token references. You can see examples of both:

- **`engine.config.mjs`**: Demonstrates **hybrid approach** (direct mapping + structure-based)
- **`sample.config.mjs`**: Demonstrates **structure-based only** (patterns only, no direct mapping)

### Two Approaches Available:

### 1. Direct Mapping (Flexible)

Define custom token names with direct semantic references. Perfect for one-off tokens or custom naming:

```javascript
references: {
  bg: {
    // Direct mapping - any custom name you want
    primary: 'semantic.color.brand.ambient.contrast.deep.light.background',
    secondary: 'semantic.color.brand.ambient.neutral.lowest.background',
    custom_brand_low: 'semantic.color.brand.branding.first.lowest.background',
    my_special_token: 'semantic.color.interface.feedback.info.default.default.background'
  }
}
```

**Generated:** `foundation.bg.primary`, `foundation.bg.secondary`, `foundation.bg.custom_brand_low`, etc.

### 2. Structure-Based (Pattern Generation)

Use structure definitions with patterns for automatic generation. Perfect for consistent patterns:

```javascript
structure: {
  bg: {
    feedback: {
      items: ['info', 'success', 'warning', 'danger'],
      variants: ['default', 'secondary']
    }
  }
},
references: {
  bg: {
    feedback: {
      pattern: 'semantic.color.interface.feedback.{item}.{variant}.default.background'
    }
  }
}
```

**Generated:** `foundation.bg.feedback.info.default`, `foundation.bg.feedback.info.secondary`, etc.

### When to Use Each

| Approach | Use When | Example |
|----------|----------|---------|
| **Direct Mapping** | Custom token names, one-off references, maximum flexibility | `custom_brand_low`, `my_special_token` |
| **Structure-Based** | Consistent patterns, multiple items/variants, less verbosity | `feedback`, `product` with multiple items |

### Combining Both

You can mix both approaches in the same configuration:

```javascript
references: {
  bg: {
    // Direct mapping
    primary: 'semantic.color.brand.ambient.contrast.deep.light.background',
    custom_token: 'semantic.color.brand.branding.first.default.background',
    
    // Structure-based
    brand: {
      first: {
        lowest: 'semantic.color.brand.branding.first.lowest.background',
        default: 'semantic.color.brand.branding.first.default.background'
      }
    },
    feedback: {
      pattern: 'semantic.color.interface.feedback.{item}.{variant}.default.background'
    }
  }
}
```

**Note:** Direct mappings are processed first. If a key exists in both structure and direct mapping, structure-based takes precedence.

## Example: Custom Token with Direct Mapping

You can add custom tokens using direct mapping without defining them in structure:

```javascript
references: {
  bg: {
    // These are direct mappings - no structure definition needed
    my_custom_primary: 'semantic.color.brand.branding.first.default.background',
    my_custom_secondary: 'semantic.color.brand.branding.second.default.background',
    special_token: 'semantic.color.interface.feedback.info.default.default.background',
    
    // Structure-based tokens (defined in structure)
    brand: { /* ... */ },
    feedback: { pattern: '...' }
  }
}
```

This gives you complete control over token names while still using patterns for repetitive structures.

## Naming Patterns

### Intensity Naming
- `lowest`, `default`, `highest`
- Used for brand/neutral with intensity levels

### Semantic Naming
- `main`, `intermediate`, `secondary`, `tertiary`
- Used for alternative semantic structures

### Variant Naming
- `default`, `secondary` or `primary`, `secondary`
- Used for feedback/product with variants

## Structure Definition

The structure for each foundation is defined entirely in its configuration file. Unlike architecture tokens (which use a shared schema for consistency), foundations are free to have different structures as needed.

Fixed structures (sizing, spacing, opacity) are defined directly in the generation script since they are always the same regardless of foundation type.

## Validation

When a foundation is generated, it is automatically validated against semantic tokens. The validation:

- Checks that all token references exist in `data/semantic/default.json`
- Generates a validation report in `data/foundation/{name}/.validation/`
- Shows validation results in the terminal during generation
- Provides suggestions for missing tokens

### Validation Reports

Two files are generated in `.validation/` directory:
- `{name}.validation.json` - Machine-readable validation results
- `{name}.validation.txt` - Human-readable validation report

### Running Validation Manually

You can also validate a foundation file directly:

```bash
node dynamic-themes/scripts/foundation-validator.mjs data/foundation/engine/default.json
```
