module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'testing-library'],
  rules: {
    semi: [2, 'always'],
    'react/destructuring-assignment': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'import/no-cycle': 0,
    'no-plusplus': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/no-unused-prop-types': 0,
    'global-require': 0,
    'no-nested-ternary': 0,
    'no-else-return': 0,
    'array-callback-return': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {}
    }
  },
  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
};
