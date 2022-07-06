import { defineNuxtPlugin } from '#app'
import JsonEditor from 'vue3-ts-jsoneditor';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const options = config.public.jsonEditorConfig ;

  nuxtApp.vueApp.use(JsonEditor, {
    componentName: options.componentName,
    options: options.options
  })
})
