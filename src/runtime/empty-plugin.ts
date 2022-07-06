import { defineNuxtPlugin, useRuntimeConfig, defineNuxtComponent } from '#app'
import EmptyComponent from './EmptyComponent.vue';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const options = config.public.jsonEditorConfig ;

    const emptyComponent = defineNuxtComponent({
      setup: () => {},
      name: 'EmptyBlock',
      render: ({$el}) =>  ''
    })

    nuxtApp.vueApp.use({
      install(app) {
        app.component(options.componentName, EmptyComponent);
      }
    })
})
