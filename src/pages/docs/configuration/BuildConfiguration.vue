<template>
  <Layout>
    <section class="container mx-auto">
      <div class="subheader">
        <h1>Project Build Configuration</h1>
        <p>How Buildwith Ionos handels the build configuration for a project</p>
      </div>
      <div class="content">
        <h2>Buildwith Ionos uses <a href="https://github.com/features/actions" target="_blank" rel="noopener">Github actions</a> to process the
          building of projects
          and deploys the
          result to a Webspace.</h2>
        <p>When a new Project is created Buildwith Ionos needs a buildconfiguration to generate the github actions <a
          href="https://docs.github.com/en/free-pro-team@latest/actions/reference#workflow-syntax" target="_blank" rel="noopener">workflow
          file</a>.<br>
          A <span class="font-mono">.ionos.yaml</span> in the git repository will be used if present.<br>
          If no configruation is provided in the repository Buildwith Ionos tries to identify the buildconfiguration.<br>
          When this is not possible you can select a build template suitable for the project.
        </p>
        <p>The following Information should help you to generate a <span class="font-mono">.ionos.yaml</span> for a repository.</p>
        <p class="-mb-5">
          The <span class="font-mono">.ionos.yaml</span> has to be in the root of the git repository.<br>
          It defines how to prepare the build environment, build the project and which directory should be copied to the webspace.
        </p>
        <p class="-mb-5 mt-5">A <span class="font-mono">.ionos.yaml</span> has the following properties:</p>
        <div>
          <vue-good-table
            :columns="columns"
            :rows="rowsIonosYaml"/>
        </div>
        <p id="setup" class="-mb-5 mt-5">A SetupStep is a <a
          href="https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses"
          target="_blank" rel="noopener">uses
          steps</a> for the github workflow that defines a action.<br> It has the following properties:</p>
        <div>
          <vue-good-table
            :columns="columns" hrel
            :rows="rowsSetupStep"/>
        </div>
        <p id="prepare" class="-mb-5 mt-5">A PrepareStep is a <a
          href="https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun"
          target="_blank" rel="noopener">run step</a>
          used to prepare the environment e.G. installing the build dependencies. <br>It has the following properties:</p>
        <div>
          <vue-good-table
            :columns="columns"
            :rows="rowsPrepare"/>
        </div>
        <p id="build" class="-mb-5 mt-5">A BuildStep is a <a
          href="https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun"
          target="_blank" rel="noopener">run step</a>
          used to build the project.<br>It has the following properties:</p>
        <div>
          <vue-good-table
            :columns="columns"
            :rows="rowsBuild"/>
        </div>
        <p class="mt-4">
          The <a href="https://github.com/marketplace/actions/get-project-info" target="_blank" rel="noopener">Get Project Info Action</a> will be
          added to the workflow with id: project.<br>
          This action outputs <i>site-url</i> and <i>remote-host</i> that can be accessed in an environment of the BuildStep via
          {{ "$\{\{&nbsp;steps.project.outputs.site-url&nbsp;\}\}" }}<br>

          The github action will then use the output from Get Project Info and inject it into <i>environment variable</i>.

        </p>
      </div>
    </section>
    <section class="container mx-auto">
      <p>
        Have a Look at the
        <g-link to="/docs/configuration/examples">example</g-link>
        configurations.
      </p>
    </section>
  </Layout>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import {VueGoodTable} from 'vue-good-table';

export default {
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sortable: false,
        },
        {
          label: 'Type',
          field: 'type',
          sortable: false,
          html: true,
        },
        {
          label: 'Required',
          field: 'required',
          type: 'boolean',
          sortable: false,
        },
        {
          label: 'Description',
          field: 'description',
          sortable: false,
          html: true,
        },
        {
          label: 'Example',
          field: 'example',
          sortable: false,
          html: true,
        },
      ],
      rowsIonosYaml: [
        {id: 1, name: "distFolder", type: "String", required: true, description: "The folder to copy to the webspace", example: "dist<br>public"},
        {
          id: 2,
          name: "setup",
          type: "List&lt;<a href=\"#setup\">SetupStep</a>>",
          required: false,
          example: "see <a href=\"#setup\">SetupStep</a>",
          description: "The setup steps are <a href=\"https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses\" target=\"_blank\" rel=\"noopener\">uses steps</a> for the workflow to setup the build environment."
        },
        {
          id: 3,
          name: "prepare",
          type: "<a href=\"#prepare\">PrepareStep</a>",
          required: false,
          description: "The prepare step is <a href=\"https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun\" target=\"_blank\" rel=\"noopener\">run step</a> for the workflow to prepare the environment.",
          example: "see <a href=\"#prepare\">PrepareStep</a>"
        },
        {
          id: 4,
          name: "build",
          type: "<a href=\"#build\">BuildStep</a>",
          required: false,
          description: "The build step is a <a href=\"https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun\" target=\"_blank\" rel=\"noopener\">run step</a> for the workflow to build the project.",
          example: "see <a href=\"#build\">BuildStep</a>"
        },
      ],
      rowsSetupStep: [
        {
          id: 1,
          name: "name",
          type: "String",
          required: true,
          example: "Setup Node.js 12.x",
          description: "The name for the step in the workflow",
        },
        {
          id: 2,
          name: "action",
          type: "String",
          required: true,
          description: "The github action",
          example: "actions/setup-node@v1"
        },
        {
          id: 3,
          name: "properties",
          type: "Map&lt;String, String>",
          required: false,
          description: "The properties will be used as <a href=\"https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith\" target=\"_blank\" rel=\"noopener\">with</a> that are used as INPUT_ for the action.",
          example: "properties:<br>&nbsp;&nbsp;node-version: 10.13.3"

        },
      ],
      rowsPrepare: [
        {
          id: 1,
          name: "name",
          type: "String",
          required: true,
          description: "The name for the step in the workflow"
        },
        {
          id: 2,
          name: "command",
          type: "String",
          required: true,
          example: "Prepare Project build environment",
          description: "The command to setup the environment.<br>Separate commands will be split bei \"\\n\""
        },
      ],
      rowsBuild: [
        {
          id: 1,
          name: "name",
          type: "String",
          required: true,
          description: "The name for the step in the workflow",
          example: "Build node project"
        },
        {
          id: 2,
          name: "command",
          type: "String",
          required: true,
          example: "yarn build",
          description: "The command to run as build step.<br>Separate commands will be split bei \"\\n\""
        },
        {
          id: 3,
          name: "environment",
          type: "Map&lt;String, String>",
          required: false,
          example: "environment:<br>&nbsp;&nbsp;SITE_URL: ${{&nbsp;steps.project.outputs.site-url&nbsp;}}<br>&nbsp;&nbsp;CI: true",
          description: "The entries are set es env-variables for the build shell."
        },
      ],
    };
  },
  metaInfo: {
    title: "Build Configuration",
  },
  components: {
    VueGoodTable
  }
};
</script>
<page-query>
query {
allBuildTemplate {
edges {
node {
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
}

</page-query>




