---
title: Vuejs.org
tags: vue,node,hexo
category: 
excerpt: Vue.js website build with vue
created: 2020-10-01T13:00:00Z
image: ./images/website-vuejs.png
image_caption: Vuejs.org
git_url: https://github.com/vuejs/vuejs.org
author: markus
type: sample
---
The website vuejs.org for the popular javascript framework [Vuejs](https://vuejs.org).
 
This project uses [Hexo](https://hexo.io/) with [Nodejs](https://nodejs.org) and [Vuejs](https://vuejs.org).

```yaml
---
distFolder: public
setup:
- name: Setup Node.js
  action: actions/setup-node@v1
  properties:
    node-version: 8.9.0
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
