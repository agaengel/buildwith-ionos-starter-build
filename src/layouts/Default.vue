<template>
  <div class="bg-gray-100">
    <div class="pb-16 md:pb-0 flex flex-col relative min-h-screen">
      <Header />
      <main
        class="main flex flex-1 flex-col mx-10 py-10 lg:py-20"
      >
        <slot />
      </main>
      <Footer />
    </div>
    <ClientOnly>
      <ResponsiveNav />
    </ClientOnly>
  </div>
</template>

<script>
import Header from "./partials/Header.vue";
import Footer from "./partials/Footer.vue";
import ResponsiveNav from "./partials/ResponsiveNav.vue";

export default {
  components: {
    Header,
    Footer,
    ResponsiveNav,
  },
};
</script>
