<template>
  <Layout>
    <section class="container mx-auto">
      <!-- title -->
      <h2 v-html="$page.blog.title"></h2>
      <!-- header image -->
      <figure class="pb-8 md:pb-16">
        <picture class="block">
          <source :srcset="$page.blog.image" type="image/webp"/>
          <g-image
            class="object-cover h-24 md:h-48 w-full pb-0 md:pb-2"
            :src="$page.blog.image"
            :alt="$page.blog.image_caption"
        /></picture>
        <figcaption class="text-xs md:text-sm text-center italic">
          {{ $page.blog.image_caption }}
        </figcaption>
      </figure>
      <!-- blog post info -->
      <div class="text-sm md:text-base italic pb-4 md:pb-8">
        Posted by {{ $page.blog.author.name }} on {{ $page.blog.humanTime }} in
      </div>
      <!-- content -->
      <div class="markdown pb-12">
        <div v-html="$page.blog.content"></div>
      </div>
      <!-- tag cloud -->
      <ul class="flex px-16 border-t border-gray-100">
        <li class="mr-2" v-for="tag in $page.blog.tags" :key="tag.id">
          <g-link
            :to="tag.path"
            class="inline-block border border-pink-300 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500"
            >{{ tag.title }}</g-link
          >
        </li>
      </ul>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    blog(id: $id) {
      title
      path
      image
      image_caption
      excerpt
      content
      humanTime : created(format:"Do MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      category {
        title
        path
      }
      author {
        name
      }
      tags {
        id
        title
        path
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.title,
    };
  },
};
</script>
