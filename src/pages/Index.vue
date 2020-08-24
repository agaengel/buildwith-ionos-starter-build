<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="text-5xl">Welcome to Buildwith IONOS</h1>
      <div class="content">
        <p>
          Get your next web project live in seconds
        </p>

        <!-- hero -->
        <div
          class="container pb-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center"
        >
          <div
            class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
          >
            <h1
              class="my-4 text-3xl md:text-5xl text-blue-600 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
            >
              Just
              <a href="https://git-scm.com/docs/git-push">git push</a> to ship
              to <a href="https://www.ionos.com/">IONOS</a>.
            </h1>
            <p
              class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle"
            >
              Use Buildwith IONOS to get your next web project live in seconds.
              Try yourself by click on <b>Ship to IONOS</b>.
            </p>
            <button
              class="mx-auto lg:mx-0 hover:underline bg-black text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            >
              ➤ Ship to IONOS
            </button>
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

        <div class="flex flex-row pb-12">
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 ml-4 mr-4 bg-gray-200"
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
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 ml-4 mr-4 bg-gray-200"
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
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 ml-4 mr-4 bg-gray-200"
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

        <div
          class="lg:text-center text-xl text-gray-600 mx-auto pb-12 px-4 sm:px-6 lg:px-8"
        >
          Buildwith IONOS supports any modern framework
        </div>

        <!--div class="flex flex-wrap justify-center">
          <div class="w-2/12 px-4">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png"
              alt="..."
              class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
          <div class="w-2/12 px-4">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png"
              alt="..."
              class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div-->


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
