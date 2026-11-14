// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { info } from "@actions/core";
import path from "path";
import { analyzeTsConfig } from "ts-unused-exports";

// Identify unused exports
//
// An export is considered unused if it is never imported in any source file.
//
// Note: use the "// ts-unused-exports:disable-next-line" comment above an export if you would like to mark it
// as used even though it appears unused. This might happen for exports which are injected via webpack.
async function findUnreferencedSuiteExports(): Promise<void> {
  const repositoryRoot = path.resolve(__dirname, "../..");
  const referenceReport = analyzeTsConfig(
    path.join(repositoryRoot, "packages/suite-base/tsconfig.json"),
    ["--findCompletelyUnusedFiles", "--ignoreLocallyUsed"],
  );
  const pathsOutsideExportCheck = new RegExp(
    [
      String.raw`\.stories\.tsx?$`,
      String.raw`packages/suite-base/src/index\.ts`,
      String.raw`packages/suite-base/src/panels/ThreeDeeRender/transforms/index\.ts`, // `export *` is not correctly analyzed <https://github.com/pzavolinsky/ts-unused-exports/issues/286>
      String.raw`packages/suite-base/src/test/`,
    ].join("|"),
  );

  let hasUnreferencedCode = false;

  for (const [filePath, items] of Object.entries(referenceReport.unusedExports)) {
    if (filePath === "unusedFiles") {
      continue;
    }
    const repositoryRelativePath = path.relative(repositoryRoot, filePath);
    if (pathsOutsideExportCheck.test(repositoryRelativePath)) {
      continue;
    }
    for (const item of items) {
      // In reality, sometimes item.location is undefined
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (item.location == undefined) {
        info(
          `::error file=${repositoryRelativePath}::Unused export ${item.exportName} in ${repositoryRelativePath}`,
        );
      } else {
        info(
          `::error file=${repositoryRelativePath},line=${item.location.line},col=${item.location.character}::Unused export ${item.exportName} in ${repositoryRelativePath}:${item.location.line}:${item.location.character}`,
        );
      }
      hasUnreferencedCode = true;
    }
  }

  for (const filePath of referenceReport.unusedFiles ?? []) {
    const repositoryRelativePath = path.relative(repositoryRoot, filePath);
    if (pathsOutsideExportCheck.test(repositoryRelativePath)) {
      continue;
    }
    info(`::error file=${repositoryRelativePath}::Unused file ${repositoryRelativePath}`);
    hasUnreferencedCode = true;
  }
  process.exit(hasUnreferencedCode ? 1 : 0);
}

if (require.main === module) {
  findUnreferencedSuiteExports().catch((e: unknown) => {
    console.error(e);
    process.exit(1);
  });
}
