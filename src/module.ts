import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';
import type {Params} from 'vue3-ts-jsoneditor';

export interface ModuleOptions extends Params {
  includeCss?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'json-editor',
    configKey: 'jsoneditor',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    componentName: 'JsonEditor',
    includeCss: true,
    options: {}
  },
  setup<T> (options: ModuleOptions, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir);

    nuxt.options.runtimeConfig.public.jsonEditorConfig = options as T;

    const pluginFilename = options.includeCss ? 'pluginIncludeCss' : 'plugin';

    addPlugin({
      src: resolve(runtimeDir, pluginFilename),
      mode: "client",
    })

    addPlugin({
      src: resolve(runtimeDir, 'empty-plugin'),
      mode: "server",
    })
  }
})
