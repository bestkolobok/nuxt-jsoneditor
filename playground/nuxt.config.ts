export default defineNuxtConfig({
  modules: ['../src/module'],
  jsoneditor: {
    componentName: 'VueJsonEditor',
    options: {
      darkTheme: false,
    },
  },
});
