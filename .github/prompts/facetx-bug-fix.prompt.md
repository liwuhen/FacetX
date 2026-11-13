---
name: 'SDD Bug Fix'
description: 'Run a structured bug-fix workflow: Reproduce -> Diagnose -> Plan -> Implement -> Verify.'
---

Use this workflow for bug reports and regressions.

## Inputs

- Bug report (issue number/URL)
- Environment details (platform, data source, version)
- Reproduction steps

## Phase 1: Specify the bug

1. Define current behavior and expected behavior.
2. Reproduce the issue with minimal steps.
3. Document scope:
   - Affected components
   - User impact
   - Severity

## Phase 2: Setup

Determine the contributor's git context:

1. Run `git remote get-url origin` to detect **fork** vs. **direct clone**.
   - URL contains `liwuhen/FacetX` → direct clone (core team).
   - Otherwise → fork (community contributor).
2. Follow the [branch naming guidance](../instructions/contributing.instructions.md#branch-naming) and target `main`.
3. For fork contributors, rebase on upstream `main`:
   ```sh
   git fetch upstream && git rebase upstream/main
   ```
4. **Optional — parallel work:** If this fix runs alongside other independent SDD tasks, set it up in a dedicated git worktree first (see [facetx-setup-worktree.prompt.md](./facetx-setup-worktree.prompt.md)) and run the rest of this workflow inside that worktree. This keeps each task on its own branch and checkout.

## Phase 3: Diagnose

1. Identify likely root cause.
2. Confirm root cause with code evidence or instrumentation.
3. Identify related code paths and potential side effects.

## Phase 4: Plan

1. Propose the smallest safe fix.
2. Define regression tests:
   - Unit tests via `@facetx-unit-test`
   - E2E tests via `@facetx-e2e-test` when behavior is integration-level
3. Define validation commands.

Human checkpoint:
- Wait for approval of diagnosis and fix strategy before editing files.

## Phase 5: Implement and verify

1. Implement the fix.
2. Add or update regression tests.
3. Run validation and report outcomes.

## Output format

- Reproduction status
- Root cause statement
- Planned fix
- Test changes
- Validation results
- Residual risks
