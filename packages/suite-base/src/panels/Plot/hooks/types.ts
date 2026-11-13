// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { MutableRefObject } from "react";

import type { OffscreenCanvasRenderer } from "@facetx/suite-base/panels/Plot/OffscreenCanvasRenderer";
import type { PlotCoordinator } from "@facetx/suite-base/panels/Plot/PlotCoordinator";
import { DeltaMarker } from "@facetx/suite-base/panels/shared/types";

export type UseDeltaMeasureModeProps = {
  coordinator: PlotCoordinator | undefined;
  renderer: OffscreenCanvasRenderer | undefined;
  draggingRef: MutableRefObject<boolean>;
  /** Markers are cleared (but the mode stays active) whenever this value changes. */
  resetKey?: string;
};

export type UseDeltaMeasureModeResult = {
  active: boolean;
  toggleActive: () => void;
  markerA: DeltaMarker | undefined;
  markerB: DeltaMarker | undefined;
  removeMarkerA: () => void;
  removeMarkerB: () => void;
  handleCanvasClick: (event: React.MouseEvent<HTMLElement>) => void;
};
