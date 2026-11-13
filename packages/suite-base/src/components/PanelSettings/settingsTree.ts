// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import * as _ from "lodash-es";

import { Immutable, SettingsTree, SettingsTreeNode } from "@facetx/suite";
import { getTopicToSchemaNameMap } from "@facetx/suite-base/components/MessagePipeline/selectors";
import { BuildSettingsTreeProps } from "@facetx/suite-base/components/PanelSettings/types";
import { maybeCast } from "@facetx/suite-base/util/maybeCast";

export const buildSettingsTree = ({
  config,
  extensionSettings,
  messagePipelineState,
  panelType,
  settingsTree,
}: BuildSettingsTreeProps): Immutable<SettingsTree> | undefined => {
  if (panelType == undefined || settingsTree == undefined) {
    return undefined;
  }

  const topicToSchemaNameMap = getTopicToSchemaNameMap(messagePipelineState());
  const topics = Object.keys(settingsTree.nodes.topics?.children ?? {});
  const topicsConfig = maybeCast<{ topics: Record<string, unknown> }>(config)?.topics;
  const topicsSettings = topics.reduce<Record<string, SettingsTreeNode | undefined>>(
    (acc, topic) => {
      const schemaName = topicToSchemaNameMap[topic];
      if (schemaName != undefined) {
        acc[topic] = extensionSettings[panelType]?.[schemaName]?.settings(topicsConfig?.[topic]);
      }
      return acc;
    },
    {},
  );

  return {
    ...settingsTree,
    nodes: {
      ...settingsTree.nodes,
      topics: {
        ...settingsTree.nodes.topics,
        children: _.merge({}, settingsTree.nodes.topics?.children, topicsSettings),
      },
    },
  };
};
