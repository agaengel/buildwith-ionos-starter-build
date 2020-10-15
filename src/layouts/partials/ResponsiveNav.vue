<template>
  <div>
    <nav
      id="mobile-nav"
      class="mobile-nav fixed left-0 top-0 pt-2 h-screen w-full overflow-y-auto  bg-blue-600 z-50 md:hidden"
      :class="toggleNav ? 'menu-visible' : ''"
    >
      <ul>
        <li
          class="level-1 mb-2 md:mr-4 md:mb-0">
          <g-link
            class="link block py-2 px-5 text-white text-2xl hover:text-pink-500 font-bold text-center"
            to="/"
            aria-label="Back to home"
          >{{ $static.metadata.siteName }}
          </g-link
          >
        </li>
        <li
          class="level-1 mb-2 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            v-if="element.sub.length == 0"
            :to="element.link"
            class="link block py-2 px-5 text-white text-2xl hover:text-pink-500"
            active-class="is-active-link"
            exact-active-class="active text-pink-500"
          >{{ element.name }}
          </g-link>
          <div v-else
               class="block py-2 px-5 text-white text-2xl  cursor-pointer"
               @click="setSubmenu(element.link)"
          >
            <div>{{ element.name }}
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  v-if="submenu !== element.link"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#menu-down"
                />
                <use
                  v-else
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#menu-up"
                />
              </svg>
            </div>
            <div :class="checkActive(element.link) ? 'block' : 'hidden'"
                 class="ml-5"
            >
              <div v-for="item in element.sub">
                <g-link :to="item.link"
                        class="link block py-2 px-5 text-white text-2xl hover:text-pink-500"
                        v-if="!item.spacer"
                        active-class="is-active-link"
                        exact-active-class="active text-pink-500"
                >
                  <div>
                    {{ item.name }}
                  </div>

                </g-link>
                <div v-else>
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="level-1 mb-2 md:mr-4 md:mb-0">
          <a
            class="link block py-2 px-5 text-white text-2xl hover:text-pink-500"
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
siteName
menu {
name
link
sub{
name
link
spacer
}
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
      submenu: this.$route.path,
    };
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav;
    },
    checkActive: function (path) {
      var that = this;
      var matched = true;
      path.split("/").slice(0,-1).forEach(function (part, index) {
        if (that.submenu.split("/")[index] != part) {
             matched = false;
        }
      });
      return matched
    },
    setSubmenu(value) {
      if (this.submenu == value) {
        this.submenu = ''
      } else {
        this.submenu = value;
      }
    }
  }
};
</script>
