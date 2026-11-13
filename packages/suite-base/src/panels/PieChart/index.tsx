// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// SPDX-FileCopyrightText: Copyright (C) 2024-2025 Yukihiro Saito <yukky.saito@gmail.com>
// SPDX-License-Identifier: MPL-2.0

import { useMemo } from "react";

import { useCrash } from "@facetx/hooks";
import { PanelExtensionContext } from "@facetx/suite";
import { CaptureErrorBoundary } from "@facetx/suite-base/components/CaptureErrorBoundary";
import Panel from "@facetx/suite-base/components/Panel";
import { PanelExtensionAdapter } from "@facetx/suite-base/components/PanelExtensionAdapter";
import { createSyncRoot } from "@facetx/suite-base/panels/createSyncRoot";
import ThemeProvider from "@facetx/suite-base/theme/ThemeProvider";
import { SaveConfig } from "@facetx/suite-base/types/panels";

import { PieChart } from "./PieChart";
import { PieChartConfig } from "./types";

function initPanel(crash: ReturnType<typeof useCrash>, context: PanelExtensionContext) {
  return createSyncRoot(
    <CaptureErrorBoundary onError={crash}>
      <ThemeProvider isDark>
        <PieChart context={context} />
      </ThemeProvider>
    </CaptureErrorBoundary>,
    context.panelElement,
  );
}

type PieChartPanelAdapterProps = {
  config: PieChartConfig;
  saveConfig: SaveConfig<PieChartConfig>;
};

function PieChartPanelAdapter(props: PieChartPanelAdapterProps) {
  const crash = useCrash();
  const boundInitPanel = useMemo(() => initPanel.bind(undefined, crash), [crash]);

  return (
    <PanelExtensionAdapter
      config={props.config}
      saveConfig={props.saveConfig}
      initPanel={boundInitPanel}
      highestSupportedConfigVersion={1}
    />
  );
}

PieChartPanelAdapter.panelType = "PieChart";
PieChartPanelAdapter.defaultConfig = {};

export default Panel(PieChartPanelAdapter);
