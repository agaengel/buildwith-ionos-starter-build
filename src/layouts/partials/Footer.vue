<template>
  <div class="footer-wrapper">
    <footer id="footer" class="footer bg-gray-200" role="contentinfo">
      <div class="footer-inner container m-auto md:flex justify-between items-center px-6 py-10">
        <p class="text-purple-900 pb-8 md:pb-0">
          © 2020 - build with 
          <a
            href="https://www.buildwith.ionos.com"
          >Builtwith IONOS</a>
        </p>

        <ul class="flex justify-center">
          <li class="mr-4" v-for="element in $static.metadata.social" :key="element.link">
            <a
              :href="element.link"
              class="block text-gray-500 hover:text-pink-500"
              :aria-label="element.icon"
              target="_blank"
            >
              <svg
                class="block"
                fill="currentColor"
                role="img"
                aria-hidden="true"
                width="18"
                height="18"
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
  </div>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`
    }
  }
}
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