# @facetx/suite-base

This package contains core components used in FacetX.

## Quick start

When contributing to the [FacetX](https://github.com/liwuhen/FacetX) codebase, you can import from `@facetx/suite-base` at its top-level or from lower in its directory:

```plain
import { ExtensionInfo, ExtensionLoaderContext, IExtensionLoader } from "@facetx/suite-base";
import fuzzyFilter from "@facetx/suite-base/util/fuzzyFilter";
```

For a full list of the package's exports, reference its [`index.ts` file](https://github.com/liwuhen/FacetX/blob/main/packages/suite-base/src/index.ts).

## Telemetry

`@facetx/suite-base` includes an OpenTelemetry-backed implementation of the app's
`IAnalytics` abstraction (see [`services/telemetry/`](src/services/telemetry)), wired in via
[`AnalyticsProvider`](src/providers/AnalyticsProvider.tsx), and a generic
[`useInteractionCapture`](src/hooks/useInteractionCapture.ts) hook for wiring new UI click
sources into it without hand-writing a `logEvent()` call at every handler. Telemetry is enabled only when an `OTLP_ENDPOINT` is configured at build time.
