// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import {
  IDataSourceFactory,
  DataSourceFactoryInitializeArgs,
} from "@facetx/suite-base/context/PlayerSelectionContext";
import patrolRecording from "@facetx/suite-base/dataSources/samples/facetx-warehouse-patrol.mcap";
import { IterablePlayer } from "@facetx/suite-base/players/IterablePlayer";
import { DeserializingIterableSource } from "@facetx/suite-base/players/IterablePlayer/DeserializingIterableSource";
import { McapIterableSource } from "@facetx/suite-base/players/IterablePlayer/Mcap/McapIterableSource";
import { Player } from "@facetx/suite-base/players/types";

import { BenchmarkPipelineKind } from "./types";

/**
 * Loads an MCAP file by URL through the real production pipeline: `IterablePlayer` driving
 * `McapIterableSource` -> `DeserializingIterableSource` directly, with no `BenchmarkPlayer`
 * synthetic instrumentation wrapper. Benchmarks can use a bundled fixture or an explicit URL.
 */
class McapRealPipelineBenchmarkDataSourceFactory implements IDataSourceFactory {
  public readonly pipeline: BenchmarkPipelineKind = "real";

  public id = "mcap-real-pipeline";
  public type: IDataSourceFactory["type"] = "connection";
  public displayName = "MCAP (real pipeline)";
  public iconName: IDataSourceFactory["iconName"] = "FileASPX";
  public supportedFileTypes = [".mcap"];

  public formConfig = {
    fields: [
      {
        id: "url",
        label: "MCAP file URL",
        placeholder: "https://example.com/file.mcap",
        validate: (newValue: string): Error | undefined => {
          return this.#validateUrl(newValue);
        },
      },
    ],
  };

  public initialize(args: DataSourceFactoryInitializeArgs): Player | undefined {
    const url = args.params?.url;
    const usePatrolFixture = args.params?.fixture === "warehouse-patrol";
    if (url == undefined && !usePatrolFixture) {
      return undefined;
    }

    const mcapSource = new McapIterableSource(
      url != undefined ? { type: "url", url } : { type: "file", file: new Blob([patrolRecording]) },
    );
    const source = new DeserializingIterableSource(mcapSource);

    return new IterablePlayer({
      source,
      name: url ?? "FacetX Warehouse Patrol",
      sourceId: this.id,
      metricsCollector: args.metricsCollector,
      urlParams: url != undefined ? { url } : { fixture: "warehouse-patrol" },
    });
  }

  #validateUrl(newValue: string): Error | undefined {
    try {
      new URL(newValue);
      return undefined;
    } catch (err: unknown) {
      console.error(err);
      return new Error("Enter a valid url");
    }
  }
}

export { McapRealPipelineBenchmarkDataSourceFactory };
