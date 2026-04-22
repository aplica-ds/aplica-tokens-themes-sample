---
name: aplica-ui-integration
description: Creates or modifies UI components using the Aplica Design System Semantic tokens. Use when the user asks to build or style components in React, HTML, CSS, or Headless UI libraries (like Base UI / Radix).
---

# Aplica DS UI Components Integration

This is a triggered workflow to integrate Design Tokens (Semantics) into the construction of screens and components.
You MUST adopt the architectural rules defined in the Aplica Agnostic manual.

### Immediate Action
Read the full guide before writing any UI or styling code:

**=> READ THE SOURCE OF TRUTH:** `docs/context/aplica-ui-integration.md` at the root of the Consumer's project.

### Vital Rules (Restrictions)
- Never output raw static values (`px`, `hex` colors, `#000`, `rgba()`, hardcoded `box-shadow`) unless explicitly requested.
- Always check the compiled token outputs in `dist/` to confirm the exact variable name format before writing code.
- Token format is structurally agnostic — it could be CSS vars (`--semantic-*`), JS objects (`themes.color.*`), JSON, etc. Never guess.
- Use `semantic` tokens for all UI intent. Never reference foundation tokens directly in components.

### Typography: Always use named composite text styles
Never decompose typography manually (no individual `font-size`, `font-weight`, `line-height`). Always use the style token as a whole:

- **Buttons / CTAs:** always `action.strong.tight` → e.g. `var(--semantic-typography-styles-action-strong-tight-medium)`
  - Size mapping: button `sm` → `small` | `md` → `medium` | `lg` → `large`
- **Body text:** `content.body` / `content.body_small`
- **Form labels:** `content.label`
- **Alerts / notifications:** `content.informative`
- **Meta / footnotes:** `content.meta`
- **Page titles:** `heading.title_1` (uppercase) or `hierarchy.headline_1`
- **Marketing / hero:** `display.display_1`

### Elevation: Always use elevation style tokens for shadows
Never hardcode `box-shadow`. Map components to the correct semantic elevation level:

| Component type | Token |
|---|---|
| Cards / panels | `var(--semantic-elevation-level_one)` |
| Dropdowns / context menus | `var(--semantic-elevation-level_two)` |
| Popovers / tooltips | `var(--semantic-elevation-level_three)` |
| Modals / Dialogs | `var(--semantic-elevation-level_four)` |
| Drawers / side sheets | `var(--semantic-elevation-level_five)` |
| Toasts / full-screen overlays | `var(--semantic-elevation-level_six)` |

### Opacity: Use semantic opacity tokens for overlays and scrims
Never use raw `rgba()`. Reference `--semantic-opacity-color-grayscale-{level}`:
- `superTransparent` → very light hover ghost
- `translucid` → standard dialog backdrop
- `semiOpaque` → heavy loading overlay

### Critical: Portal Pattern for Headless UI
When building Dialog, Tooltip, Dropdown, or Popover components with headless libraries (Base UI, Radix, Floating UI), those components render via a **Portal** — attached directly to `document.body`, outside the React app root.

**Apply the Aplica theme class to `document.body`**, not just the root `<div>`:

```ts
// In main.tsx / _app.tsx / entry point — ALWAYS do this
document.body.classList.add('aplica-[theme-name]')
```

CSS variables (`--semantic-*`) only cascade to descendant elements. Portals are siblings of the root div, so without the class on `<body>`, all token values will be missing inside the Portal.
