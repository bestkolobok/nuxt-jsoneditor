import {defineNuxtPlugin, useRuntimeConfig} from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const options = config.public.jsonEditorConfig;

  nuxtApp.vueApp.provide('jsonEditorOptions', options.options);
  nuxtApp.provide('jsonEditorOptions', options.options);
});
