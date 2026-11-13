// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { DataSourceFactoryInitializeArgs } from "@facetx/suite-base/context/PlayerSelectionContext";
import SamplePatrolDataSourceFactory from "@facetx/suite-base/dataSources/SamplePatrolDataSourceFactory";
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

jest.mock("@facetx/suite-base/players/IterablePlayer", () => ({
  IterablePlayer: jest.fn(),
}));

jest.mock("@facetx/suite-base/players/IterablePlayer/WorkerSerializedIterableSource", () => ({
  WorkerSerializedIterableSource: jest.fn(),
}));

describe("SamplePatrolDataSourceFactory", () => {
  let factory: SamplePatrolDataSourceFactory;

  beforeEach(() => {
    factory = new SamplePatrolDataSourceFactory();
    jest.clearAllMocks();
  });

  function setup() {
    const args: DataSourceFactoryInitializeArgs = {
      metricsCollector: jest.fn(),
    } as unknown as DataSourceFactoryInitializeArgs;

    return { args };
  }

  it("should create a IterablePlayer with the sample patrol data source", () => {
    // Given
    const { args } = setup();

    // When
    const player = factory.initialize(args);

    // Then
    expect(WorkerSerializedIterableSource).toHaveBeenCalledWith({
      initWorker: expect.any(Function),
      initArgs: { file: expect.objectContaining({ name: "facetx-warehouse-patrol.mcap" }) },
    });

    expect(IterablePlayer).toHaveBeenCalledWith({
      source: expect.any(Object),
      isSampleDataSource: true,
      name: SAMPLE_PATROL_DATA_SOURCE_NAME,
      metricsCollector: args.metricsCollector,
      urlParams: {},
      sourceId: SAMPLE_PATROL_DATA_SOURCE_ID,
      readAheadDuration: SAMPLE_PATROL_DATA_SOURCE_READ_AHEAD_DURATION,
    });
    expect(player).toBeInstanceOf(IterablePlayer);
  });

  it("should have correct factory properties", () => {
    //Given / When / Then
    expect(factory.id).toBe(SAMPLE_PATROL_DATA_SOURCE_ID);
    expect(factory.type).toBe(SAMPLE_PATROL_DATA_SOURCE_TYPE);
    expect(factory.displayName).toBe(SAMPLE_PATROL_DATA_SOURCE_DISPLAY_NAME);
    expect(factory.iconName).toBe(SAMPLE_PATROL_DATA_SOURCE_ICON_NAME);
    expect(factory.hidden).toBe(true);
    expect(factory.sampleLayout).toBeDefined();
  });
});
