<template>
  <Layout>
    <section class="container mx-auto">
      <h1>All posts tagged as "{{ $page.sampleTag.title }}"</h1>
      <div v-for="element in $page.sampleTag.belongsTo.edges" :key="element.node.id">
        <h2>
          <g-link
            class="block text-pink-500 hover:text-purple-900"
            :to="element.node.path"
            >{{ element.node.title }}</g-link
          >
        </h2>
        <p :datetime="element.node.datetime">{{ element.node.humanTime }}</p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    sampleTag(id: $id) {
      title
      belongsTo {
        edges {
          node {
            ... on Sample {
              id
              title
              path
              humanTime : created(format:"Do MMMM YYYY")
              datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
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
