module.exports = {
    root: true,
  
    env: {
      browser: true,
      node: true,
    },

  
    // https://github.com/nuxt/eslint-config
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  
    rules: {
      // Disables eslint throwing an error on script setup vue files
      'import/first': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/camelcase': 'off',
      'vue/html-indent': ['error', 2],
      'vue/multi-word-component-names': ['off'],
      indent: ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: false }],
      'vue/max-attributes-per-line': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
          },
        },
      ],
      'arrow-parens': 'off',
      'object-curly-spacing': 'off',
      'no-extra-semi': 'off',
      'quote-props': 'off',
      'vue/v-on-event-hyphenation': ['error', 'never'],
      'vue/attribute-hyphenation': ['error', 'never'],
    },
  }
  