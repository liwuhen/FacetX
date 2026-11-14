# Contributing Conventions

These rules apply to all TypeScript and TSX files.

## Branch naming

Target `main` for pull requests. Use a short, descriptive, kebab-case branch name such as
`feature/improve-ai-experience` or `codex/fix-mcap-playback`.

## Component Structure

Every React component must follow this file organization:

| File | Purpose |
|------|---------|
| `index.tsx` | Entry point — manages exports only, no logic |
| `ComponentName.tsx` | Primary logic and rendering |
| `ComponentName.test.tsx` | Unit tests (Given-When-Then pattern) |
| `ComponentName.style.ts` | Styles using tss-react/mui |
| `types.ts` | Type definitions, interfaces, enums |
| `constants.ts` | Component-specific constants |
| `hooks/` | Custom hooks |
| `builders/` | Builder pattern classes for test data |
| `utils/` | Utility functions |

## TypeScript Rules

- **Strict mode** — avoid `any` types
- Prefer `undefined` over `null`; use `ReactNull` alias where React APIs require `null`
- Do NOT use property getters or setters — use function syntax
- Unused variables must have `_` prefix (e.g., `_unusedParam`)
- Use `@facetx/den/async` `race` instead of `Promise.race`
- Allowed console methods: `console.warn`, `console.error`, `console.debug`, `console.assert`

## Styling

- Use **tss-react/mui** (`makeStyles`) for all styles
- Do NOT use `@emotion/styled`, MUI's `styled()`, `sx` prop, or `Box` component for styling

## Testing

- All tests follow **Given-When-Then (GWT)** structure
- Use **Builder pattern** for mock data creation (`builders/` directories)
- Tests are colocated with source files: `*.test.ts` / `*.test.tsx`

## Localization

- Use `useTranslation(namespace)` → `t("key")` for user-facing strings
- Keys must be `camelCase`
- English translations mandatory; other languages optional
- Translation files: `packages/suite-base/src/i18n/{lang}/{namespace}.ts`

## License Header

Retain the existing copyright and license notices on inherited files. For original FacetX files released under [MIT](licenses/MIT.txt), use the applicable copyright notice and `SPDX-License-Identifier: MIT`. See the [README](../README.md#license) for license scope.
