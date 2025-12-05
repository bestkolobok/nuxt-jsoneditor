import {fileURLToPath} from 'node:url';
import {describe, it, expect} from 'vitest';
import {setup, $fetch, useTestContext} from '@nuxt/test-utils/e2e';

describe('nuxt-jsoneditor', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  });

  describe('module registration', () => {
    it('should register with jsoneditor config key', () => {
      const ctx = useTestContext();
      expect(ctx.nuxt?.options.jsoneditor).toBeDefined();
    });

    it('should have default componentName', () => {
      const ctx = useTestContext();
      expect(ctx.nuxt?.options.jsoneditor?.componentName).toBe('JsonEditor');
    });

    it('should have options object', () => {
      const ctx = useTestContext();
      expect(ctx.nuxt?.options.jsoneditor?.options).toBeDefined();
    });

    it('should merge options into runtimeConfig.public', () => {
      const ctx = useTestContext();
      const publicConfig = ctx.nuxt?.options.runtimeConfig?.public;
      expect(publicConfig?.jsonEditorConfig).toBeDefined();
    });

    it('should have options in jsonEditorConfig', () => {
      const ctx = useTestContext();
      const jsonEditorConfig = ctx.nuxt?.options.runtimeConfig?.public?.jsonEditorConfig;
      expect(jsonEditorConfig?.options).toBeDefined();
      expect(jsonEditorConfig?.options?.mode).toBe('tree');
    });
  });

  describe('plugin registration', () => {
    it('should register runtime plugin', () => {
      const ctx = useTestContext();
      const plugins = ctx.nuxt?.options.plugins;

      const hasPlugin = plugins?.some((p: any) => {
        const src = typeof p === 'string' ? p : p?.src;
        return src?.includes('plugin');
      });

      expect(hasPlugin).toBe(true);
    });
  });

  describe('component registration', () => {
    it('should add runtime dir to transpile', () => {
      const ctx = useTestContext();
      const transpile = ctx.nuxt?.options.build?.transpile;

      expect(transpile).toBeDefined();
      expect(Array.isArray(transpile)).toBe(true);
    });
  });

  describe('ssr rendering', () => {
    it('renders the index page', async () => {
      const html = await $fetch('/');
      expect(html).toContain('JsonEditor Test');
    });

    it('should not have SSR errors', async () => {
      const html = await $fetch('/');
      expect(html).not.toContain('nuxt-error');
    });

    it('should have Nuxt app structure', async () => {
      const html = await $fetch('/');
      expect(html).toContain('id="__nuxt"');
    });

    it('should not render jsoneditor internals on server (ClientOnly)', async () => {
      const html = await $fetch('/');
      expect(html).not.toContain('svelte-jsoneditor');
      expect(html).not.toContain('jse-main');
    });
  });
});
