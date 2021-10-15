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
    "plugin:vue/recommended",
    "plugin:vue/essential",
    "@vue/airbnb",
    "eslint:recommended",
    "@vue/prettier",
  ],
};