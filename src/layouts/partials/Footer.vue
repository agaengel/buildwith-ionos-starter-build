<template>
  <footer class="bg-gray-200">
    <div
      class="container md:flex justify-between items-center m-auto px-6 py-10"
    >
      <div class="text-base text-center md:text-left md:text-xl pb-8 md:pb-0">
        © {{ new Date().getFullYear() }} - Powered by
        <a
          href="https://www.buildwith.ionos.com"
          rel="nofollow"
          target="_blank"
        >
          Builtwith IONOS</a
        >
      </div>
      <ul class="flex justify-center">
        <li
          class="mr-4"
          v-for="element in $static.metadata.social"
          :key="element.link"
        >
          <a
            :href="element.link"
            class="text-gray-500 hover:text-pink-500"
            :aria-label="element.icon"
            target="_blank"
          >
            <svg
              class="fill-current inline-block"
              role="img"
              aria-hidden="true"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                :xlink:href="socialIcon(element)"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`;
    },
  },
};
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>
