import { defineNuxtConfig } from 'nuxt'
import JsonEditor from '../src/module'

export default defineNuxtConfig({
  modules: [
    JsonEditor
  ],
  jsoneditor: {
    componentName: 'VueJsonEditor',
    options: {
      darkTheme: false,
    }
  }
})
