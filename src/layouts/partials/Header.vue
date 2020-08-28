<template>
  <header
    class="flex flex-col md:flex-row md:justify-between items-center bg-blue-600 p-4 md:p-6"
  >
    <g-link
      class="text-2xl md:text-3xl text-white font-bold block hover:text-pink-500"
      to="/"
      aria-label="Back to home"
      >{{ $static.metadata.siteName }}</g-link
    >
    <nav id="nav" class="nav hidden md:flex">
      <ul
        class="flex flex-col md:flex-row items-center list-reset text-base"
      >
        <li
          class="text-base md:text-xl mb-4 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="element.link"
            class="link font-bold text-white hover:text-pink-500"
            active-class="is-active-link"
            exact-active-class="active text-pink-500"
            >{{ element.name }}</g-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
    }
  }
}
</static-query>
