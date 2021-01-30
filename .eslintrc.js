module.exports = {
  plugins: ['react'],
  env: {
    jest: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb', 'react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  ignorePatterns: ['build/', 'coverage'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
