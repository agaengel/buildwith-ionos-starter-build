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
              to
              <a href="https://www.ionos.com/" rel="nofollow" target="_blank"
                >IONOS</a
              >
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
        <h2
          class="lg:text-center text-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 uppercase"
        >
          Get your next web project live in seconds
        </h2>

        <div class="flex flex-wrap justify-center pb-12">
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <img
              class="w-full rounded-t-lg"
              src="@images/connect-your-repository.png"
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
            <!-- src="https://images.unsplash.com/photo-1592063648619-7e520034f357" -->
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

        <!-- features -->
        <!-- free SVG icons for popular brands: https://simpleicons.org/ or https://github.com/simple-icons/simple-icons/tree/develop/icons -->
        <h2
          class="lg:text-center text-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 uppercase"
        >
          Hit the ground running
        </h2>
        <p class="text-xl text-gray-600 mx-auto max-w-4xl pb-12">
          Setting up your next project with Buildwith IONOS brings up essential
          features just from the beginning.
        </p>
        <div class="px-4 pb-12 mx-4">
          <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white"
                  >
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-xl font-medium">
                    Buildwith IONOS makes it simple
                  </h4>
                  <div class="mt-2 text-xl leading-6 text-gray-600">
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
                    class="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white"
                  >
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g><rect fill="none" height="24" width="24" /></g>
                      <g>
                        <g>
                          <g>
                            <path
                              d="M11,5.08V2C6,2.5,2,6.81,2,12s4,9.5,9,10v-3.08c-3-0.48-6-3.4-6-6.92S8,5.56,11,5.08z M18.97,11H22c-0.47-5-4-8.53-9-9 v3.08C16,5.51,18.54,8,18.97,11z M13,18.92V22c5-0.47,8.53-4,9-9h-3.03C18.54,16,16,18.49,13,18.92z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-xl font-medium">
                    Automate your work
                  </h4>
                  <div class="mt-2 text-xl leading-6 text-gray-600">
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
                    class="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white"
                  >
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                        <path
                          d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M13.5,13 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,12.17,13.5,13z M12,9c-2.73,0-5.06,1.66-6,4 c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9z M12,15.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 c1.38,0,2.5,1.12,2.5,2.5C14.5,14.38,13.38,15.5,12,15.5z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-xl font-medium">
                    Preview your changes
                  </h4>
                  <div class="mt-2 text-xl leading-6 text-gray-600">
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
                    class="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white"
                  >
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-xl font-medium">
                    Ship directly to the edge
                  </h4>
                  <div class="mt-2 text-xl leading-6 text-gray-600">
                    Always fast. Always online. Always a hit.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- supported frameworks -->
        <h2
          class="lg:text-center text-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 uppercase"
        >
          Works with all popular
          <a href="https://jamstack.org/" rel="nofollow" target="_blank"
            >Jamstack</a
          >
          frameworks
        </h2>

        <div class="flex flex-grow-0 flex-wrap justify-center pb-12">
          <a href="https://nextjs.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="34"
                height="34"
                viewBox="0 0 48 48"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.428.013c-.103.01-.431.042-.727.066C14.883.693 8.497 4.37 4.453 10.024A23.754 23.754 0 0 0 .216 20.51C.023 21.828 0 22.217 0 24.005c0 1.787.023 2.177.216 3.495 1.304 9.012 7.718 16.584 16.417 19.39 1.558.501 3.2.844 5.068 1.05.727.08 3.87.08 4.598 0 3.224-.356 5.954-1.154 8.648-2.529.412-.21.492-.267.436-.314-.038-.028-1.797-2.388-3.909-5.24l-3.838-5.184-4.809-7.117c-2.646-3.913-4.824-7.112-4.842-7.112-.019-.005-.038 3.157-.047 7.018-.014 6.76-.019 7.033-.103 7.192-.122.23-.216.324-.413.427-.15.075-.282.09-.99.09h-.812l-.216-.137a.878.878 0 0 1-.314-.342l-.099-.211.01-9.407.014-9.41.145-.184c.075-.098.235-.225.347-.286.193-.094.268-.103 1.08-.103.957 0 1.116.038 1.365.31.07.075 2.674 3.997 5.79 8.721s7.376 11.175 9.469 14.342l3.8 5.756.192-.127c1.704-1.107 3.505-2.683 4.932-4.325a23.888 23.888 0 0 0 5.65-12.268c.192-1.319.215-1.708.215-3.495 0-1.788-.023-2.177-.216-3.495-1.304-9.013-7.718-16.584-16.417-19.39C29.832.623 28.199.28 26.369.074c-.45-.047-3.551-.099-3.94-.061zm9.825 14.515a.947.947 0 0 1 .474.554c.038.122.047 2.73.038 8.608l-.014 8.436-1.488-2.28-1.492-2.28v-6.132c0-3.964.019-6.193.047-6.3a.957.957 0 0 1 .465-.592c.192-.098.262-.108 1-.108.694 0 .816.01.97.094z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://nuxtjs.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                height="28"
                viewBox="0 0 399 302"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M122.631 292L121.631 291C119.631 287 119.631 283 119.631 279H24.6311L166.631 27L225.631 134L244.631 120L185.631 13C184.631 11 177.631 0 165.631 0C160.631 0 152.631 2 146.631 13L3.63108 268C2.63108 270 -3.36892 282 2.63108 292C4.63108 297 10.6311 302 23.6311 302H143.631C130.631 302 124.631 297 122.631 292Z"
                ></path>
                <path
                  d="M394.631 269L279.631 62C277.631 60 271.631 49 259.631 49C254.631 49 247.631 51 240.631 62L225.631 86V134L259.631 75L373.631 279H330.631C331.227 283.111 330.528 287.305 328.631 291V292C322.631 302 309.631 302 307.631 302H375.631C377.631 302 390.631 302 396.631 292C398.631 287 400.631 279 394.631 269Z"
                ></path>
                <path
                  d="M331.631 292V291L332.631 289C333.631 286 334.631 282 333.631 279L329.631 268L239.631 110L226.631 86H225.631L212.631 110L121.631 268L118.631 279C117.888 283.436 118.59 287.993 120.631 292C123.631 297 129.631 302 141.631 302H309.631C312.631 302 325.631 302 331.631 292ZM225.631 134L308.631 279H143.631L225.631 134Z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://gohugo.io/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                height="39"
                viewBox="0 0 363 411"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M363 128.301V267.812L362.976 267.811V284.175C362.976 303.506 352.497 321.319 335.583 330.734C299.928 350.566 238.034 384.983 203.087 404.424C186.985 413.378 167.34 413.177 151.432 403.888L31.7583 334.035C12.0908 322.554 0 301.514 0 278.761V135.921C0 112.983 11.9082 91.6899 31.4614 79.6504C63.8823 59.6836 114.108 28.7583 146.301 8.93653C165.26 -2.7373 189.122 -2.99072 208.333 8.27491C244.706 29.6167 304.097 64.4619 337.714 84.1846C353.377 93.375 363 110.159 363 128.301ZM102.11 101.02V308.24H145.464V217.634H217.38V308.24H260.86V101.02H217.38V176.5H145.464V101.02H102.11Z"
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
              >
                <path
                  d="M30 0C13.5 0 0 13.5 0 30s13.5 30 30 30 30-13.5 30-30S46.5 0 30 0zM13.286 46.714c-4.5-4.5-6.857-10.5-6.857-16.285L29.786 53.57c-6-.214-12-2.357-16.5-6.857zm21.857 6.215L7.07 24.857C9.43 14.357 18.857 6.43 30 6.43c7.929 0 14.786 3.857 19.071 9.642l-3.214 2.786C42.214 13.93 36.43 10.714 30 10.714c-8.357 0-15.429 5.357-18.214 12.857l24.643 24.643c6.214-2.143 10.928-7.5 12.428-13.928H38.571V30h15c0 11.143-7.928 20.571-18.428 22.929z"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://github.com/topics/static-site-generator"
            rel="nofollow"
            target="_blank"
          >
            <div
              class="flex items-stretch box-content h-16 w-16 m-2 p-4 bg-black rounded-lg shadow-lg"
            >
              <b class="w-full self-center text-white text-center text-2xl"
                >More</b
              >
            </div>
          </a>
        </div>

        <h2
          class="lg:text-center text-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 uppercase"
        >
          (Coming soon) LAMP stack support
        </h2>
        <div class="flex flex-grow-0 flex-wrap justify-center pb-12">
          <a href="https://www.php.net/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="90"
                height="46"
                viewBox="0 0 90 46"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.615 0h6.87L43.54 9.51h6.174c3.383.066 5.911.762 7.575 2.096 1.691 1.325 2.19 3.853 1.494 7.575l-3.336 16.587h-6.974l3.186-15.835c.33-1.664.235-2.839-.3-3.534-.527-.695-1.673-1.043-3.44-1.043l-5.526-.047-4.088 20.468h-6.87L38.615 0zM7.123 9.51h13.345c3.919.029 6.757 1.166 8.515 3.384 1.757 2.227 2.34 5.262 1.738 9.115-.235 1.758-.752 3.487-1.541 5.179a15.375 15.375 0 01-3.186 4.586c-1.663 1.729-3.44 2.819-5.328 3.289a24.75 24.75 0 01-5.874.695H8.815l-1.889 9.464H0L7.123 9.51zM9.962 30.14l2.98-14.905h1.004c.367 0 .752-.019 1.147-.047 2.66-.028 4.868.216 6.625.752 1.795.526 2.396 2.537 1.795 6.023-.733 4.154-2.161 6.579-4.285 7.274-2.124.668-4.784.978-7.97.95h-.695c-.207 0-.404-.02-.601-.047zM79.514 9.51H66.169l-7.123 35.71h6.926l1.898-9.463h5.977c2.02 0 3.985-.235 5.874-.695 1.889-.47 3.665-1.56 5.328-3.29a15.377 15.377 0 003.186-4.585 17.502 17.502 0 001.541-5.178c.592-3.854.01-6.889-1.748-9.116-1.757-2.218-4.595-3.355-8.514-3.383zm-7.526 5.723l-2.98 14.905c.197.028.394.047.6.047h.696c3.186.028 5.846-.282 7.97-.95 2.123-.695 3.552-3.12 4.285-7.274.601-3.486 0-5.497-1.795-6.023-1.757-.536-3.966-.78-6.626-.752-.394.028-.78.047-1.146.047h-1.004z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://www.python.org/" rel="nofollow" target="_blank">
            <div class="object-contain m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="2500"
                height="2500"
                viewBox="0 0 192.756 192.756"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                  <path
                    d="M12.654 127.27h5.526v-21.893l8.629 19.088c.978 2.295 2.381 3.145 5.101 3.145 2.721 0 4.039-.85 5.059-3.145l8.587-19.088v21.893h5.569v-21.893c0-2.125-.85-3.145-2.636-3.697-4.208-1.275-7.014-.17-8.289 2.678l-8.46 18.875-8.162-18.875c-1.233-2.848-4.082-3.953-8.333-2.678-1.743.553-2.593 1.572-2.593 3.697v21.893h.002zM55.717 109.459h5.568v12.029c-.042.682.213 2.211 3.23 2.254 1.573.043 11.988 0 12.073 0v-14.369h5.569v19.684c0 4.846-5.994 5.908-8.799 5.951H55.844v-3.699h17.557c3.571-.383 3.146-2.168 3.146-2.764V127.1H64.771c-5.484-.041-9.012-2.465-9.054-5.229 0-.254.127-12.328 0-12.412zM175.172 95.515c-3.4-.085-6.037.255-8.248 1.19-.637.256-1.658.256-1.742 1.062.34.342.383.893.68 1.361.51.85 1.402 1.998 2.211 2.594.893.68 1.785 1.359 2.721 1.955 1.658 1.02 3.527 1.615 5.143 2.635.936.596 1.871 1.361 2.807 1.998.467.34.766.893 1.359 1.105v-.127c-.297-.383-.381-.936-.68-1.361-.424-.424-.85-.807-1.275-1.232-1.232-1.658-2.762-3.104-4.42-4.293-1.361-.936-4.336-2.211-4.889-3.785l-.086-.084c.936-.084 2.041-.424 2.934-.68 1.445-.383 2.764-.299 4.25-.68a37.76 37.76 0 0 0 2.041-.596v-.383c-.766-.765-1.316-1.786-2.125-2.508-2.168-1.87-4.549-3.698-7.014-5.229-1.318-.85-3.02-1.403-4.422-2.125-.51-.255-1.359-.383-1.658-.808-.766-.936-1.189-2.168-1.742-3.273-1.232-2.338-2.424-4.931-3.486-7.396-.766-1.658-1.232-3.316-2.168-4.846-4.379-7.227-9.141-11.605-16.451-15.899-1.574-.893-3.443-1.275-5.441-1.743-1.062-.042-2.125-.127-3.189-.17-.68-.298-1.359-1.105-1.955-1.488-2.422-1.53-8.672-4.846-10.457-.467-1.148 2.763 1.701 5.483 2.678 6.887.723.978 1.658 2.083 2.168 3.188.297.722.383 1.488.68 2.253.682 1.87 1.318 3.953 2.211 5.696.469.893.979 1.828 1.574 2.635.34.468.934.68 1.062 1.446-.596.85-.639 2.125-.979 3.188-1.529 4.804-.936 10.755 1.232 14.284.682 1.063 2.297 3.401 4.465 2.508 1.912-.765 1.486-3.188 2.039-5.313.129-.511.043-.851.299-1.19v.085c.596 1.19 1.189 2.338 1.742 3.528 1.318 2.083 3.613 4.251 5.527 5.696 1.02.765 1.828 2.083 3.104 2.551v-.129h-.086c-.256-.381-.637-.553-.977-.85-.766-.765-1.617-1.701-2.211-2.55-1.787-2.381-3.359-5.017-4.762-7.737-.68-1.317-1.275-2.763-1.828-4.081-.256-.51-.256-1.275-.68-1.53-.639.935-1.574 1.743-2.041 2.89-.807 1.828-.893 4.081-1.189 6.419-.172.042-.086 0-.172.085-1.359-.34-1.826-1.743-2.338-2.933-1.275-3.019-1.486-7.865-.381-11.35.297-.893 1.572-3.699 1.062-4.549-.256-.808-1.105-1.275-1.574-1.913-.553-.808-1.146-1.828-1.529-2.721-1.021-2.38-1.531-5.016-2.637-7.397-.51-1.105-1.402-2.253-2.125-3.273-.807-1.148-1.701-1.956-2.338-3.316-.213-.468-.51-1.233-.17-1.743.086-.34.254-.468.596-.552.553-.468 2.125.127 2.678.382 1.572.638 2.891 1.232 4.209 2.125.594.425 1.232 1.233 1.998 1.446h.893c1.359.297 2.891.085 4.166.467 2.252.722 4.293 1.786 6.121 2.933 5.568 3.528 10.16 8.545 13.264 14.539.51.978.723 1.87 1.189 2.891.893 2.083 1.998 4.208 2.891 6.249.893 1.998 1.742 4.038 3.018 5.696.639.893 3.189 1.36 4.336 1.828.852.382 2.17.723 2.934 1.19 1.445.893 2.891 1.913 4.252 2.891.677.511 2.802 1.574 2.931 2.424z"
                  />
                  <path
                    d="M131.811 58.573c-.723 0-1.232.085-1.742.212v.085h.084c.34.68.936 1.147 1.359 1.743.342.68.639 1.36.979 2.041l.086-.085c.596-.426.893-1.105.893-2.126-.256-.298-.297-.595-.51-.893-.257-.424-.81-.636-1.149-.977zM86.41 127.27h15.983c1.871 0 3.656-.381 5.102-1.062 2.424-1.105 3.572-2.592 3.572-4.549v-4.08c0-1.572-1.318-3.061-3.955-4.082-1.359-.51-3.061-.807-4.719-.807h-6.716c-2.253 0-3.316-.68-3.614-2.168-.042-.17-.042-.34-.042-.51v-2.508c0-.129 0-.299.042-.469.298-1.148.893-1.445 2.849-1.658h16.366v-3.697H95.719c-2.253 0-3.443.127-4.506.467-3.273 1.02-4.719 2.637-4.719 5.484v3.23c0 2.508 2.806 4.633 7.567 5.145.51.041 1.063.041 1.616.041h5.739c.213 0 .424 0 .596.043 1.742.17 2.508.469 3.018 1.105.34.34.424.639.424 1.02v3.232c0 .381-.254.893-.764 1.316-.51.426-1.318.723-2.381.766-.213 0-.34.043-.553.043H86.41v3.698zM145.67 120.852c0 3.783 2.848 5.908 8.543 6.334.553.043 1.064.084 1.615.084h14.455v-3.697h-14.582c-3.23 0-4.463-.809-4.463-2.764V101.68h-5.568v19.172zM114.594 121.021v-13.178c0-3.359 2.381-5.4 7.014-6.037.51-.043 1.021-.084 1.488-.084h10.543c.553 0 1.02.041 1.572.084 4.635.637 6.973 2.678 6.973 6.037v13.178c0 2.721-.979 4.166-3.273 5.145l5.441 4.93h-6.42l-4.42-3.996-4.465.256h-5.951a12.92 12.92 0 0 1-3.23-.426c-3.53-.977-5.272-2.848-5.272-5.909zm5.994-.296c0 .17.084.34.127.553.299 1.529 1.744 2.379 3.953 2.379h5.018l-4.592-4.166h6.418l4.039 3.656c.766-.426 1.234-1.02 1.404-1.785.041-.17.041-.383.041-.553v-12.625c0-.17 0-.34-.041-.51-.299-1.445-1.744-2.254-3.912-2.254h-8.375c-2.465 0-4.08 1.062-4.08 2.764v12.541zM172.834 127.312h.807v-3.104h1.062v-.637h-2.975v.637h1.105v3.104h.001zm6.164 0h.764v-3.74h-1.146l-.936 2.551-1.02-2.551h-1.107v3.74h.725v-2.848h.041l1.062 2.848h.553l1.064-2.848v2.848z"
                  />
                </g>
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
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.501 6.642S14.551 0 29.78 0C45.7 0 44.472 8.002 44.472 8.002V21.23c0 8.002-8.101 7.87-8.101 7.87H21.956c-8.644 0-8.373 8.554-8.373 8.554v7.166H8.51S0 45.367 0 29.921c0-15.447 9.747-14.338 9.747-14.338h20.305v-2.065H15.518L15.5 6.642zm8.878.612a2.618 2.618 0 00-2.613-2.628 2.618 2.618 0 00-2.613 2.628 2.618 2.618 0 002.613 2.627 2.618 2.618 0 002.613-2.627zm20.114 46.105S45.444 60 30.214 60c-15.92 0-14.686-8.002-14.686-8.002V38.77c0-8.002 8.101-7.871 8.101-7.871h14.415c8.644 0 8.373-8.554 8.373-8.554V15.18h5.074S60 14.633 60 30.08c0 15.447-9.747 14.338-9.747 14.338h-20.31v2.065h14.534l.016 6.877zm-8.878-.612a2.618 2.618 0 002.614 2.627 2.618 2.618 0 002.613-2.627 2.618 2.618 0 00-2.613-2.627 2.618 2.618 0 00-2.614 2.627z"
                ></path>
              </svg>
            </div>
          </a>
        </div>

        <!--div class="flex flex-grow-0 flex-wrap justify-center pb-12">
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
          <a href="https://vuejs.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="object-scale-down h-16 w-16"
                width="70"
                height="60"
                viewBox="0 0 70 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.766 0H43.75L35 13.855 27.5 0H0l35 60L70 0H55.766zM8.703 5.004h8.406L35 35.997 52.875 5.004h8.406L35 50.07 8.703 5.004z"
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
