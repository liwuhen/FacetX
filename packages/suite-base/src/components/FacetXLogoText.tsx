// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

import { FacetXMark } from "./FacetXLogo";

export default function FacetXLogoText(props: SvgIconProps): React.JSX.Element {
  return (
    <SvgIcon viewBox="0 0 150 36" {...props}>
      <title>FacetX</title>
      <g transform="scale(1.5)">
        <FacetXMark />
      </g>
      <text
        x="42"
        y="27"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
        fontSize="28"
        fontWeight="700"
      >
        FacetX
      </text>
    </SvgIcon>
  );
}
