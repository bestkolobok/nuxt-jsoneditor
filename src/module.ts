import {resolve} from 'path';
import {fileURLToPath} from 'url';
import {defineNuxtModule, addPlugin, addComponent} from '@nuxt/kit';
import type {Params} from 'vue3-ts-jsoneditor';

export type {
  TextContent,
  JSONContent,
  Content,
  Path,
  QueryLanguageId,
  JSONValue,
  JSONPatchDocument,
  JSONPatchResult,
  ValidationError,
  QueryLanguage,
  QueryLanguageOptions,
  RenderValuePropsOptional,
  RenderValueProps,
  ValueNormalization,
  SearchResultItem,
  RenderValueComponentDescription,
  OnClassName,
  OnRenderValue,
  OnRenderMenu,
  Validator,
  Mode,
  MenuItem,
  JSONEditor,
  JSONNodeItem,
  JSONNodeProp,
} from 'vue3-ts-jsoneditor';

export interface ModuleOptions extends Params {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'json-editor',
    configKey: 'jsoneditor',
    compatibility: {
      nuxt: '^3',
    },
  },
  defaults: {
    componentName: 'JsonEditor',
    options: {},
  },
  async setup<T>(options: ModuleOptions, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);

    nuxt.options.runtimeConfig.public.jsonEditorConfig = options as T;

    addPlugin({
      ssr: false,
      src: resolve(runtimeDir, 'plugin'),
    });

    await addComponent({
      name: options.componentName,
      filePath: 'vue3-ts-jsoneditor',
    });
  },
});
