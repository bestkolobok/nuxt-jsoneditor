import {defineNuxtPlugin, useRuntimeConfig} from '#app';
import 'vue3-ts-jsoneditor/styles.css';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const options = config.public.jsonEditorConfig;

  nuxtApp.vueApp.provide('jsonEditorOptions', options.options);
});
