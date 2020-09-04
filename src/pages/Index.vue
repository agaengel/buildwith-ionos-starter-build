<template>
  <Layout>
    <section class="container mx-auto">
      <div class="subheader">
        <h1>
          Welcome to Buildwith IONOS
        </h1>
        <p>
          Get your web project live in seconds
        </p>
      </div>

      <div class="content">
        <!-- hero -->
        <div
          class="flex flex-wrap lg:flex-no-wrap flex-col md:flex-row px-8 px-4 pb-8 md:pb-16"
        >
          <div class="flex flex-col w-full xl:w-2/5">
            <h1
              class="text-2xl md:text-5xl text-blue-800 font-bold text-left my-4"
            >
              Just
              <a href="https://git-scm.com/docs/git-push">git push</a> to ship
              to
              <a href="https://www.ionos.com/" rel="noopener" target="_blank"
                >IONOS</a
              >
            </h1>
            <div class="text-xl md:text-3xl text-left font-light mb-8">
              Use Buildwith IONOS to get your next web project live in seconds.
              Try yourself by click on <b>Ship to IONOS</b>.
            </div>
            <a
              class="self-center md:self-start"
              href="https://buildwith.ionos.com/setup?repo=https://github.com/buildwith-ionos/buildwith-ionos-starter"
              rel="noopener"
              target="_blank"
            >
              <button
                class="text-white font-bold rounded-full bg-black inline-flex items-center shadow-lg focus:outline-none px-8 my-6 py-4"
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
                <span>Ship to IONOS</span>
              </button>
            </a>
          </div>
          <!-- source https://images.unsplash.com/photo-1584907797015-7554cd315667 -->
          <g-image
            class="object-contain w-full md:w-3/5 md:px-8 xl:px-16"
            src="@images/hero.webp"
            fit="contain"
            alt="Hero image"
          />
        </div>

        <!-- step-by-step -->
        <h2>
          Get your next web project live in seconds
        </h2>

        <div class="flex flex-wrap lg:flex-no-wrap justify-center px-4 pb-8 md:pb-16">
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <g-image
              class="w-full"
              src="@images/connect-your-repository.webp"
              fit="contain"
              alt="Connect your repository"
            />
            <div class="py-4 px-6">
              <div class="text-xl font-medium mb-2">
                1. Connect your repository
              </div>
              <div class="text-base md:text-xl text-gray-800">
                Just
                <a href="https://git-scm.com/docs/git-push">git push</a> to ship
                to <a href="https://www.ionos.com/">IONOS</a>.
              </div>
            </div>
          </div>
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <g-image
              class="w-full"
              src="@images/setup-your-project.webp"
              fit="contain"
              alt="Setup your project"
            />
            <div class="py-4 px-6">
              <div class="text-xl md:text-2xl font-medium mb-2">
                2. Setup your project
              </div>
              <div class="text-base md:text-xl text-gray-800">
                IONOS detects by default a bunch of popular frameworks and is
                totally customizable at the same time.
              </div>
            </div>
          </div>
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <g-image
              class="w-full"
              src="@images/ship-to-IONOS.webp"
              fit="contain"
              alt="Ship to IONOS"
            />
            <div class="py-4 px-6">
              <div class="text-xl md:text-2xl font-medium mb-2">
                3. Ship to IONOS
              </div>
              <div class="text-base md:text-xl text-gray-800">
                Publishing is seamless with instant cache invalidation and
                atomic deploys.
              </div>
            </div>
          </div>
        </div>

        <!-- features -->
        <!-- free SVG icons for popular brands: https://simpleicons.org/ or https://github.com/simple-icons/simple-icons/tree/develop/icons -->
        <h2>
          Hit the ground running
        </h2>
        <p>
          Setting up your next project with Buildwith IONOS brings up essential
          features just from the beginning.
        </p>
        <div class="px-4 pb-8 md:pb-16">
          <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-800"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      role="img"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/icons.svg#icon-wrench"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:mb-8">
                  <h3>
                    Buildwith IONOS makes it simple
                  </h3>
                  <div class="mt-2 text-base leading-6 text-gray-800">
                    Publish modern web projects right from your git repository.
                    Use your favorite framework. You don't need to be an expert
                    to create and ship a feature-rich web project with IONOS.
                  </div>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-800"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      role="img"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/icons.svg#icon-automate"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:mb-8">
                  <h3>
                    Automate your work
                  </h3>
                  <div class="mt-2 text-base leading-6 text-gray-800">
                    Automate your next web project from the beginning. Don't
                    repeat yourself and rely on proven build steps and produce
                    snapshots in short cycles with each git push. Things will go
                    wrong. Get aware of failures immediately.
                  </div>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-800"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      role="img"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/icons.svg#icon-preview"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:mb-8">
                  <h3>
                    Preview your changes
                  </h3>
                  <div class="mt-2 text-base leading-6 text-gray-800">
                    Generate a full preview of your web project with every git
                    push. Apply atomic switch to live.
                  </div>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-800"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      role="img"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/icons.svg#icon-ship"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:mb-8">
                  <h3>
                    Ship directly to the edge
                  </h3>
                  <div class="mt-2 text-base leading-6 text-gray-800">
                    Always fast. Always online. Always a hit.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- supported frameworks -->
        <h2>
          Works with all popular
          <a href="https://jamstack.org/" rel="noopener" target="_blank"
            >Jamstack</a
          >
          frameworks
        </h2>

        <div class="flex flex-grow-0 flex-wrap justify-center px-4 pb-8 md:pb-16">
          <a href="https://nextjs.org/" rel="noopener" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Next.js</title>
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#icon-nextjs"
                />
              </svg>
            </div>
          </a>
          <a href="https://nuxtjs.org/" rel="noopener" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Nuxt.js</title>
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#icon-nuxtjs"
                />
              </svg>
            </div>
          </a>
          <a href="https://gohugo.io/" rel="noopener" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Hugo</title>
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#icon-gohugo"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.gatsbyjs.com/" rel="noopener" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gatsbyjs</title>
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#icon-gatsbyjs"
                />
              </svg>
            </div>
          </a>
          <div
            class="flex items-stretch box-content bg-black rounded-lg shadow-lg h-8 w-8 md:h-16 md:w-16 m-2 p-4"
          >
            <b class="text-center text-sm md:text-2xl m-auto">
              <a
                class="text-white hover:text-white"
                href="https://github.com/topics/static-site-generator"
                rel="noopener"
                target="_blank"
                >More
              </a></b
            >
          </div>
        </div>

        <h2>
          (Coming soon) LAMP stack support
        </h2>
        <div class="flex flex-grow-0 flex-wrap justify-center px-4 pb-8 md:pb-16">
          <a href="https://www.php.net/" rel="noopener" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>PHP</title>
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#icon-php"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.python.org/" rel="noopener" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Python</title>
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#icon-python"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.mysql.com/" rel="noopener" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>MySQL</title>
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/icons.svg#icon-mysql"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>
