// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

//require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");
require("prismjs/themes/prism-okaidia.css");

import "~/resources/scss/main.scss";

export default function(Vue, { router, head, isClient }) {
  // register on dev for debugging too
  if (isClient) require("./registerServiceWorker");
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // add attributes to HTML tag
  head.htmlAttrs = { lang: "en", class: "min-h-full antialiased" };
  // add meta tags
  head.meta.push(
    {
      name: "robots",
      content: "noindex, nofollow",
    },
    {
      name: "description",
      content: "Get your web project live in seconds",
    }
  );
}
