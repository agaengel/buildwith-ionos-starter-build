<template>
  <div class="bg-blue-600 rounded-lg p-4 text-yellow-400 font-mono">
            <span>
              ---<br>
              distFolder: <span class="text-white">{{ config.dist_folder }} </span><br>
              <span v-if="config.setup.length > 0">
              setup:<br>
                <span v-for="setup in config.setup">
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
              <span v-if="config.prepare">
                prepare:<br>
                &nbsp;&nbsp;name: <span class="text-white">{{ config.prepare_name }}</span><br>
                <span v-if="config.prepare.commands.length > 1">
                  &nbsp;&nbsp;commands:  <span class="text-white">|</span><br>
                <span v-for="command in  config.prepare.commands ">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-white">{{ command }}</span><br>
                </span>
              </span>
              <span v-else>
                &nbsp;&nbsp;commands: <span class="text-white">{{ config.prepare.commands[0] }}</span><br>
              </span>
              </span>
              <span v-if="config.build">
                build:<br>
                &nbsp;&nbsp;name: <span class="text-white">{{ config.build_name }}</span><br>
                <span v-if="config.build.commands.length > 1">
                  &nbsp;&nbsp;commands:  <span class="text-white">|</span><br>
                    <span v-for="command in  $page.build.template.build.commands ">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-white">{{ command }}</span><br>
                    </span>
                </span>
                <span v-else>
                  &nbsp;&nbsp;commands: <span class="text-white">{{ config.build.commands[0] }}</span><br>
                </span>
                <span v-if="config.build.environment.length > 0">
                  &nbsp;&nbsp;environment: <br>
                  <span v-for="property in config.build.environment">
                  &nbsp;&nbsp;&nbsp;
                  {{ property.key }}: <span class="text-white">{{ property.value }}</span><br>
                 </span>
              </span>
              </span>
            </span>
  </div>
</template>

<script>
export default {
  name: 'BuildConfig',
  props: {
    'config': {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
}
</script>
