import {resolve} from 'path';
import {fileURLToPath} from 'url';
import {defineNuxtModule, addPlugin, addComponent} from '@nuxt/kit';
import type {Params} from 'vue3-ts-jsoneditor';

export type {
  ContentErrors,
  Params,
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
  OnChangeStatus,
  Validator,
  Mode,
  MenuItem,
  JSONEditor,
  JSONNodeItem,
  JSONNodeProp,
  JSONPathParser,
  JSONParser,
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
  async setup(opt, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);

    nuxt.options.runtimeConfig.public.jsonEditorConfig = opt as any;

    addPlugin({
      src: resolve(runtimeDir, 'plugin'),
    });

    await addComponent({
      name: opt.componentName || 'JsonEditor',
      filePath: 'vue3-ts-jsoneditor',
    });
  },
});
