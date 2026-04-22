# @aplica/tokens-themes-sample

_Git repository name:_ [`aplica-ds/aplica-tokens-themes-sample`](https://github.com/aplica-ds/aplica-tokens-themes-sample)

Sample **Aplica Design** themes: a ready-made **design token** workspace you can open in **Figma** with [**Tokens Studio**](https://docs.tokens.studio/) (PRO), plus a **reference build output** under `dist/`. The token sets and themes mirror the multi-layer architecture produced by the **Aplica Theme Engine**.

- **npm package:** [@aplica/tokens-themes-sample](https://www.npmjs.com/package/@aplica/tokens-themes-sample)
- **Product & ecosystem:** [Aplica DS — aplica.me](https://aplica.me/)
- **Generator package:** [@aplica/aplica-theme-engine on npm](https://www.npmjs.com/package/@aplica/aplica-theme-engine)
- **Tokens Studio docs:** [Tokens Studio for Figma](https://docs.tokens.studio/)
- **Source repository:** [github.com/aplica-ds/aplica-tokens-themes-sample](https://github.com/aplica-ds/aplica-tokens-themes-sample)

**Documentation in this repository is written in English.**

## License

This **repository** and the published npm package **`@aplica/tokens-themes-sample`** are licensed under the **MIT License**; see the [`LICENSE`](LICENSE) file. The upstream **@aplica/aplica-theme-engine** package has its own license on npm; keep that distinction in mind when copying engine sources or upgrading the generator.

## Install as an npm package

Published as **`@aplica/tokens-themes-sample`** (public scope). The published tarball includes **`data/`**, **`dist/`**, **`utils/`**, plus `README.md` and `LICENSE`. It does **not** include `theme-engine/` — clone the [GitHub repository](https://github.com/aplica-ds/aplica-tokens-themes-sample) for the full snapshot.

```bash
npm install @aplica/tokens-themes-sample
```

### Resolving paths in Node

Use `import.meta.resolve` (Node 20.10+ / 22), `createRequire`, or `path.join` with `fileURLToPath` against the package root:

```js
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const pkgRoot = path.dirname(require.resolve('@aplica/tokens-themes-sample/package.json'));
const themesPath = path.join(pkgRoot, 'data', '$themes.json');
```

### Subpath `exports`

The package exposes stable subpaths (see `package.json` → `exports`):

- `@aplica/tokens-themes-sample/package.json`
- `@aplica/tokens-themes-sample/data/*` (e.g. JSON under `data/`)
- `@aplica/tokens-themes-sample/dist/*` (compiled outputs)
- `@aplica/tokens-themes-sample/utils/*` (maintenance scripts)

**Tokens Studio** usually syncs from a **folder on disk** or a **Git** remote, not directly from `node_modules`. Typical workflow: copy `data/` out of the installed package, or point the plugin at a clone of this repo.

## What this repository is

1. **`data/`** — Token Studio–oriented JSON: token sets (brand, mode, surface, semantic, dimension, foundation, styles) and theme metadata (`$themes.json`, `$metadata.json`). This is the shape you sync or import when using **multi-file** token storage in Tokens Studio.
2. **`dist/`** — Example **compiled** token artifacts (JSON, ESM, CJS, TypeScript declarations) produced by the theme engine pipeline, useful as a reference for apps that consume tokens outside Figma.
3. **`theme-engine/`** — A **pinned snapshot** of configuration and schema-related files aligned with the npm engine version in `devDependencies`. Present in the **Git** repo only (not shipped in the npm tarball by default).
4. **`utils/`** — Small maintenance scripts (for example, stripping Figma-specific IDs from `$themes.json` after an export).

This repo is **not** a full fork of the engine runtime: it is a **consumable sample** of generated data. The engine version is tracked for **maintainers** who regenerate or align with upstream.

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

1. Clone this repository **or** install the npm package and copy `data/` to your sync root.
2. In Tokens Studio, configure **remote** or **multi-file** storage pointing at the `data/` folder.
3. Ensure **`$themes.json`** and **`$metadata.json`** are loaded so themes resolve correctly.
4. Open or create a Figma document and **pull** the token sets; switch themes using the plugin’s theme UI.

For **variables and styles** linking behavior, refer to Tokens Studio guides such as [Variables and Tokens Studio](https://docs.tokens.studio/) and related sections in their docs.

## npm scripts

| Script | Purpose |
| --- | --- |
| `npm run themes:clean-figma` | Resets `$figmaStyleReferences`, `figmaVariableReferences`, and `$figmaVariableReferences` to `{}` on each entry in `data/$themes.json` (sanitized sample, comparable to `data/$themes.engine.json.template`). |

## Relationship to `@aplica/aplica-theme-engine`

`@aplica/aplica-theme-engine` is listed under **`devDependencies`**: it is **not** installed for consumers of `@aplica/tokens-themes-sample` (the published tarball is asset-oriented). It records which engine generation this sample was aligned with when maintaining the repo.

To regenerate or extend tokens from source configs, use the **full Theme Engine** workflow documented with the package and on **[aplica.me](https://aplica.me/)**, then refresh `data/` and `dist/` according to your team’s process.

## Publishing (maintainers)

1. Ensure you are logged in to npm with a user that has **publish** rights on the **`@aplica`** scope.
2. Inspect the tarball: `npm pack` (review the generated `.tgz` contents; it should match the `files` list in `package.json`).
3. Publish: `npm publish` from the repository root.

## Making the GitHub repository public

If the repository is still private, an owner must set visibility to **public** in GitHub: **Settings → General → Danger zone → Change repository visibility → Public**. Review the tree for secrets before doing so.

Optional: add repository **topics** for discovery, for example `design-tokens`, `tokens-studio`, `figma`, `aplica-ds`.

## Contributing

Issues and pull requests are welcome. Keep **comments and commit messages in English** for consistency with the broader Aplica DS tooling ecosystem.

---

**Links:** [@aplica/tokens-themes-sample (npm)](https://www.npmjs.com/package/@aplica/tokens-themes-sample) · [Aplica DS](https://aplica.me/) · [@aplica/aplica-theme-engine (npm)](https://www.npmjs.com/package/@aplica/aplica-theme-engine) · [Tokens Studio docs](https://docs.tokens.studio/)
