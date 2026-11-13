// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { PaletteOptions } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    name: string;
    appBar: {
      main: CSSProperties["color"];
      selected: CSSProperties["color"];
      text: CSSProperties["color"];
    };
  }
  interface PaletteOptions {
    name: string;
    appBar: {
      main: CSSProperties["color"];
      selected: CSSProperties["color"];
      text: CSSProperties["color"];
    };
  }
  interface TypeBackground {
    menu: string;
    sidebar: string;
    input: string;
    tooltip: string;
  }
}

// DeepSeek Harness 0.2.1-rc.5 design platform color tokens and sidebar fallback fills.
export const dark: PaletteOptions = {
  name: "dark",
  mode: "dark",
  tonalOffset: 0.15,
  appBar: {
    main: "#1B1B1C",
    selected: "#43454A",
    text: "#F9FAFB",
  },
  primary: { main: "#F9FAFB", dark: "#EBEEF2", contrastText: "#0F1115" },
  secondary: { main: "#CFD3D6" },
  error: { main: "#F25A5A" },
  warning: { main: "#F59E0B" },
  success: { main: "#22C55E" },
  info: { main: "#7AAAFF" },
  text: {
    primary: "#F9FAFB",
    secondary: "#CFD3D6",
    disabled: "#81858C",
  },
  divider: "#FFFFFF1F",
  background: {
    default: "#151517",
    paper: "#232324",
    menu: "#303136F0",
    sidebar: "#1B1B1C",
    input: "#2C2C2E",
    tooltip: "#43454A",
  },
  action: {
    active: "#CFD3D6",
    hover: "#FFFFFF14",
    hoverOpacity: 0.08,
    selected: "#FFFFFF24",
    selectedOpacity: 0.14,
    focus: "#FFFFFF3D",
    focusOpacity: 0.24,
    disabled: "#81858C",
    disabledBackground: "#43454A",
  },
  grey: {
    50: "#151517",
    100: "#1B1B1C",
    200: "#232324",
    300: "#2C2C2E",
    400: "#353638",
    500: "#43454A",
    600: "#545557",
    700: "#61666B",
    800: "#81858C",
    900: "#979DA6",
    A100: "#353638",
    A200: "#61666B",
    A400: "#ADB2B8",
    A700: "#CFD3D6",
  },
};

export const light: PaletteOptions = {
  name: "light",
  mode: "light",
  tonalOffset: 0.22,
  appBar: {
    main: "#F9FAFB",
    selected: "#EBEEF2",
    text: "#0F1115",
  },
  primary: { main: "#0F1115", dark: "#43454A", contrastText: "#FFFFFF" },
  secondary: { main: "#61666B" },
  error: { main: "#EC1313" },
  warning: { main: "#F59E0B" },
  success: { main: "#22C55E" },
  info: { main: "#4176E6" },
  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
    menu: "#F8F9FAF0",
    sidebar: "#F9FAFB",
    input: "#FFFFFF",
    tooltip: "#2C2C2E",
  },
  text: {
    primary: "#0F1115",
    secondary: "#61666B",
    disabled: "#ADB2B8",
  },
  divider: "#0000001A",
  action: {
    active: "#61666B",
    hover: "#2631480F",
    hoverOpacity: 0.06,
    selected: "#2631481A",
    selectedOpacity: 0.1,
    focus: "#26314824",
    focusOpacity: 0.14,
    disabled: "#ADB2B8",
    disabledBackground: "#EBEEF2",
  },
  grey: {
    50: "#F9FAFB",
    100: "#F5F6F7",
    200: "#F1F3F5",
    300: "#EBEEF2",
    400: "#CFD3D6",
    500: "#ADB2B8",
    600: "#979DA6",
    700: "#81858C",
    800: "#61666B",
    900: "#43454A",
    A100: "#E9ECF2",
    A200: "#ADB2B8",
    A400: "#61666B",
    A700: "#0F1115",
  },
};
