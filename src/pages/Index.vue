<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title">Welcome to Buildwith IONOS</h1>
      <div class="content">
        <p>
          Just
          <a href="https://git-scm.com/docs/git-push">git push</a> to deploy to
          <a href="https://www.ionos.com/">IONOS</a>.
        </p>

        <button role="button" aria-label="Tag" class="action-button">
          Deploy
        </button>

        <h2 class="text-3xl">Features</h2>
        <ul class="mb-12 list-disc pl-4">
          <li>
            Build sites faster with the power of Gridsome, TailwindCSS and SCSS
          </li>
          <li>Image lazyloading via gridsome builtin functionality</li>
          <li>A simple blog with categories, tags and featured images</li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>
