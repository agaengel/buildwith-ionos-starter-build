<template>
  <Layout>
    <section class="container mx-auto">
      <div class="subheader">
        <h1>
          Blog
        </h1>
        <p>
          Get inspired
        </p>
      </div>
      <div class="content">
        <div class="flex flex-wrap -mx-2">
          <div
            class="w-full lg:w-1/3 mb-8 px-2"
            v-for="entry in $page.allBlog.edges"
            :key="entry.node.id"
          >
            <!-- card view -->
            <div class="bg-white overflow-hidden rounded-lg shadow-lg flex-1">
              <!-- card header -->
              <g-link
                  class="relative overflow-hidde items-stretch"
                  :to="entry.node.type==='sample'?entry.node.samplepath:entry.node.path"
              >
                  <picture class="flex-1">
                    <g-image
                        :alt="entry.node.image_caption"
                        :src="entry.node.image"
                    />
                  </picture>
              </g-link>
              <!-- card content -->
              <div class="p-8">
                <h2>
                  <g-link
                      class="block hover:text-pink-500"
                      :to="entry.node.type==='sample'?entry.node.samplepath:entry.node.path"
                    >{{ entry.node.type==='sample'?"Sample: ":''}}{{ entry.node.title }}</g-link
                  >
                </h2>
                <div class="flex flex-col text-base md:flex mb-4">
                  <div>{{ entry.node.author.name }}</div>
                  <div class="hidden md:block px-2"></div>
                  <time :datetime="entry.node.datetime">{{
                    entry.node.humanTime
                  }}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Blog",
  },
};
</script>

<page-query>
query {
  allBlog(sortBy: "created") {
    edges {
      node {
        id
        title
        samplepath: path(to: "sample")
        path
        image(height: 300, width: 423, fit: cover)
        humanTime: created(format: "Do MMMM YYYY")
        datetime: created(format: "ddd MMM DD YYYY hh:mm:ss zZ")
        author {
          name
        }
        category {
          title
        }
        type
      }
    }
  }
}

</page-query>
