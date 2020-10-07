<template xmlns="http://www.w3.org/1999/html">
  <Layout>
    <section>
      <!-- title -->
      <div class="grid md:grid-cols-2 gap-4 h-auto">
        <div class="grid place-items-center row-span-2">
          <!-- button ship to ionos-->
          <div>
            <a :href="'https://buildwith.ionos.com/setup?repo=' + $page.sample.git_url"
               rel="noopener"
               target="_blank"
            >
              <button
                class="text-white font-bold rounded-full bg-blue-600 inline-flex items-center shadow-lg focus:outline-none px-8 my-6 py-4"
              >
                <svg
                    class="fill-current text-white w-4 h-4 mr-2"
                    role="img"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="/icons.svg#icon-ship"
                  />
                </svg>
                <span>Ship {{ $page.sample.title }} to IONOS</span>
              </button>
            </a>
          </div>
          <!-- header image -->
          <div class="md:flex items-center">
            <figure class="pb-8 md:pb-16">
              <div class="shadow-xl">
                <g-image
                    class="rounded-lg"
                    :src="$page.sample.image"
                    :alt="$page.sample.image_caption"
                />
              </div>
              <figcaption class="text-xs md:text-sm text-center italic">
                {{ $page.sample.image_caption }}
              </figcaption>
            </figure>
          </div>
        </div>
        <!-- content -->
        <div class="markdown mt-8">
          <div v-html="$page.sample.content"></div>
        </div>
        <div class="grid">
          <div v-if="$page.sample.template" class="bg-blue-600 rounded-lg p-4 text-yellow-400 font-mono">
            <span>
              ---<br>
              distFolder: <span class="text-white">{{ $page.sample.template.dist_folder }} </span><br>
              <span v-if="$page.sample.template.setup.length > 0">
              setup:<br>
                <span v-for="setup in $page.sample.template.setup">
                - name: <span class="text-white">{{ setup.name }} </span><br>
                  &nbsp;
                  action: <span class="text-white">{{ setup.action }}</span><br>
                  <span v-if="setup.properties.length > 0">
                    &nbsp;
                    properties:<br>
                    <span v-for="property in setup.properties">
                      &nbsp;&nbsp;&nbsp;
                      {{ property.key }}: <span class="text-white">{{ property.value }}</span><br>
                    </span>
                  </span>
                </span>
              </span>
              <span v-if="$page.sample.template.prepare">
                prepare:<br>
                &nbsp;&nbsp;name: <span class="text-white">{{ $page.sample.template.prepare_name }}</span><br>
                <span v-if="$page.sample.template.prepare.commands.length > 1">
                  &nbsp;&nbsp;commands:  <span class="text-white">|</span><br>
                <span v-for="command in  $page.sample.template.prepare.commands ">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-white">{{ command }}</span><br>
                </span>
              </span>
              <span v-else>
                &nbsp;&nbsp;commands: <span class="text-white">{{ $page.sample.template.prepare.commands[0] }}</span><br>
              </span>
              </span>
              <span v-if="$page.sample.template.build">
                build:<br>
                &nbsp;&nbsp;name: <span class="text-white">{{ $page.sample.template.build_name }}</span><br>
                <span v-if="$page.sample.template.build.commands.length > 1">
                  &nbsp;&nbsp;commands:  <span class="text-white">|</span><br>
                    <span v-for="command in  $page.build.template.build.commands ">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-white">{{ command }}</span><br>
                    </span>
                </span>
                <span v-else>
                  &nbsp;&nbsp;commands: <span class="text-white">{{ $page.sample.template.build.commands[0] }}</span><br>
                </span>
                <span v-if="$page.sample.template.build.environment.length > 0">
                  &nbsp;&nbsp;environment: <br>
                  <span v-for="property in $page.sample.template.build.environment">
                  &nbsp;&nbsp;&nbsp;
                  {{ property.key }}: <span class="text-white">{{ property.value }}</span><br>
                 </span>
              </span>
              </span>
            </span>
          </div>
        </div>
        <div class="grid place-items-center">
          <!-- tag cloud -->
          <ul class="flex border-t border-gray-100">
            <li class="mr-2" v-for="tag in $page.sample.tags" :key="tag.id">
              <g-link
                :to="tag.path"
                class="inline-block border border-pink-300 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500"
              >{{ tag.title }}
              </g-link
              >
            </li>
          </ul>
        </div>
        <div class="place-self-end justify-self-start flex ">
          <span class="self-center mr-2">You find the source of {{ $page.sample.title }} here:</span>
          <span> <a
              :href="$page.sample.git_url"
              rel="noopener"
              target="_blank"
          >
            <svg
                class="fill-current text-gray-600 w-8 h-8 mr-2"
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
           </span>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  sample(id: $id) {
    title
    path
    image(width: 500, fit: contain)
    image_big: image(width: 1000, fit: contain)
    image_caption
    excerpt
    content
    git_url
    humanTime: created(format: "Do MMMM YYYY")
    datetime: created(format: "ddd MMM DD YYYY hh:mm:ss zZ")
    author {
      name
    }
    tags {
      id
      title
      path
    }
    template: template_ref {
      id
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
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.sample.title,
    };
  },
};
</script>
