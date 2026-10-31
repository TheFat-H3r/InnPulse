import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/dist/**', '**/node_modules/**', '**/.turbo/**', '**/coverage/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // Module boundaries (rule 7): import another module only through its public entry.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@hotelops/*/src/*', '@hotelops/*/dist/*', '@hotelops/*/internal/*'],
              message: 'Import a module only through its public entry point.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.mjs', '**/*.config.*'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
);
