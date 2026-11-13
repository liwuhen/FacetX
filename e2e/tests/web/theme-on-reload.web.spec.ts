// SPDX-FileCopyrightText: Copyright (C) 2026 FacetX contributors
// SPDX-License-Identifier: MIT

/* eslint-disable @lichtblick/license-header -- This original FacetX test is MIT licensed. */

import { expect, test } from "@playwright/test";

import {
  APP_CONFIGURATION_STORAGE_PREFIX,
  AppSetting,
} from "../../../packages/suite-base/src/AppSetting";

const cases = [
  { preference: "light", system: "dark", mode: "light", background: "rgb(255, 255, 255)" },
  { preference: "dark", system: "light", mode: "dark", background: "rgb(21, 21, 23)" },
  { preference: "system", system: "dark", mode: "dark", background: "rgb(21, 21, 23)" },
] as const;

for (const { preference, system, mode, background } of cases) {
  test(`paints the ${preference} theme before the application loads on refresh`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: system });
    await page.goto("/?ds=mcap-local-file");
    const workspace = process.env.DEV_WORKSPACE;
    const storageKey = `${workspace ? `${workspace}.` : ""}${APP_CONFIGURATION_STORAGE_PREFIX}${AppSetting.COLOR_SCHEME}`;
    await page.evaluate(
      ({ key, value }) => {
        localStorage.setItem(key, JSON.stringify(value));
      },
      { key: storageKey, value: preference },
    );

    let releaseBundle!: () => void;
    const bundleGate = new Promise<void>((resolve) => {
      releaseBundle = resolve;
    });
    await page.route("**/main.js", async (route) => {
      await bundleGate;
      await route.continue();
    });

    try {
      await page.reload({ waitUntil: "commit" });
      await expect(page.locator("#loading-styles")).toBeAttached();
      await expect(page.locator("#root")).toHaveCSS("background-color", background);
    } finally {
      releaseBundle();
    }

    await expect(page.locator("#loading-styles")).toHaveCount(0);
    await expect(page.locator("html")).toHaveAttribute("data-color-mode", mode);
    await expect(page.locator("body")).toHaveCSS("background-color", background);
  });
}
