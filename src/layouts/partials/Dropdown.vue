<template>
  <div class="relative">
    <div class="absolute right-0 mt-2 py-2 w-64 bg-white rounded-lg shadow-xl">
      <div v-for="item in items">
        <g-link :to="item.link"
                class="text-gray-800"
                v-if="!item.spacer"
                active-class="is-active-link"
                exact-active-class="active text-pink-500"
        >
          <div class="block px-4 py-2 hover:bg-gray-300 ">
            {{ item.name }}
          </div>

        </g-link>
        <div v-else class="block px-4 py-2 hover:bg-gray-300 ">
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'items': {
      type: Array
    }
  }
}
</script>
