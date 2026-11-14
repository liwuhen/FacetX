#!/bin/bash

set -e

tsc --build --clean packages/*/tsconfig.json packages/*/src/*/tsconfig.json
rimraf .webpack */.webpack */.webpack-desktop dist coverage \
  storybook-screenshots storybook-static web/integration-test/coverage
