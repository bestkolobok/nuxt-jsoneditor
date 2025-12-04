import {createConfigForNuxt} from '@nuxt/eslint-config/flat';
import eslintConfigPrettier from 'eslint-config-prettier';

export default createConfigForNuxt({
  features: {
    tooling: true,
  },
})
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  })
  .append(eslintConfigPrettier)
  .append({
    ignores: ['dist', 'node_modules', '.nuxt', '.output', 'playground/.nuxt', 'playground/dist'],
  });
