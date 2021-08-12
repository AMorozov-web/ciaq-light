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
    'import-newlines',
    'prettier',
    'react',
    'react-hooks'
  ],
  root: true,
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/consistent-type-definitions': ['off'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    '@typescript-eslint/no-type-alias': ['off'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
    '@typescript-eslint/quotes': ['error', 'backtick'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
    }],
    '@typescript-eslint/sort-type-union-intersection-members': ['off'],
    'arrow-body-style': ['off'],
    'comma-dangle': ['off'],
    'import-newlines/enforce': [
      'error',
      1,
      90
    ],
    'indent': ['off'],
    'linebreak-style': ['warn', 'windows'],
    'max-len': ['off'],
    'max-lines': [
      'error', {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      }
    ],
    'newline-per-chained-call': ['off'],
    'no-negated-condition': ['off'],
    'no-undefined': ['off'],
    'no-ternary': ['off'],
    'object-curly-newline': [
      'error', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 2 },
      ExportDeclaration: {
        // multiline: true,
        minProperties: 2 }
    }],
    'one-var': ['off'],
    'padded-blocks': ['off'],
    'padding-line-between-statements': [
      'error', {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
    ],
    'react/function-component-definition': [ 2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'react/jsx-curly-brace-presence': [2, {
      props: 'always',
      children: 'always'
    }],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-depth': ['off'],
    'react/jsx-max-props-per-line': [2, {
      maximum: 2,
      when: 'always'
    }],
    'react/jsx-newline': [2, {
      prevent: true
    }],
    'react/jsx-no-bind': ['off'],
    'react/jsx-one-expression-per-line': [2, {
      allow: 'single-child'
    }],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-sort-props': ['off'],
    'react/no-multi-comp': ['off'],
    'react/prop-types': ['off'],
    'react/require-default-props': ['off'],
    'sort-imports': ['off'],
    'quote-props': ['error', 'as-needed'],
  },
}
