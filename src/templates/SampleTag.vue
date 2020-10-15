<template>
  <Layout>
    <section class="container mx-auto">
      <h1>All
        <g-link to="/samples">samples</g-link>
        tagged as
        <a v-if="$page.sampleTag.url" :href="$page.sampleTag.url" target="_blank" rel="noopener">
          "{{ $page.sampleTag.title }}"
        </a>
        <span v-else>
        "{{ $page.sampleTag.title }}"
        </span>
      </h1>
      <p v-if="$page.sampleTag.description" v-html="$page.sampleTag.description"></p>
      <div v-for="element in $page.sampleTag.belongsTo.edges" :key="element.node.id">
        <g-link
          class="inline-block border border-pink-300 m-2 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500"
          :to="element.node.path"
        >{{ element.node.title }}
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
sampleTag(id: $id) {
title
url
description
belongsTo {
edges {
node {
... on Sample {
id
title
path
}
}
}
}
}
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "SampleTags",
  },
};
</script>
