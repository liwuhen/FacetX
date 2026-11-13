// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import Panel from "@facetx/suite-base/components/Panel";
import DiagnosticStatusPanel from "@facetx/suite-base/panels/DiagnosticStatus/DiagnosticStatusPanel";
import { DEFAULT_CONFIG } from "@facetx/suite-base/panels/DiagnosticStatus/constants";

// Diagnostic - Detail
export default Panel(
  Object.assign(DiagnosticStatusPanel, {
    panelType: "DiagnosticStatusPanel",
    defaultConfig: DEFAULT_CONFIG,
  }),
);
