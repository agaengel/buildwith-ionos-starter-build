<template>
  <div>
    <nav
      id="mobile-nav"
      class="mobile-nav fixed left-0 top-0 h-screen w-full overflow-y-auto pt-12 bg-blue-600 z-50 md:hidden"
      :class="toggleNav ? 'menu-visible' : ''"
    >
      <ul>
        <li
          class="level-1 mb-4 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="element.link"
            class="link block py-2 px-5 text-white text-3xl hover:text-pink-500"
            active-class="is-active-link"
            exact-active-class="active text-pink-500"
            >{{ element.name }}</g-link
          >
        </li>
        <li class="level-1 mb-4 md:mr-4 md:mb-0">
          <a
            class="link block py-2 px-5 text-white text-3xl hover:text-pink-500"
            href="https://github.com/buildwith-ionos/buildwith-ionos-starter"
            rel="noopener"
            target="_blank"
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
        </li>
      </ul>
    </nav>
    <button
      id="mobile-nav-toggle"
      class="mobile-nav-toggle block fixed h-16 w-full bottom-0 flex items-center justify-center font-bold border-none bg-blue-600 text-white z-50 focus:outline-none md:hidden"
      :class="toggleNav ? 'menu-toggle-active' : ''"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggle"
    >
      <span class="mobile-nav-label mr-2 font-medium">Menu</span>
      <span class="mobile-nav-icon" aria-hidden="true">
        <span
          class="mobile-nav-icon-line bg-white w-6 block transition mb-1"
        ></span>
        <span
          class="mobile-nav-icon-line bg-white w-6 block transition mb-1"
        ></span>
        <span class="mobile-nav-icon-line bg-white w-6 block transition"></span>
      </span>
    </button>
  </div>
</template>

<static-query>
query {
  metadata {
    menu {
      name
      link
    }
  }
}
</static-query>

<script>
let myBody = {
  classList: {},
};
export default {
  data() {
    return {
      toggleNav: false,
    };
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav;
    },
  },
};
</script>
