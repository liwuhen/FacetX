<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/readme/wordmark-dark.png">
    <img src="assets/readme/wordmark-light.png" alt="FacetX" width="360" height="88">
  </picture>
</h1>

<p align="center">
  <a href="README.zh-CN.md">简体中文</a> · <strong>English</strong>
</p>

<p align="center">
  <strong>Explore robotics recordings on a shared timeline.</strong><br>
  A workbench for sensor data, visualization, and custom extensions.
</p>

<p align="center">
  <a href="#features"><img src="https://img.shields.io/badge/Playback-ROS_1_%C2%B7_ROS_2_%C2%B7_MCAP-6366f1?style=flat-square" alt="ROS 1, ROS 2, and MCAP playback"></a>
  <a href="#getting-started"><img src="https://img.shields.io/badge/Node.js-%E2%89%A520-339933?style=flat-square&amp;logo=nodedotjs&amp;logoColor=white" alt="Node.js 20 or newer"></a>
  <a href="package.json"><img src="https://img.shields.io/badge/Yarn-4.17.0-555555?style=flat-square" alt="Yarn 4.17.0"></a>
</p>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#getting-started">Getting started</a> ·
  <a href="#inspect-a-recording">Workflow</a> ·
  <a href="#documentation">Documentation</a> ·
  <a href="https://github.com/liwuhen/FacetX/issues">Feedback</a>
</p>

## What is FacetX?

FacetX brings camera streams, ROS topic messages, plots, and 3D scenes into one workspace. Open a recording, jump to a moment on the timeline, and inspect the same event across multiple panels.

## Features

| Capability | What you can do |
| :--- | :--- |
| **Playback** | Open ROS 1 bags, ROS 2 bags, and MCAP recordings, then play, pause, or seek through the data. |
| **Visualization** | Compare camera images, plot message fields, inspect raw messages, and view 3D data. |
| **Layouts** | Arrange panels side by side and save the layout for another recording. |
| **Extensions** | Register custom panels and message converters through the extension API. |

FacetX opens ROS 1 `.bag`, ROS 2 SQLite3 `.db3`, and MCAP `.mcap` files in the web and desktop apps. The SQLite3 reader decodes built-in ROS 2 message types. For custom ROS 2 messages, use an MCAP recording with the message definitions embedded.

**Planned.** AI-assisted analysis for finding and investigating events across recordings and sensor streams.

---

## Getting started

### 1. Prerequisites

Use **Node.js 20 or newer** with Corepack available. The repository pins Yarn 4.17.0.

### 2. Install

```bash
git clone https://github.com/liwuhen/FacetX.git
cd FacetX
corepack enable
yarn install
```

### 3. Launch

| Mode | Command |
| :--- | :--- |
| **Web** | Run `yarn web:serve` and open the URL printed by the development server. |
| **Desktop** | Run `yarn desktop:serve`. After the first build completes, run `yarn desktop:start` in a second terminal. |

---

## Inspect a recording

Choose **Open sample** to replay an 18-second simulated warehouse patrol with a forward camera, a 3D scene, and robot telemetry. The recording ships with FacetX and works offline. [Download the sample MCAP](packages/suite-base/src/dataSources/samples/facetx-warehouse-patrol.mcap).

1. Choose **Open local file(s)** and select a `.bag`, `.db3`, or `.mcap` file.
2. Add an **Image**, **Plot**, or **Raw Messages** panel and select the topics you want to inspect.
3. Seek to an event on the timeline to compare the camera view and topic values at that point.
4. Save the layout to reuse the same panels and topic selections.

## Documentation

| Guide | Covers |
| :--- | :--- |
| [Extension API](packages/suite/src/index.ts) | Custom panels and message converters |
| [Web development](web/README.md) | Browser application development |
| [End-to-end tests](e2e/README.md) | Running and organizing browser and desktop checks |

## Build

| Target | Command |
| :--- | :--- |
| **Web** | `yarn web:build:prod` |
| **Desktop** | Run `yarn desktop:build:prod`, then package with `yarn package:darwin`, `yarn package:linux`, or `yarn package:win`. The macOS command produces separate Apple Silicon (`arm64`) and Intel (`x64`) installers. |

## License

Inherited source and modifications to MPL-covered files are distributed under [MPL-2.0](docs/licenses/MPL-2.0.txt), subject to any separate notices in those files. Original FacetX files marked `SPDX-License-Identifier: MIT` are distributed under the [MIT License](docs/licenses/MIT.txt).

<p align="center">
  <sub>Built with TypeScript, React, and Electron.</sub>
</p>
