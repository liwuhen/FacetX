// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { SidebarItemBadge } from "@facetx/suite-base/components/Sidebars/types";
import { NotificationSeverity } from "@facetx/suite-base/util/sendNotification";

export function severityToBadgeColor(
  severity: NotificationSeverity | undefined,
): SidebarItemBadge["color"] {
  switch (severity) {
    case "warn":
      return "warning";
    case "info":
      return "info";
    default:
      return "error";
  }
}
