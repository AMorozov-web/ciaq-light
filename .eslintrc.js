module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'public',
    'webpack.config.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
    'react',
    'react-hooks'
  ],
  root: true,
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'backtick'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': true,
      'after': true,
    }],
    'arrow-body-style': ['off'],
    'comma-dangle': ['off'],
    'indent': ['off'],
    'max-len': ['off'],
    'max-lines': [
      'error', {
        max: 500,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'object-curly-newline': ['error', {
      'ObjectExpression': 'always',
      'ObjectPattern': { 'multiline': true },
      'ImportDeclaration': { 'multiline': true, 'minProperties': 2 },
      'ExportDeclaration': { 'multiline': true, 'minProperties': 2 }
    }],
    'one-var': ['off'],
    'padded-blocks': ['off'],
    'react/function-component-definition': [ 2, {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function'
    }],
    'react/jsx-curly-brace-presence': [2, {
      'props': 'always',
      'children': 'always'
    }],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-max-props-per-line': [2, {
      'maximum': 2,
      'when': 'always'
    }],
    'react/jsx-newline': [2, { 'prevent': true }],
    'sort-imports': ['off'],
    'quote-props': ['error', 'as-needed'],
  },
}