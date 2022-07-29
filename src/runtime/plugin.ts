import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import JsonEditor from 'vue3-ts-jsoneditor';
import 'vue3-ts-jsoneditor/styles.css';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const options = config.public.jsonEditorConfig ;

  nuxtApp.vueApp.use(JsonEditor, {
    componentName: options.componentName,
    options: options.options
  })
})
