import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['**/*.config.*', '.history/**/*', 'dist/**/*'],
  },
  {
    rules: {
      indent: ['warn', 2],
      quotes: ['warn', 'single'],
      semi: ['error', 'always'],
      'comma-style': ['error', 'last'],
      'comma-spacing': ['error', { before: false, after: true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': ['error', { int32Hint: false }],

      'no-unused-vars': 'warn',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-extra-boolean-cast': 'error',
      'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
      'no-undef': 'off',
    },
  },
];
