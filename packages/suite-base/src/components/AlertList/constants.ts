// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { MessagePipelineContext } from "@facetx/suite-base/components/MessagePipeline";
import { AlertsContextStore } from "@facetx/suite-base/context/AlertsContext";
import { PlayerAlert } from "@facetx/suite-base/players/types";

export const EMPTY_PLAYER_ALERTS: PlayerAlert[] = [];

export const selectPlayerAlerts = ({
  playerState,
}: MessagePipelineContext): readonly PlayerAlert[] | undefined =>
  playerState.alerts ?? EMPTY_PLAYER_ALERTS;

export const selectAlerts = (store: AlertsContextStore): AlertsContextStore["alerts"] =>
  store.alerts;

export const selectDismissedPlayerAlertKeys = (
  store: AlertsContextStore,
): AlertsContextStore["dismissedPlayerAlertKeys"] => store.dismissedPlayerAlertKeys;
