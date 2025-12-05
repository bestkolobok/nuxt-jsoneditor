import MyModule from '../../../src/module';

export default defineNuxtConfig({
  modules: [MyModule],
  jsoneditor: {
    componentName: 'JsonEditor',
    options: {
      mode: 'tree',
      mainMenuBar: true,
      navigationBar: true,
      statusBar: true,
      height: 400,
      fullWidthButton: true,
    },
  },
});
