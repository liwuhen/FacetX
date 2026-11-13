// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { AppSettingsSectionKey } from "@facetx/suite-base/components/AppSettingsDialog/types";
import { FACETX_DOCUMENTATION_LINK } from "@facetx/suite-base/constants/documentation";

export const APP_SETTINGS_ABOUT_ITEMS = new Map<
  AppSettingsSectionKey,
  {
    subheader: string;
    links: { title: string; url?: string }[];
  }
>([
  [
    "documentation",
    {
      subheader: "Documentation",
      links: [
        {
          title: "Check out our documentation",
          url: FACETX_DOCUMENTATION_LINK,
        },
      ],
    },
  ],
  [
    "legal",
    {
      subheader: "Legal",
      links: [
        {
          title: "License terms",
          url: "https://github.com/liwuhen/FacetX/blob/main/docs/licenses/MPL-2.0.txt",
        },
      ],
    },
  ],
]);
