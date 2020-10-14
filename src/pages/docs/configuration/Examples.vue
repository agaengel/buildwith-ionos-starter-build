<template>
  <Layout>
    <section class="container mx-auto">
      <div class="subheader">
        <h1>Configuration Examples</h1>
        <p>Available in BuildWith Ionos</p>
      </div>

      <div class="content">
        <div class="grid md:grid-cols-2 gap-4 h-auto">
          <div class="grid">
            <div>
              <ul v-for="(template, templatekey) in $page.allBuildTemplate.edges" :key="template.node.id" class="list-disc cursor-pointer">
                <li v-on:click="showConfig(templatekey)" >
                  <div v-if="selected == templatekey" class="rounded-lg text-white bg-blue-600 p-2">
                    {{ template.node.title }}
                  </div>
                  <div v-else class="pl-2">
                    {{ template.node.title }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul class="flex border-t border-gray-100 m-4">
              <li class="mr-2" v-for="sample in samples" :key="sample.node.id">
                <g-link
                  :to="sample.node.path"
                  class="inline-block border border-pink-300 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500"
                >{{ sample.node.title }}
                </g-link>
              </li>
            </ul>
            <build-config :config="selectedConfig" v-if="selectedConfig"/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
<script>

import BuildConfig from "../../../components/BuildConfig";

export default {
  metaInfo: {
    title: "Examples",
  },
  data() {
    return {
      selectedConfig: null,
      samples: null,
      selected: 0
    }
  },
  components: {
    BuildConfig
  },
  created() {
    this.showConfig(0);
  },
  methods: {
    showConfig: function (templateKey) {
      this.selectedConfig = this.$page.allBuildTemplate.edges[templateKey].node;
      this.samples = this.$page.allBuildTemplate.edges[templateKey].node.belongsTo.edges;
      this.selected = templateKey;
    }
  }
}

</script>
<page-query>
query {
allBuildTemplate {
edges {
node {
title
id
belongsTo {
edges {
node {
... on Sample {
id
title
path
}
}
}
}

setup: setup_ref {
name
action
properties {
key
value
}
}
prepare_name
build_name
dist_folder
prepare: prepare_ref {
commands
}
build: build_ref {
commands
environment {
key
value
}
}
}
}
}
}
</page-query>


