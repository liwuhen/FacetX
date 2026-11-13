// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

module.exports = {
  rules: {
    "link-target": require("./link-target"),
    "lodash-ramda-imports": require("./lodash-ramda-imports"),
    "ramda-usage": require("./ramda-usage"),
    "no-map-type-argument": require("./no-map-type-argument"),
  },

  configs: {
    all: {
      plugins: ["@facetx/suite"],
      rules: {
        "@facetx/suite/link-target": "error",
        "@facetx/suite/lodash-ramda-imports": "error",
        "@facetx/suite/ramda-usage": "error",
        "@facetx/suite/no-map-type-argument": "error",
      },
    },
  },
};
