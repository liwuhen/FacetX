// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { test, expect } from "@playwright/test";

import { TEST_MCAP_PATH } from "../../../fixtures/urls";
import { PlayerControls } from "../../../page-objects";

test("should open an MCAP file via URL", { tag: "@smoke" }, async ({ page, baseURL }) => {
  const player = new PlayerControls(page);

  // Given
  const url = new URL(TEST_MCAP_PATH, baseURL).href;
  await page.goto(`/?ds=remote-file&ds.url=${encodeURIComponent(url)}`);

  // When
  const sourceTitle = page.getByTitle(url, { exact: true });
  const playButton = page.getByRole("button", { name: "Play", exact: true });
  const pauseButton = page.getByRole("button", { name: "Pause", exact: true });

  // Then
  await expect(sourceTitle).toBeVisible();
  await expect(playButton).toBeEnabled();

  // When
  await player.getProgressPlot().waitFor({ state: "hidden" });
  await playButton.click();

  // Then
  await expect(playButton).not.toBeVisible();
  await expect(pauseButton).toBeEnabled();
});
