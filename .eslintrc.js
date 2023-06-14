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
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // TypeScript-specific rules
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",

    // General rules
    "max-len": [
      1,
      {
        code: 80,
        comments: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "arrow-parens": 0,
    "comma-dangle": [1, "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "no-console": "warn",
    "object-curly-spacing": ["error", "always"],
    "no-undef": "error",
    "no-empty": "error",
    "no-constant-condition": "error",
    "no-empty-function": "error",
    "linebreak-style": ["error", "unix"],
    "generator-star-spacing": 0,
    "no-tabs": 2,
    "no-multiple-empty-lines": [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
    quotes: [2, "single", { avoidEscape: false }],
    semi: [2, "never"],

    // Node.js-specific rules
    "no-process-exit": "error",
    "no-process-env": "error",
    "no-restricted-modules": ["error", "child_process", "fs"],
  },

  globals: {
    process: "readonly", // Add this line to define process as a global variable
  },
};
