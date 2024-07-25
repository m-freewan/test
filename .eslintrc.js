module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    globals: {},
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jsdoc'],
    rules: {
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': 2,
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': [
        'warn',
        {
          allow: ['constructors'],
        },
      ],
      'jsdoc/require-jsdoc': [
        'error' | 'warn',
        {
          exemptEmptyFunctions: true,
          MethodDefinition: true,
          ClassDeclaration: false,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      ],
      'keyword-spacing': ['error', { before: true }],
      'newline-before-return': 'off',
      'no-extra-boolean-cast': 'off',
      'object-curly-spacing': [
        'error',
        'always',
        {
          objectsInObjects: false,
          arraysInObjects: false,
        },
      ],
      semi: [
        'error',
        'always',
        {
          omitLastInOneLineBlock: true,
        },
      ],
      'no-multiple-empty-lines': 'error',
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      'eol-last': ['error', 'always'],
    },
  };
  