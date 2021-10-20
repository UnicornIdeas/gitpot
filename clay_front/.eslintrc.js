module.exports = {
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
  },

  root: true,

  env: {
    "browser": true,
    // "commonjs": true,
  },

  parserOptions: {
    parser: "babel-eslint",
    "ecmaVersion": 12,
  },

  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
  ],
  rules: {
    // 'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'state',
      ]
    }],
    'indent': 'off',
    'no-tabs': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ["error", "unix"],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
      },
    ],
    // 'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
  },
};
