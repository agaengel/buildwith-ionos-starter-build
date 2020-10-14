<template>
  <header
    class="flex flex-col md:flex-row md:justify-between items-center bg-blue-600 p-4 md:p-6"
  >
    <g-link
      class="text-2xl md:text-3xl text-white font-bold block hover:text-pink-500"
      to="/"
      aria-label="Back to home"
    >{{ $static.metadata.siteName }}
    </g-link
    >
    <nav id="nav" class="hidden md:flex">
      <ul class="flex flex-col md:flex-row items-center list-reset text-base">
        <li
          class="text-base md:text-xl mb-4 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            v-if="element.sub.length == 0"
            :to="element.link"
            class="link font-bold text-white hover:text-pink-500"
            active-class="is-active-link"
            exact-active-class="active text-pink-500"
          >{{ element.name }}
          </g-link
          >
          <div v-else
               class="link font-bold text-white hover:text-pink-500 cursor-pointer"
               @click="submenu = element.name"
               v-bind:class = "checkActive(element.link)?'active text-pink-500':''"
          >
            {{ element.name }}
            <Dropdown :class="submenu == element.name ? 'block' : 'hidden'" :items="element.sub"/>
          </div>
        </li>
      </ul>
      <a
        href="https://github.com/buildwith-ionos/buildwith-ionos-starter"
        rel="noopener"
        target="_blank"
        aria-label="Link to source on github for buildwith-ionos-starter"
      >
        <svg
          class="fill-current text-white w-8 h-8 mr-2"
          role="img"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="/icons.svg#icon-github"
          />
        </svg>
      </a>
    </nav>
  </header>
</template>

<script>
import Dropdown from './Dropdown.vue'

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      submenu: '',
    }
  },
  computed: {
    currentPath() {
      return this.$route.path.split("/");
    }
  },
  methods: {
    checkActive: function (path) {
      var that = this;
      var matched = true;
      path.split("/").forEach(function (part, index) {
        if (that.currentPath[index] != part) {
          matched = false;
        }
      });
      return matched
    }
  }
}

</script>

<static-query>
query {
metadata {
siteName
menu {
name
link
sub {
name
link
spacer
}
}
}
}
</static-query>

