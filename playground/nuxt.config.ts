export default defineNuxtConfig({
  modules: ['../src/module'],
  jsoneditor: {
    componentName: 'JsonEditor',
    options: {
      darkTheme: false,
    },
  },
});
