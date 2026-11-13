// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { Fade } from "@mui/material";

import { OverrideComponentReturn } from "../types";

export const MuiTooltip: OverrideComponentReturn<"MuiTooltip"> = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },
  styleOverrides: {
    arrow: ({ theme }) => ({
      color: theme.palette.background.tooltip,
    }),
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.background.tooltip,
      color: theme.palette.common.white,
      fontWeight: "normal",
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};
