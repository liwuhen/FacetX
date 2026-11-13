// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { MarkOptional } from "ts-essentials";

import { LayoutData } from "@facetx/suite-base/context/CurrentLayoutContext/actions";
import { migratePanelsState as migrateLayoutState } from "../migrateLayout";
import { migrateLegacyToNewImagePanels } from "./migrateLegacyToNewImagePanels";

export function migratePanelsState(data: MarkOptional<LayoutData, "configById">): LayoutData {
  return migrateLegacyToNewImagePanels(migrateLayoutState(data));
}
