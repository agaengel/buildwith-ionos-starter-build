<template>
  <Layout>
    <section class="container mx-auto">
      <h1 class="text-5xl">Welcome to Buildwith IONOS</h1>
      <div class="content">
        <p>
          Get your next web project live in seconds
        </p>

        <!-- hero -->
        <div
          class="pb-24 px-6 flex flex-wrap flex-col md:flex-row items-center"
        >
          <div
            class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
          >
            <h1
              class="my-4 text-3xl md:text-5xl text-blue-600 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
            >
              Just
              <a href="https://git-scm.com/docs/git-push">git push</a> to ship
              to <a href="https://www.ionos.com/">IONOS</a>
            </h1>
            <p
              class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle"
            >
              Use Buildwith IONOS to get your next web project live in seconds.
              Try yourself by click on <b>Ship to IONOS</b>.
            </p>
            <a
              class="buildwith"
              href="https://buildwith.ionos.com/setup?repo=https://github.com/buildwith-ionos/gatsby-starter-default"
              rel="nofollow"
              target="_blank"
            >
              <button
                class="mx-auto lg:mx-0 bg-black text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
              >
                ➤ Ship to IONOS
              </button>
            </a>
          </div>
          <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img
              class="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src="https://images.unsplash.com/photo-1584907797015-7554cd315667"
            />
          </div>
        </div>

        <!-- step-by-step -->
        <div
          class="lg:text-center text-xl text-gray-600 mx-auto pb-12 px-4 sm:px-6 lg:px-8"
        >
          Lorem ipsum ... get started
        </div>

        <div class="flex flex-wrap justify-center pb-12">
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <img
              class="w-full rounded-t-lg"
              src="@images/setup-step3.png"
              alt="Connect your repository"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                1. Connect your repository
              </div>
              <div class="text-xl text-gray-600">
                Just
                <a href="https://git-scm.com/docs/git-push">git push</a> to ship
                to <a href="https://www.ionos.com/">IONOS</a>.
              </div>
            </div>
          </div>
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <img
              class="w-full rounded-t-lg"
              src="@images/setup-your-project.png"
              alt="Setup your project"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                2. Setup your project
              </div>
              <div class="text-xl text-gray-600">
                IONOS detects by default a bunch of popular frameworks and is
                totally customizable at the same time.
              </div>
            </div>
          </div>
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <img
              class="w-full rounded-t-lg"
              src="@images/ship-to-IONOS.png"
              alt="Ship to IONOS"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                3. Ship to IONOS
              </div>
              <div class="text-xl text-gray-600">
                Publishing is seamless with instant cache invalidation and
                atomic deploys.
              </div>
            </div>
          </div>
        </div>

        <!-- framework listing -->
        <div
          class="lg:text-center text-xl text-gray-600 mx-auto pb-12 px-4 sm:px-6 lg:px-8"
        >
          Buildwith IONOS supports any modern framework
        </div>

        <div class="flex flex-grow-0 flex-wrap justify-center">
          <a href="http://reactjs.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="67"
                height="60"
                viewBox="0 0 67 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52.92 18.69C61.442 21.315 67 25.545 67 30.008c0 4.45-5.531 8.68-13.998 11.302 1.98 8.707 1.12 15.642-2.718 17.867-.901.522-1.94.77-3.086.77-3.756 0-8.672-2.665-13.643-7.307C28.584 57.309 23.667 60 19.912 60c-1.148 0-2.185-.247-3.073-.77-3.851-2.224-4.725-9.173-2.759-17.907C5.558 38.7 0 34.47 0 30.007c0-4.45 5.531-8.666 14.025-11.303-1.98-8.706-1.12-15.642 2.718-17.866.902-.522 1.94-.77 3.087-.77V.056c3.755 0 8.672 2.664 13.643 7.306C38.443 2.691 43.36 0 47.116 0v.014c1.128.002 2.161.249 3.045.769 3.851 2.225 4.725 9.174 2.759 17.908zM47.102 3.063c-2.84.008-7.013 2.287-11.458 6.441 1.926 2.02 3.838 4.326 5.681 6.867 3.073.33 5.996.838 8.672 1.497.3-1.387.547-2.747.697-4.038.628-5.246-.178-9.325-2.035-10.396-.423-.233-.929-.357-1.557-.357v-.014zm-15.8 6.455c-4.453-4.134-8.645-6.4-11.472-6.4v.014c-.629 0-1.161.11-1.57.357-1.845 1.085-2.637 5.164-1.995 10.41.164 1.277.396 2.61.71 3.983 2.677-.673 5.6-1.181 8.686-1.511a64.786 64.786 0 015.64-6.853zm16.073 16.755a62.113 62.113 0 001.844-5.425 61.307 61.307 0 00-5.6-1.085 74.468 74.468 0 011.967 3.213 65.141 65.141 0 011.79 3.296zm-7.702 14.447a73.203 73.203 0 003.291-5.246 77.02 77.02 0 002.827-5.48 71.69 71.69 0 00-2.84-5.466 75.768 75.768 0 00-3.306-5.218 75.826 75.826 0 00-6.145-.261c-2.076 0-4.138.096-6.173.275a73.187 73.187 0 00-3.291 5.245 71.74 71.74 0 00-2.827 5.48 71.69 71.69 0 002.84 5.466 75.768 75.768 0 003.306 5.218c2.02.165 4.083.261 6.145.261 2.076 0 4.138-.096 6.173-.274zm9.587-1.566a59.117 59.117 0 00-1.885-5.466 78.185 78.185 0 01-1.775 3.31 75.942 75.942 0 01-1.967 3.255 60.976 60.976 0 005.627-1.099zm-19.53 4.793a56.538 56.538 0 003.797 4.395 53.525 53.525 0 003.756-4.395 69.069 69.069 0 01-3.797.096c-1.27 0-2.526-.041-3.755-.096zm-11.963-4.78c1.79.44 3.66.797 5.6 1.086a91.007 91.007 0 01-1.967-3.214 65.136 65.136 0 01-1.789-3.296 62.07 62.07 0 00-1.844 5.425zm19.489-23.098a56.514 56.514 0 00-3.797-4.395 53.523 53.523 0 00-3.756 4.395 69.074 69.074 0 013.797-.096c1.27 0 2.526.04 3.756.096zm-15.87 6.949a75.977 75.977 0 011.967-3.255c-1.953.288-3.838.66-5.627 1.085a59.058 59.058 0 001.885 5.466 77.703 77.703 0 011.776-3.296zm-18.354 6.99c0 2.156 3.127 4.875 7.962 6.949 1.188.508 2.472.975 3.824 1.4.764-2.677 1.775-5.465 3.031-8.322-1.27-2.87-2.294-5.671-3.072-8.363-1.325.426-2.609.879-3.783 1.387-4.835 2.06-7.962 4.793-7.962 6.949zm13.274 16.177c-.628 5.247.178 9.325 2.035 10.396.41.234.929.358 1.543.371 2.84 0 7.02-2.28 11.472-6.44-1.926-2.02-3.838-4.327-5.681-6.867-3.073-.33-5.996-.838-8.672-1.497a42.474 42.474 0 00-.697 4.038zm32.435 10.342c1.844-1.085 2.636-5.164 1.994-10.41a38.63 38.63 0 00-.71-3.996c-2.677.672-5.6 1.18-8.686 1.51a64.78 64.78 0 01-5.64 6.853c4.452 4.134 8.645 6.4 11.471 6.4.629 0 1.161-.11 1.57-.358zm3.469-18.183c1.324-.426 2.608-.88 3.783-1.387 4.834-2.06 7.962-4.793 7.975-6.95 0-2.155-3.127-4.874-7.962-6.948a43.191 43.191 0 00-3.837-1.4c-.765 2.677-1.776 5.465-3.032 8.321 1.27 2.87 2.294 5.672 3.073 8.364zm-12.483-8.336c0 3.466-2.794 6.276-6.24 6.276-3.448 0-6.242-2.81-6.242-6.276 0-3.466 2.794-6.276 6.241-6.276 3.447 0 6.242 2.81 6.242 6.276z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://www.gatsbyjs.com/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                data-v-6cd9246e=""
              >
                <path
                  d="M30 0C13.5 0 0 13.5 0 30s13.5 30 30 30 30-13.5 30-30S46.5 0 30 0zM13.286 46.714c-4.5-4.5-6.857-10.5-6.857-16.285L29.786 53.57c-6-.214-12-2.357-16.5-6.857zm21.857 6.215L7.07 24.857C9.43 14.357 18.857 6.43 30 6.43c7.929 0 14.786 3.857 19.071 9.642l-3.214 2.786C42.214 13.93 36.43 10.714 30 10.714c-8.357 0-15.429 5.357-18.214 12.857l24.643 24.643c6.214-2.143 10.928-7.5 12.428-13.928H38.571V30h15c0 11.143-7.928 20.571-18.428 22.929z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://vuejs.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="70"
                height="60"
                viewBox="0 0 70 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                data-v-6cd9246e=""
              >
                <path
                  d="M55.766 0H43.75L35 13.855 27.5 0H0l35 60L70 0H55.766zM8.703 5.004h8.406L35 35.997 52.875 5.004h8.406L35 50.07 8.703 5.004z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://www.python.org/" rel="nofollow" target="_blank">
            <div class="object-contain m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                data-v-6cd9246e=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.501 6.642S14.551 0 29.78 0C45.7 0 44.472 8.002 44.472 8.002V21.23c0 8.002-8.101 7.87-8.101 7.87H21.956c-8.644 0-8.373 8.554-8.373 8.554v7.166H8.51S0 45.367 0 29.921c0-15.447 9.747-14.338 9.747-14.338h20.305v-2.065H15.518L15.5 6.642zm8.878.612a2.618 2.618 0 00-2.613-2.628 2.618 2.618 0 00-2.613 2.628 2.618 2.618 0 002.613 2.627 2.618 2.618 0 002.613-2.627zm20.114 46.105S45.444 60 30.214 60c-15.92 0-14.686-8.002-14.686-8.002V38.77c0-8.002 8.101-7.871 8.101-7.871h14.415c8.644 0 8.373-8.554 8.373-8.554V15.18h5.074S60 14.633 60 30.08c0 15.447-9.747 14.338-9.747 14.338h-20.31v2.065h14.534l.016 6.877zm-8.878-.612a2.618 2.618 0 002.614 2.627 2.618 2.618 0 002.613-2.627 2.618 2.618 0 00-2.613-2.627 2.618 2.618 0 00-2.614 2.627z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://www.php.net/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="90"
                height="46"
                viewBox="0 0 90 46"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                data-v-6cd9246e=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.615 0h6.87L43.54 9.51h6.174c3.383.066 5.911.762 7.575 2.096 1.691 1.325 2.19 3.853 1.494 7.575l-3.336 16.587h-6.974l3.186-15.835c.33-1.664.235-2.839-.3-3.534-.527-.695-1.673-1.043-3.44-1.043l-5.526-.047-4.088 20.468h-6.87L38.615 0zM7.123 9.51h13.345c3.919.029 6.757 1.166 8.515 3.384 1.757 2.227 2.34 5.262 1.738 9.115-.235 1.758-.752 3.487-1.541 5.179a15.375 15.375 0 01-3.186 4.586c-1.663 1.729-3.44 2.819-5.328 3.289a24.75 24.75 0 01-5.874.695H8.815l-1.889 9.464H0L7.123 9.51zM9.962 30.14l2.98-14.905h1.004c.367 0 .752-.019 1.147-.047 2.66-.028 4.868.216 6.625.752 1.795.526 2.396 2.537 1.795 6.023-.733 4.154-2.161 6.579-4.285 7.274-2.124.668-4.784.978-7.97.95h-.695c-.207 0-.404-.02-.601-.047zM79.514 9.51H66.169l-7.123 35.71h6.926l1.898-9.463h5.977c2.02 0 3.985-.235 5.874-.695 1.889-.47 3.665-1.56 5.328-3.29a15.377 15.377 0 003.186-4.585 17.502 17.502 0 001.541-5.178c.592-3.854.01-6.889-1.748-9.116-1.757-2.218-4.595-3.355-8.514-3.383zm-7.526 5.723l-2.98 14.905c.197.028.394.047.6.047h.696c3.186.028 5.846-.282 7.97-.95 2.123-.695 3.552-3.12 4.285-7.274.601-3.486 0-5.497-1.795-6.023-1.757-.536-3.966-.78-6.626-.752-.394.028-.78.047-1.146.047h-1.004z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://angular.io/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="56"
                height="60"
                viewBox="0 0 56 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                data-v-6cd9246e=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 0L0 9.96l4.27 36.93L28 60l23.73-13.11L56 9.96 28 0zM10.496 45.78L28 6.63l17.444 39.15h-6.527L35.4 37.02H20.54l-3.518 8.76h-6.527zM28 19.35l-5.113 12.27h10.226L28 19.35z"
                ></path>
              </svg>
            </div>
          </a>
          <div class="flex items-stretch box-content h-16 w-16 m-2 p-4 bg-black rounded-lg shadow-lg">
            <b class="w-full self-center text-white text-center text-2xl">More</b>
          </div>
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
