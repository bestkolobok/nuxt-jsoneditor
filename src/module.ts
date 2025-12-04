import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {defineNuxtModule, addPlugin, addComponent} from '@nuxt/kit';
import {defu} from 'defu';
import type {Params} from 'vue3-ts-jsoneditor';

export type {
  ContentErrors,
  Params,
  TextContent,
  JSONContent,
  Content,
  JSONPath,
  Path, // alias for JSONPath
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
  JSONPathParser,
  JSONParser,
  JSONEditorSelection,
  EditKeySelection,
  EditValueSelection,
  createJSONEditor,
} from 'vue3-ts-jsoneditor';

export type JSONEditorOptions = Params; // alias for Params

export interface ModuleOptions extends Params {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'json-editor',
    configKey: 'jsoneditor',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    componentName: 'JsonEditor',
    options: {},
  },
  setup(opt, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);

    nuxt.options.runtimeConfig.public.jsonEditorConfig = defu(nuxt.options.runtimeConfig.public.jsonEditorConfig, opt);

    addPlugin({
      src: resolve(runtimeDir, 'plugin'),
    });

    addComponent({
      name: opt.componentName || 'JsonEditor',
      filePath: 'vue3-ts-jsoneditor',
    });
  },
});
