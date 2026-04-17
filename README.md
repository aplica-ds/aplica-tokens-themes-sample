# aplica-tokens-themes-sample

Sample **Aplica Design** themes: a ready-made **design token** workspace you can open in **Figma** with [**Tokens Studio**](https://docs.tokens.studio/) (PRO), plus a **reference build output** under `dist/`. The token sets and themes mirror the multi-layer architecture produced by the **Aplica Theme Engine**.

- **Product & ecosystem:** [Aplica DS — aplica.me](https://aplica.me/)
- **Generator package:** [@aplica/aplica-theme-engine on npm](https://www.npmjs.com/package/@aplica/aplica-theme-engine)
- **Tokens Studio docs:** [Tokens Studio for Figma](https://docs.tokens.studio/)

**Documentation in this repository is written in English.**

## License

This **repository** is licensed under the **MIT License**. The MIT terms apply to the files shipped here (sample data, scripts, and `dist/` output layout as published in this repo). The upstream **@aplica/aplica-theme-engine** package has its own license on npm; keep that distinction in mind when copying engine sources or upgrading the dependency.

## What this repository is

1. **`data/`** — Token Studio–oriented JSON: token sets (brand, mode, surface, semantic, dimension, foundation, styles) and theme metadata (`$themes.json`, `$metadata.json`). This is the shape you sync or import when using **multi-file** token storage in Tokens Studio.
2. **`dist/`** — Example **compiled** token artifacts (JSON, ESM, CJS, TypeScript declarations) produced by the theme engine pipeline, useful as a reference for apps that consume tokens outside Figma.
3. **`theme-engine/`** — A **pinned snapshot** of configuration and schema-related files aligned with the npm engine version declared in `package.json`. It documents how this sample was produced; day-to-day generation and deep docs live in the main Theme Engine project and on [aplica.me](https://aplica.me/).
4. **`utils/`** — Small maintenance scripts (for example, stripping Figma-specific IDs from `$themes.json` after an export).

This repo is **not** a full fork of the engine runtime: it is a **consumable sample** of generated data plus a declared dependency on `@aplica/aplica-theme-engine` for versioning and reproducibility.

## Compatibility: Tokens Studio (PRO)

**Themes** in Tokens Studio (including **theme groups**, **sources**, and **enabled** token sets) are a **PRO** capability. This sample’s `$themes.json` is authored for that workflow.

- Official documentation: [https://docs.tokens.studio/](https://docs.tokens.studio/) (themes, sync, Figma variables/styles integration).
- After pulling tokens from a real Figma file, you may see Figma style/variable reference maps repopulated. For a clean, shareable repo state (empty reference objects, similar to `data/$themes.engine.json.template`), run:

  ```bash
  npm install
  npm run themes:clean-figma
  ```

## Architecture (high level)

The **Aplica Theme Engine** builds a **semantic, five-layer** token model (brand → mode → surface → semantic → foundation), described on [aplica.me](https://aplica.me/). In this sample you will see that structure reflected in paths such as:

| Area | Example paths under `data/` |
| --- | --- |
| Brand | `data/brand/<theme_name>/` (`_brand.json`, `_typography.json`, …) |
| Mode | `data/mode/light.json`, `data/mode/dark.json` |
| Surface | `data/surface/positive.json`, `data/surface/negative.json` |
| Semantic | `data/semantic/default.json` |
| Dimension | `data/dimension/normal.json`, `minor.json`, `major.json` |
| Foundation | `data/foundation/engine/`, `data/foundation/sample/` |
| Styles | `data/foundation/**/styles/` (e.g. typography and elevation styles) |

Use **`$themes.json`** together with **`$metadata.json`** so Tokens Studio knows which token sets belong to which theme and how they combine (e.g. brand + mode + surface + semantic + dimension).

## Prerequisites

- **Node.js** (for `npm install` and utility scripts).
- **Figma** with [**Tokens Studio**](https://docs.tokens.studio/) — **PRO** for full themes support as used here.

## Quick start (Tokens Studio)

Exact UI steps can change with plugin versions; always cross-check with the [official Tokens Studio documentation](https://docs.tokens.studio/).

1. Clone this repository.
2. In Tokens Studio, configure **remote** or **multi-file** storage pointing at this repo’s `data/` folder (or copy `data/` into your sync root).
3. Ensure **`$themes.json`** and **`$metadata.json`** are loaded so themes resolve correctly.
4. Open or create a Figma document and **pull** the token sets; switch themes using the plugin’s theme UI.

For **variables and styles** linking behavior, refer to Tokens Studio guides such as [Variables and Tokens Studio](https://docs.tokens.studio/) and related sections in their docs.

## npm scripts

| Script | Purpose |
| --- | --- |
| `npm run themes:clean-figma` | Resets `$figmaStyleReferences`, `figmaVariableReferences`, and `$figmaVariableReferences` to `{}` on each entry in `data/$themes.json` (sanitized sample, comparable to `data/$themes.engine.json.template`). |

## Relationship to `@aplica/aplica-theme-engine`

The dependency:

```json
"@aplica/aplica-theme-engine": "^3.3.2"
```

tracks which engine generation this sample was built against. To regenerate or extend tokens from source configs, use the **full Theme Engine** workflow documented with the package and on **[aplica.me](https://aplica.me/)**, then refresh `data/` and `dist/` according to your team’s process.

## Contributing

Issues and pull requests are welcome. Keep **comments and commit messages in English** for consistency with the broader Aplica DS tooling ecosystem.

---

**Links:** [Aplica DS](https://aplica.me/) · [@aplica/aplica-theme-engine (npm)](https://www.npmjs.com/package/@aplica/aplica-theme-engine) · [Tokens Studio docs](https://docs.tokens.studio/)
