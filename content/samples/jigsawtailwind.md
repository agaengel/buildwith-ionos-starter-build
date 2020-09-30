---
title: Jigsaw - Tailwind
tags: jigsaw, tailwind
category: 
excerpt: Demo static site project using jigsaw and tailwind
created: 2020-10-01T16:00:00Z
image: ./images/website-jigsaw-tailwind.png
image_caption: Jigsaw - Tailwind
git_url: https://github.com/buildwith-ionos/build-with-ionos-jigsaw-tailwindcss
author: alex
type: sample
---
A demo project building a static site with [Jigsaw](http://jigsaw.tighten.co/) and [Tailwind CSS](https://tailwindcss.com/)

This project uses [php](https://www.php.net/) with [Composer](https://getcomposer.org/) as well as [webpack](https://webpack.js.org/) with [nodejs](https://nodejs.org)

```yaml
---
distFolder: build_production
setup:
- name: Setup composer
  action: php-actions/composer@v2
- name: Setup Node.js
  action: actions/setup-node@v1
  properties:
    node-version: v10.16.3
prepare:
  name: Prepare Project build environment
  command: npm ci
build:
  name: Build Jigsaw Tailwind
  command: npm run production
```