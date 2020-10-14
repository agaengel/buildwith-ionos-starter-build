<template>
  <Layout>
    <section class="container mx-auto">
      <div class="subheader">
        <h1>
          Get started in seconds
        </h1>
        <p>
          Step-by-Step Guide
        </p>
      </div>
      <div class="content">
        <h2>Getting started with Buildwith IONOS</h2>
        <p>
          In this tutorial, we will show you how easy it is to launch your site
          with Buildwith IONOS.
          <a href="https://buildwith.ionos.com/">Login</a> with any existing
          IONOS contract. If you are not already a IONOS user, go ahead and
          <a href="https://www.ionos.com/">sign up</a> a contract.
        </p>
        <p/>
        <h2>Step 1: Start your first project</h2>
        <picture class="w-full">
          <source srcset="@images/setup-step1.webp" type="image/webp"/>
          <source srcset="@images/setup-step1.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step1.webp"
            fit="contain"
            alt="Screenshot of dashboard"
          />
        </picture>
        <p>
          Creating a new site with Buildwith IONOS is simple. Once you've logged
          in for the first time, click the <b>Start first project</b> button
          shown above.
        </p>
        <h2>Step 2: Connect to GitHub</h2>
        <p>Clicking <b>Start first project</b> brings you to this screen:</p>
        <picture class="w-full">
          <source srcset="@images/setup-step2.webp" teype="image/webp"/>
          <source srcset="@images/setup-step2.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step2.webp"
            fit="contain"
            alt="Screenshot of GitHub connect"
          />
        </picture>
        <p>
          Click the <b>Connect to GitHub</b> button as illustrated in the
          screenshot above.
        </p>
        <h2>Step 3: Authorize Buildwith IONOS</h2>
        <picture class="w-full">
          <source srcset="@images/setup-step3.webp" type="image/webp"/>
          <source srcset="@images/setup-step3.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step3.webp"
            fit="contain"
            alt="Screenshot of authorization"
          />
        </picture>
        <p>
          It's time to allow Buildwith IONOS and GitHub to talk to each other.
          Clicking the Authorize Application button will do just that. Like it
          says in the image above, Buildwith IONOS doesn't store your GitHub
          access token on our servers.
        </p>
        <h2>Step 4: Configure your project</h2>
        <picture class="w-full">
          <source srcset="@images/setup-step4.webp" type="image/webp"/>
          <source srcset="@images/setup-step4.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step4.webp"
            fit="contain"
            alt="Screenshot of project configuration"
          />
        </picture>
        <p>
          Take a starter to get familiar with Buildwith IONOS and create your
          first live web project in seconds. For the first roundtrip we skip
          advanced settings. Have a look at
          <a href="_blank">Advanced Setup (coming soon)</a> for more details.
          Click on <b>Continue</b> to initialize, build &amp; ship your first
          web project on IONOS.
        </p>
        <h2>
          Step 5: Initialize, Build &amp; Ship your first project to IONOS
        </h2>
        <picture class="w-full">
          <source srcset="@images/setup-step5-1.webp" type="image/webp"/>
          <source srcset="@images/setup-step5-1.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step5-1.webp"
            fit="contain"
            alt="Screenshot of project initialization"
          />
        </picture>
        <p>
          Now, we are starting to setup everything properly for you. Depending
          on the project size this step lasts for longer.
        </p>
        <picture class="w-full">
          <source srcset="@images/setup-step5-2.webp" type="image/webp"/>
          <source srcset="@images/setup-step5-2.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step5-2.webp"
            fit="contain"
            alt="Screenshot of project congrats"
          />
        </picture>
        <p>
          Hopefully, everything goes well all the time, you will see a success
          message. Click on <b>View project details</b> to get a detail summary
          of your project.
        </p>
        <picture class="w-full">
          <source srcset="@images/setup-step5-3.webp" type="image/webp"/>
          <source srcset="@images/setup-step5-3.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step5-3.webp"
            fit="contain"
            alt="Screenshot of project details"
          />
        </picture>
        <p>
          Now, your workflow with
          <a href="https://github.com/features/actions">GitHub Actions</a>
          should run automatically. You can check on GitHub directly or stay
          tuned on our detail page. Progress is indicated by <b>state</b> and a
          thumbnail screenshot as soon as your project is successful shipped to
          IONOS.
        </p>
        <h2>Step 6: All done</h2>
        <p>
          Once the build completes, your site is live! Head to the generated URL
          of your newly published site:
        </p>
        <picture class="w-full">
          <source srcset="@images/setup-step6.webp" type="image/webp"/>
          <source srcset="@images/setup-step6.webp.png" type="image/png"/>
          <g-image
            src="@images/setup-step6.webp"
            fit="contain"
            alt="Screenshot of resulting web project"
          />
        </picture>
        <p>
          Probably not the most outstanding website, but wasn't that easy?
          Taking it a step further you should connect
          <a href="_blank">set up your custom domain (coming soon)</a>.
        </p>
        <p>
          Congratulations on your new website, and thanks for using Buildwith
          IONOS!
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Get started",
  }
}
</script>
