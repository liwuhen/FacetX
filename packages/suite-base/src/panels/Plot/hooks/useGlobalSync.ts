// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { Dispatch, SetStateAction, useEffect } from "react";

import { Immutable } from "@facetx/suite";
import { Bounds1D } from "@facetx/suite-base/components/TimeBasedChart/types";
import {
  TimelineInteractionStateStore,
  useTimelineInteractionState,
} from "@facetx/suite-base/context/TimelineInteractionStateContext";
import { PlotCoordinator } from "@facetx/suite-base/panels/Plot/PlotCoordinator";

const selectGlobalBounds = (store: TimelineInteractionStateStore) => store.globalBounds;
const selectSetGlobalBounds = (store: TimelineInteractionStateStore) => store.setGlobalBounds;

const useGlobalSync = (
  coordinator: PlotCoordinator | undefined,
  setCanReset: Dispatch<SetStateAction<boolean>>,
  { shouldSync }: { shouldSync: boolean },
  subscriberId: string,
): void => {
  const globalBounds = useTimelineInteractionState(selectGlobalBounds);
  const setGlobalBounds = useTimelineInteractionState(selectSetGlobalBounds);

  useEffect(() => {
    if (globalBounds?.sourceId === subscriberId || !shouldSync) {
      return;
    }

    coordinator?.setGlobalBounds(globalBounds);
  }, [coordinator, globalBounds, shouldSync, subscriberId]);

  useEffect(() => {
    if (!coordinator) {
      return;
    }

    const onTimeseriesBounds = (newBounds: Immutable<Bounds1D>) => {
      setGlobalBounds({
        min: newBounds.min,
        max: newBounds.max,
        sourceId: subscriberId,
        userInteraction: true,
      });
    };

    coordinator.on("timeseriesBounds", onTimeseriesBounds);
    coordinator.on("viewportChange", setCanReset);
    return () => {
      coordinator.off("timeseriesBounds", onTimeseriesBounds);
      coordinator.off("viewportChange", setCanReset);
    };
  }, [coordinator, setCanReset, setGlobalBounds, shouldSync, subscriberId]);
};

export default useGlobalSync;
