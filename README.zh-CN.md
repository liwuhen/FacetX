<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/readme/wordmark-dark.png">
    <img src="assets/readme/wordmark-light.png" alt="FacetX" width="360" height="88">
  </picture>
</h1>

<p align="center">
  <strong>简体中文</strong> · <a href="README.md">English</a>
</p>

<p align="center">
  <strong>在同一条时间线上查看机器人录包。</strong><br>
  集传感器数据回放、可视化和插件扩展于一体的工作台。
</p>

<p align="center">
  <a href="#功能"><img src="https://img.shields.io/badge/Playback-ROS_1_%C2%B7_ROS_2_%C2%B7_MCAP-6366f1?style=flat-square" alt="支持 ROS 1、ROS 2 和 MCAP 回放"></a>
  <a href="#快速开始"><img src="https://img.shields.io/badge/Node.js-%E2%89%A520-339933?style=flat-square&amp;logo=nodedotjs&amp;logoColor=white" alt="Node.js 20 或更高版本"></a>
  <a href="package.json"><img src="https://img.shields.io/badge/Yarn-4.17.0-555555?style=flat-square" alt="Yarn 4.17.0"></a>
</p>

<p align="center">
  <a href="#功能">功能</a> ·
  <a href="#快速开始">快速开始</a> ·
  <a href="#查看录包">查看录包</a> ·
  <a href="#文档">文档</a> ·
  <a href="https://github.com/liwuhen/FacetX/issues">反馈</a>
</p>

## 什么是 FacetX？

FacetX 把相机画面、ROS 话题消息、曲线和 3D 场景放在同一个工作区。打开录包后，在时间线上定位到感兴趣的时刻，就能从多个面板查看同一事件。

## 功能

| 功能 | 用途 |
| :--- | :--- |
| **录包回放** | 打开 ROS 1、ROS 2 和 MCAP 录包，播放、暂停或跳转到指定时间。 |
| **数据可视化** | 对照多路相机画面，绘制消息字段曲线，查看原始消息和 3D 数据。 |
| **布局** | 并排摆放面板，保存布局以便查看其他录包时复用。 |
| **插件扩展** | 通过扩展 API 注册自定义面板和消息转换器。 |

网页版和桌面版均可打开 ROS 1 `.bag`、ROS 2 SQLite3 `.db3` 和 MCAP `.mcap` 文件。SQLite3 读取器支持应用内置的 ROS 2 消息类型。自定义 ROS 2 消息请使用内嵌消息定义的 MCAP 录包。

**计划功能**包括 AI 辅助分析，用于在录包与传感器数据中查找和分析事件。

---

## 快速开始

### 1. 环境要求

使用 **Node.js 20 或更高版本**，并确保 Corepack 可用。仓库指定 Yarn 4.17.0。

### 2. 安装

```bash
git clone https://github.com/liwuhen/FacetX.git
cd FacetX
corepack enable
yarn install
```

### 3. 启动

| 运行方式 | 命令 |
| :--- | :--- |
| **网页版** | 运行 `yarn web:serve`，打开开发服务器输出的地址。 |
| **桌面版** | 运行 `yarn desktop:serve`。首次构建完成后，在另一个终端运行 `yarn desktop:start`。 |

---

## 查看录包

选择 **Open sample** 可回放一段 18 秒的模拟仓库巡检。示例包含前向相机、3D 场景与机器人遥测，随 FacetX 提供，可离线打开。[下载示例 MCAP](packages/suite-base/src/dataSources/samples/facetx-warehouse-patrol.mcap)。

1. 选择 **打开本地文件**，选择 `.bag`、`.db3` 或 `.mcap` 文件。
2. 添加**图像**、**曲线**或**原始消息**面板，然后选择需要查看的话题。
3. 在时间线上跳转到某个事件，对照当时的相机画面和话题数据。
4. 保存布局，下次打开录包时可复用面板和话题配置。

## 文档

| 指南 | 内容 |
| :--- | :--- |
| [插件扩展 API](packages/suite/src/index.ts) | 自定义面板与消息转换器 |
| [Web 开发](web/README.md) | 浏览器端应用开发 |
| [端到端测试](e2e/README.md) | 浏览器与桌面端测试的组织和运行 |

## 构建

| 目标 | 命令 |
| :--- | :--- |
| **网页版** | `yarn web:build:prod` |
| **桌面版** | 先运行 `yarn desktop:build:prod`，再通过 `yarn package:darwin`、`yarn package:linux` 或 `yarn package:win` 为对应平台打包。macOS 会分别生成 Apple Silicon（`arm64`）和 Intel（`x64`）安装包。 |

## 许可证

上游源码及受 MPL 约束文件的修改按 [MPL-2.0](docs/licenses/MPL-2.0.txt) 分发，文件内单独注明的许可仍适用。标有 `SPDX-License-Identifier: MIT` 的 FacetX 原创文件按 [MIT 许可证](docs/licenses/MIT.txt) 分发。

<p align="center">
  <sub>使用 TypeScript、React 和 Electron 构建。</sub>
</p>
