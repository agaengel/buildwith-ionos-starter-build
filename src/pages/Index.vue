<template>
  <Layout>
    <section class="container mx-8 md:mx-auto">
      <h1 class="text-2xl md:text-5xl font-medium pb-4">
        Welcome to Buildwith IONOS
      </h1>
      <div class="content">
        <p>
          Get your next web project live in seconds
        </p>

        <!-- hero -->
        <div class="flex flex-wrap flex-col md:flex-row pb-12 px-6">
          <div class="flex flex-col w-full xl:w-2/5">
            <h1
              class="text-2xl md:text-5xl text-blue-600 font-bold text-left my-4"
            >
              Just
              <a href="https://git-scm.com/docs/git-push">git push</a> to ship
              to
              <a href="https://www.ionos.com/" rel="nofollow" target="_blank"
                >IONOS</a
              >
            </h1>
            <div class="text-xl md:text-3xl text-left font-light mb-8">
              Use Buildwith IONOS to get your next web project live in seconds.
              Try yourself by click on <b>Ship to IONOS</b>.
            </div>
            <a
              href="https://buildwith.ionos.com/setup?repo=https://github.com/buildwith-ionos/gatsby-starter-default"
              rel="nofollow"
              target="_blank"
            >
              <button
                class="text-white font-bold rounded-full bg-black shadow-lg focus:outline-none mx-auto my-6 py-4 px-8"
              >
                ➤ Ship to IONOS
              </button>
            </a>
          </div>
          <div class="w-full xl:w-3/5 overflow-y-hidden">
            <img
              class="w-5/6 mx-auto"
              src="https://images.unsplash.com/photo-1584907797015-7554cd315667"
            />
          </div>
        </div>

        <!-- step-by-step -->
        <h2
          class="text-xl md:text-3xl font-normal text-center uppercase mx-auto pb-12 px-4 sm:px-6 lg:px-8"
        >
          Get your next web project live in seconds
        </h2>

        <div class="flex flex-wrap justify-center pb-12">
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <img
              class="w-full"
              src="@images/connect-your-repository.png"
              alt="Connect your repository"
            />
            <div class="py-4 px-6">
              <div class="text-xl font-medium mb-2">
                1. Connect your repository
              </div>
              <div class="text-base md:text-xl text-gray-600">
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
              class="w-full"
              src="@images/setup-your-project.png"
              alt="Setup your project"
            />
            <div class="py-4 px-6">
              <div class="text-xl md:text-2xl font-medium mb-2">
                2. Setup your project
              </div>
              <div class="text-base md:text-xl text-gray-600">
                IONOS detects by default a bunch of popular frameworks and is
                totally customizable at the same time.
              </div>
            </div>
          </div>
          <div
            class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-4 m-4 bg-gray-200"
          >
            <img
              class="w-full"
              src="@images/ship-to-IONOS.png"
              alt="Ship to IONOS"
            />
            <!-- src="https://images.unsplash.com/photo-1592063648619-7e520034f357" -->
            <div class="py-4 px-6">
              <div class="text-xl md:text-2xl font-medium mb-2">
                3. Ship to IONOS
              </div>
              <div class="text-base md:text-xl text-gray-600">
                Publishing is seamless with instant cache invalidation and
                atomic deploys.
              </div>
            </div>
          </div>
        </div>

        <!-- features -->
        <!-- free SVG icons for popular brands: https://simpleicons.org/ or https://github.com/simple-icons/simple-icons/tree/develop/icons -->
        <h2
          class="text-xl md:text-3xl font-normal text-center uppercase mx-auto pb-12 px-4 sm:px-6 lg:px-8"
        >
          Hit the ground running
        </h2>
        <div class="text-xl text-gray-600 mx-auto max-w-4xl pb-12">
          Setting up your next project with Buildwith IONOS brings up essential
          features just from the beginning.
        </div>
        <div class="pb-12 px-4">
          <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-600"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      viewBox="0 0 24 24"
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
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-600"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      viewBox="0 0 24 24"
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
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-600"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      viewBox="0 0 24 24"
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
                    class="flex items-center justify-center rounded-md m-2 p-2 bg-blue-600"
                  >
                    <svg
                      class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                      viewBox="0 0 24 24"
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
          class="text-xl md:text-3xl font-normal text-center uppercase mx-auto pb-12 px-4 sm:px-6 lg:px-8"
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
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"
                />
              </svg>
            </div>
          </a>
          <a href="https://nuxtjs.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.724 20.272l.023-.045a.74.74 0 0 0 .053-.117l.002-.005a1.16 1.16 0 0 0 .054-.607l.001.007a1.795 1.795 0 0 0-.235-.623l.005.008-5.317-9.353-.812-1.42-.807 1.42-5.314 9.353a1.85 1.85 0 0 0-.204.604l-.001.011a1.257 1.257 0 0 0 .08.713l-.003-.008a.809.809 0 0 0 .05.102l-.002-.004c.16.275.5.602 1.25.602h9.898c.157 0 .925-.032 1.28-.637zm-6.227-9.316l4.859 8.548H8.64zm10.249 7.934L16.73 6.53c-.072-.13-.477-.787-1.182-.787-.317 0-.772.135-1.142.785l-.907 1.59.807 1.42 1.25-2.212 6.941 12.18h-2.64a1.187 1.187 0 0 1-.058.608l.003-.008a.772.772 0 0 1-.057.126l.002-.004-.023.045c-.355.605-1.122.637-1.272.637h4.129c.152 0 .917-.032 1.272-.637.157-.275.27-.737-.107-1.382zM7.304 20.307a.989.989 0 0 1-.045-.092l-.002-.006a1.228 1.228 0 0 1-.084-.712l-.001.007H1.501L9.93 4.672l2.767 4.864.802-1.42-2.412-4.249c-.067-.122-.475-.777-1.177-.777-.317 0-.772.137-1.142.787L.23 18.889c-.072.13-.425.812-.075 1.417.16.275.5.602 1.25.602h7.151c-.745 0-1.09-.322-1.25-.602z"
                />
              </svg>
            </div>
          </a>
          <a href="https://gohugo.io/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.754 0a3.998 3.998 0 00-2.049.596L3.33 4.532a4.252 4.252 0 00-2.017 3.615v8.03c0 1.473.79 2.838 2.067 3.574l6.486 3.733a3.88 3.88 0 003.835.018l7.043-3.966a3.817 3.817 0 001.943-3.323V7.752a3.57 3.57 0 00-1.774-3.084L13.817.541a3.998 3.998 0 00-2.063-.54zm.022 1.674c.413-.006.828.1 1.2.315l7.095 4.127c.584.34.941.96.94 1.635v8.462c0 .774-.414 1.484-1.089 1.864l-7.042 3.966a2.199 2.199 0 01-2.179-.01l-6.485-3.734a2.447 2.447 0 01-1.228-2.123v-8.03c0-.893.461-1.72 1.221-2.19l6.376-3.935a2.323 2.323 0 011.19-.347zm-4.7 3.844V18.37h2.69v-5.62h4.46v5.62h2.696V5.518h-2.696v4.681h-4.46V5.518Z"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.gatsbyjs.com/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://github.com/topics/static-site-generator"
            rel="nofollow"
            target="_blank"
          >
            <div
              class="flex items-stretch box-content bg-black rounded-lg shadow-lg h-8 w-8 md:h-16 md:w-16 m-2 p-4"
            >
              <b class="text-white text-center text-sm md:text-2xl m-auto"
                >More</b
              >
            </div>
          </a>
        </div>

        <h2
          class="text-xl md:text-3xl font-normal text-center uppercase mx-auto pb-12 px-4 sm:px-6 lg:px-8"
        >
          (Coming soon) LAMP stack support
        </h2>
        <div class="flex flex-grow-0 flex-wrap justify-center pb-12">
          <a href="https://www.php.net/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.python.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.python.org/" rel="nofollow" target="_blank">
            <div class="m-2 p-4 bg-black rounded-lg shadow-lg">
              <svg
                class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zM23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"
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
