---
title: Reactjs.org
tags: gatsby,node
category: 
excerpt: Reactjs.org page build with Gatsby
created: 2020-10-06T15:00:00Z
image: ./images/website-reactjs.png
image_caption: Reactjs.org
git_url: https://github.com/reactjs/reactjs.org
author: alex
type: sample
---
The Website [reactjs](https://reactjs.org/) uses [Gatsby]() with [nodejs](https://nodejs.org).


```yaml:title=The Project uses the following build configuration'
---
distFolder: public
setup:
- name: Setup Node.js 12.x
  action: actions/setup-node@v1
  properties:
    node-version: 12.x
prepare:
  name: Prepare Project build environment
  command: |
    npm install --global yarn
    yarn install --frozen-lockfile
build:
  name: Build Node project
  command: yarn build
  environment:
    SITE_URL: ${{ steps.project.outputs.site-url }}
    CI: true
```
