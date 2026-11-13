/** @jest-environment jsdom */
// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MockPanelContextProvider from "@facetx/suite-base/components/MockPanelContextProvider";
import { DEFAULT_CONFIG } from "@facetx/suite-base/panels/DiagnosticStatus/constants";
import {
  DiagnosticStatusConfig,
  DiagnosticStatusPanelProps,
} from "@facetx/suite-base/panels/DiagnosticStatus/types";
import useDiagnostics, {
  UseDiagnosticsResult,
} from "@facetx/suite-base/panels/DiagnosticSummary/hooks/useDiagnostics";
import PanelSetup from "@facetx/suite-base/stories/PanelSetup";
import DiagnosticsBuilder from "@facetx/suite-base/testing/builders/DiagnosticsBuilder";
import { BasicBuilder } from "@lichtblick/test-builders";

import DiagnosticStatusPanel from "./DiagnosticStatusPanel";

jest.mock("@facetx/suite-base/panels/DiagnosticSummary/hooks/useDiagnostics");

describe("DiagnosticStatusPanel", () => {
  const mockSaveConfig = jest.fn();
  const mockUseDataSourceInfo = jest.fn(() => ({
    topics: [],
  }));
  const mockUsePanelContext = jest.fn(() => ({
    openSiblingPanel: jest.fn(),
  }));
  const mockUseAvailableDiagnostics = jest.fn();

  jest.mock("@facetx/suite-base/PanelAPI", () => ({
    useDataSourceInfo: mockUseDataSourceInfo,
  }));
  jest.mock("@facetx/suite-base/components/PanelContext", () => ({
    usePanelContext: mockUsePanelContext,
  }));

  jest.mock("@facetx/suite-base/providers/PanelStateContextProvider", () => ({
    usePanelSettingsTreeUpdate: jest.fn(),
  }));

  jest.mock("@facetx/suite-base/panels/DiagnosticStatus/hooks/useAvailableDiagnostics", () => ({
    __esModule: true,
    default: mockUseAvailableDiagnostics,
  }));

  const setup = (configOverride: Partial<DiagnosticStatusConfig> = {}) => {
    const config = DiagnosticsBuilder.statusConfig({
      ...DEFAULT_CONFIG,
      ...configOverride,
    });

    const props: DiagnosticStatusPanelProps = {
      config,
      saveConfig: mockSaveConfig,
    };

    const ui: React.ReactElement = (
      <MockPanelContextProvider>
        <PanelSetup>
          <DiagnosticStatusPanel {...props} />
        </PanelSetup>
      </MockPanelContextProvider>
    );

    return {
      ...render(ui),
      ...props,
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the empty state when no diagnostics are available", () => {
    const diagnosticResult: UseDiagnosticsResult = new Map();
    (useDiagnostics as jest.Mock).mockReturnValue(diagnosticResult);

    setup();

    expect(screen.getByText(/No diagnostic node selected/i)).toBeInTheDocument();
  });

  it("should render the empty state when there is a selected display name", () => {
    const diagnosticResult: UseDiagnosticsResult = new Map();
    (useDiagnostics as jest.Mock).mockReturnValue(diagnosticResult);

    const { config } = setup({
      selectedHardwareId: BasicBuilder.string(),
      selectedName: BasicBuilder.string(),
    });

    expect(screen.getByText(/Waiting for diagnostics from/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${config.selectedHardwareId}: ${config.selectedName}`, "i")),
    ).toBeInTheDocument();
  });

  it("should render diagnostics when there are filtered diagnostics", () => {
    // Given When
    const hardwareId = BasicBuilder.string();
    const statusMessageName = BasicBuilder.string();
    const statusMessage = DiagnosticsBuilder.statusMessage({
      name: statusMessageName,
    });
    const diagnosticResult: UseDiagnosticsResult = new Map([
      [
        hardwareId,
        new Map([[BasicBuilder.string(), DiagnosticsBuilder.info({ status: statusMessage })]]),
      ],
    ]);
    (useDiagnostics as jest.Mock).mockReturnValue(diagnosticResult);

    setup({
      selectedHardwareId: hardwareId,
      selectedName: statusMessageName,
    });

    // Then
    expect(screen.getByTestId("filtered-diagnostics")).toBeInTheDocument();
  });
});
