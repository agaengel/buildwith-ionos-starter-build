<template>
  <Layout>
    <section class="container mx-auto">
      <h1>All posts in category "{{ $page.category.title }}"</h1>
      <div
        v-for="element in $page.category.belongsTo.edges"
        :key="element.node.id"
      >
        <h2>
          <g-link :to="element.node.path">{{ element.node.title }}</g-link>
        </h2>
        <p :datetime="element.node.datetime">{{ element.node.humanTime }}</p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    category(id: $id) {
      title
      belongsTo {
        edges {
          node {
            ... on Blog {
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
    title: "Categories",
  },
};
</script>
