---
applyTo: "**/*.{js,jsx,ts,tsx,css,scss,html,vue,svelte}"
description: "Aplica token-driven UI integration workflow for building or reviewing components with the active contract and validated archetypes."
---

# Aplica UI Integration

Use the active Aplica AI/UI contract when building or reviewing UI components.

## Read first

- `docs/context/ai-ui/UI_TOKEN_CONSUMPTION_CONTRACT.md`
- `docs/context/ai-ui/COMPONENT_ARCHETYPES.md`
- `docs/context/aplica-ui-integration.md`
- `docs/context/tokens/token-usage-for-components-and-figma.md`
- `docs/context/ai-ui/TYPOGRAPHY_AND_ELEVATION_STYLE_USAGE.md`

## Workflow

1. Inspect real compiled outputs first.
2. Choose the closest validated archetype.
3. Default to semantic intent.
4. Prefer sanctioned generated typography and elevation styles.
5. Implement from the contract and archetypes, not from guessed variable names.

## Rules

- Never hardcode token-owned values such as `px`, `hex`, `rgba()`, raw shadows, or ad hoc radii unless explicitly requested.
- Never guess token names, prefixes, or output formats.
- Use semantic as the default component layer.
- Use foundation only when a real alias improves readability without bypassing semantic intent.
- Prefer sanctioned generated typography and elevation styles.
- Validate portal-aware theming explicitly for Base UI and Radix overlays.

## Visual rules to preserve

- bordered and borderless variants keep the same outer dimensions
- peer controls in the same family align in height
- Aplica demo buttons use pill shape
- badges/tags use compact action styles
- select items behave like full rows, not floating pills

## Boundary

Do not silently change:

- generated token descriptions
- generated `data/`
- schemas
- engine scripts
- output contracts

Escalate those gaps to the operator instead.
