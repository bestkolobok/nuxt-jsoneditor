import {fileURLToPath} from 'node:url';
import {describe, it, expect} from 'vitest';
import {setup, $fetch, useTestContext} from '@nuxt/test-utils/e2e';

describe('nuxt-jsoneditor defaults', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/minimal', import.meta.url)),
  });

  describe('default options', () => {
    it('should create runtimeConfig even without explicit config', () => {
      const ctx = useTestContext();
      expect(ctx.nuxt?.options.runtimeConfig?.public?.jsonEditorConfig).toBeDefined();
    });

    it('should have default componentName in runtimeConfig', () => {
      const ctx = useTestContext();
      const config = ctx.nuxt?.options.runtimeConfig?.public?.jsonEditorConfig;
      expect(config?.componentName).toBe('JsonEditor');
    });

    it('should have empty options object in runtimeConfig', () => {
      const ctx = useTestContext();
      const config = ctx.nuxt?.options.runtimeConfig?.public?.jsonEditorConfig;
      expect(config?.options).toEqual({});
    });
  });

  describe('ssr with defaults', () => {
    it('renders the page', async () => {
      const html = await $fetch('/');
      expect(html).toContain('Minimal Test');
    });
  });
});
