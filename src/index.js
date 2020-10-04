// See https://medium.com/@brygrill/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97 for base config setup and where I started
module.exports = {
  // Other configs you want to build off of. Lower items in the list overwrite higher items
  extends: [
    "plugin:@typescript-eslint/recommended", // Turns on all rules authors think you should use. Turns off eslint rules already handled by TS (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs#recommended)
    "airbnb-typescript", // Airbnb's ESLint config with TypeScript support (includes Javascript rules and support too)
    "airbnb/hooks", // Turns on React's rules-of-hooks (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-hooks.js)
    "plugin:jest/recommended", // Turns on jest plugin recommended rules
    "prettier", // Turns off all rules that are unnecessary or might conflict with Prettier (https://github.com/prettier/eslint-config-prettier/blob/master/index.js)
    "prettier/react", // Turns off react rules that conflict with prettier (https://github.com/prettier/eslint-config-prettier/blob/master/react.js)
    "prettier/@typescript-eslint", // Turns off typescript-eslint rules that conflict with prettier (https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js)
    "plugin:prettier/recommended", // Turns on the rule which makes prettier conflicts errors (https://github.com/prettier/eslint-plugin-prettier/blob/master/eslint-plugin-prettier.js#L113)
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  // env defines global variables that are predefined.
  env: {
    browser: true, // browser global variables.
    es6: true,
    jest: true, // jest global variables
  },
  // globals defines global variables. readonly means these variables can't be overwritten
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  // Define a custom eslint parser
  parser: "@typescript-eslint/parser",
  // Specify the JavaScript language options you want to support
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  // Rules you want to overwrite/add
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
