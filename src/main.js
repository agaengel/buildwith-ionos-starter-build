// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import "~/resources/scss/main.scss";

export default function(Vue, { router, head, isClient }) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // add attributes to HTML tag
  head.htmlAttrs = { lang: "en", class: "min-h-full antialiased" };
  // add meta tags
  head.meta.push({
    name: "robots",
    content: "noindex, nofollow",
  });
}
