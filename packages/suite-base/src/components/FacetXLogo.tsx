// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export function FacetXLogo(props: SvgIconProps): React.JSX.Element {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <title>FacetX</title>
      <FacetXMark />
    </SvgIcon>
  );
}

export function FacetXMark(): React.JSX.Element {
  return (
    <>
      <path fill="#07656C" d="M3 4h6l3 5v2.7L6 9.3ZM21 20h-6l-3-5v-2.7l6 2.4Z" />
      <path fill="#00B9B2" d="M21 4h-6l-3 5v2.7l6-2.4ZM3 20h6l3-5v-2.7l-6 2.4Z" />
    </>
  );
}
