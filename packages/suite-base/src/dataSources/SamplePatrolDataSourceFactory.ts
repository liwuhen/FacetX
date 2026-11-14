// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import {
  IDataSourceFactory,
  DataSourceFactoryInitializeArgs,
} from "@facetx/suite-base/context/PlayerSelectionContext";
import {
  SAMPLE_PATROL_DATA_SOURCE_DISPLAY_NAME,
  SAMPLE_PATROL_DATA_SOURCE_ICON_NAME,
  SAMPLE_PATROL_DATA_SOURCE_ID,
  SAMPLE_PATROL_DATA_SOURCE_NAME,
  SAMPLE_PATROL_DATA_SOURCE_READ_AHEAD_DURATION,
  SAMPLE_PATROL_DATA_SOURCE_TYPE,
} from "@facetx/suite-base/dataSources/constants";
import { IterablePlayer } from "@facetx/suite-base/players/IterablePlayer";
import { WorkerSerializedIterableSource } from "@facetx/suite-base/players/IterablePlayer/WorkerSerializedIterableSource";

import SamplePatrolLayout from "./SamplePatrolLayout.json";
import patrolRecording from "./samples/facetx-warehouse-patrol.mcap";

class SamplePatrolDataSourceFactory implements IDataSourceFactory {
  public id = SAMPLE_PATROL_DATA_SOURCE_ID;
  public type: IDataSourceFactory["type"] = SAMPLE_PATROL_DATA_SOURCE_TYPE;
  public displayName = SAMPLE_PATROL_DATA_SOURCE_DISPLAY_NAME;
  public iconName: IDataSourceFactory["iconName"] = SAMPLE_PATROL_DATA_SOURCE_ICON_NAME;
  public hidden = true;
  public legacyIds = ["sample-nuscenes"];
  public sampleLayout = SamplePatrolLayout as IDataSourceFactory["sampleLayout"];

  public initialize(
    args: DataSourceFactoryInitializeArgs,
  ): ReturnType<IDataSourceFactory["initialize"]> {
    const file = new File([patrolRecording], "facetx-warehouse-patrol.mcap");

    const source = new WorkerSerializedIterableSource({
      initWorker: () => {
        return new Worker(
          // facetx-depcheck-used: babel-plugin-transform-import-meta
          new URL(
            "@facetx/suite-base/players/IterablePlayer/Mcap/McapIterableSourceWorker.worker",
            import.meta.url,
          ),
        );
      },
      initArgs: { file },
    });

    return new IterablePlayer({
      source,
      isSampleDataSource: true,
      name: SAMPLE_PATROL_DATA_SOURCE_NAME,
      metricsCollector: args.metricsCollector,
      // Use blank url params so the data source is set in the url
      urlParams: {},
      sourceId: this.id,
      readAheadDuration: SAMPLE_PATROL_DATA_SOURCE_READ_AHEAD_DURATION,
    });
  }
}

export default SamplePatrolDataSourceFactory;
