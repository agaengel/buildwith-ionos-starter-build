---
title: Advanced Settings
tags: [buildwith, tool]
category: Buildwith IONOS
excerpt: Using advanced settings in Buildwith IONOS
created: 2020-10-05
image: ./images/photo-1506704888326-3b8834edb40a.jpg
image_caption: Photo by Denisse Leon on Unsplash
author: markus
type: blog
---

## The Advanced settings for Build with ionos embedded into a git repository.

BuildWithIonos parses a .ionos.yaml file in the source repository as build configuration for the project.

The Ionos.yaml has the following properties:

```java:title=Ionos.type
{
    setup List<SetupStep> (optional)
    prepare PrepareStep (optional)
    build BuildStep (optional)
    distFolder String (required)
}
```

```java:title=SetupStep.type
{
    name String (required)
    action String (required) {mulltiple commands are split by \n}
    properties Map<String, String> (optional) { as input for the action }
}
```

```java:title=PrepareStep.type
{
    name String (required)
    command String (required) {mulltiple commands are split by \n}
}
```

```java:title=BuildStep.type
{
    name String (required)
    command String (required) {mulltiple commands are split by \n}
    environment Map<String, String> (optional) { as environment variable for shell that runs the command }
}
```

The github workflow that build-with-ionos adds to you project contains an action [Get Project Info](https://github.com/marketplace/actions/get-project-info)

This action outputs *site-url* and *remote-host* that can be accessed in an environment via ${{ steps.project.outputs.site-url }}

The github action then will uses the output from Get Project Info and inject it into *environment variable*

e.g. like this:
```yaml
build:
  name: Build Node project
  command: yarn2.json build
  environment:
    SITE_URL: ${{ steps.project.outputs.site-url }}
    CI: true
```

