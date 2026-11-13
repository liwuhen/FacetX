// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { IExtensionApiResponse } from "@facetx/suite-base/api/extensions/types";
import { StoredExtension } from "@facetx/suite-base/services/IExtensionStorage";
import { ExtensionInfo } from "@facetx/suite-base/types/Extensions";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ExtensionAdapter {
  /**
   * Convert IExtensionApiResponse to ExtensionInfo
   */
  public static toExtensionInfo(apiResponse: IExtensionApiResponse): ExtensionInfo {
    return {
      ...apiResponse,
      id: apiResponse.extensionId,
      externalId: apiResponse.id,
      namespace: apiResponse.scope,
    };
  }

  /**
   * Convert IExtensionApiResponse to StoredExtension
   */
  public static toStoredExtension(
    apiResponse: IExtensionApiResponse,
    workspace: string,
    content: Uint8Array = new Uint8Array(),
  ): StoredExtension {
    return {
      info: this.toExtensionInfo(apiResponse),
      content,
      workspace,
      fileId: apiResponse.fileId,
      externalId: apiResponse.id,
    };
  }

  /**
   * Convert IExtensionApiResponse to array of ExtensionInfo
   */
  public static toExtensionInfoList(apiResponse: IExtensionApiResponse[]): ExtensionInfo[] {
    return apiResponse.map(this.toExtensionInfo);
  }
}
