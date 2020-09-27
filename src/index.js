// See https://medium.com/@brygrill/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97 for base config setup
module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  rules: {
    /* General */

    /* Typescript */
    // Allows for implicit type assumption (ex: () => 2 assumes it returns a number. You don't need to specify)
    "@typescript-eslint/explicit-module-boundary-types": ["off"],

    /* Imports */
    "import/no-useless-path-segments": ["error"],
    "import/newline-after-import": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    /* React */
    // We don't need prop-types with typescript
    "react/prop-types": ["off"],
    "react/jsx-one-expression-per-line": ["off"],
    // I like the {...props} syntax
    "react/jsx-props-no-spreading": ["off"],

    /* Prettier */
    "prettier/prettier": ["error"],
  },
};
