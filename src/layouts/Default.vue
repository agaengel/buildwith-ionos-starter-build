<template>
  <div class="bg-yellow-400">
    <div class="pb-16 md:pb-0 flex flex-col relative min-h-screen">
      <Header />
      <main
        class="main justify-center flex flex-1 flex-col py-10 lg:py-20"
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
import Header from "~/layouts/partials/Header.vue";
import Footer from "~/layouts/partials/Footer.vue";
import ResponsiveNav from "~/layouts/partials/ResponsiveNav.vue";

export default {
  components: {
    Header,
    Footer,
    ResponsiveNav,
  },
};
</script>
