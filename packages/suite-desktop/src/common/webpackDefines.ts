// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

// This is injected by DefinePlugin from the webpack config that builds these files
declare const FACETX_PRODUCT_NAME: string;
declare const FACETX_PRODUCT_VERSION: string;
declare const FACETX_PRODUCT_HOMEPAGE: string;

const productName = FACETX_PRODUCT_NAME;
const version = FACETX_PRODUCT_VERSION;
const homepage = FACETX_PRODUCT_HOMEPAGE;

export {
  homepage as FACETX_PRODUCT_HOMEPAGE,
  productName as FACETX_PRODUCT_NAME,
  version as FACETX_PRODUCT_VERSION,
};
