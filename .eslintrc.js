module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // TypeScript-specific rules
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",

    // General rules
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "no-console": "warn",
    "no-unused-vars": "warn",
    "no-undef": "error",
    "no-empty": "error",
    "no-constant-condition": "error",
    "no-empty-function": "error",

    // Node.js-specific rules
    "no-process-exit": "error",
    "no-process-env": "error",
    "no-restricted-modules": ["error", "child_process", "fs"],
  },

  globals: {
    process: 'readonly', // Add this line to define process as a global variable
  },
};
