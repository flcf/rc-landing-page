import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: pluginReact,
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Override logic rules here. For stylistic rules, edit .prettierrc instead
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules, // For React 17+ JSX transform
    },
  },
  eslintConfigPrettier,
  {
    // Ignores for common directories
    ignores: ['node_modules/', 'dist/', '.eslintrc.js'],
  },
);
