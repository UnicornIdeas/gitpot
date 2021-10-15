module.exports = {
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },

  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "babel-eslint",
  },

  extends: [
    "plugin:vue/recommended",
    "plugin:vue/essential",
    "@vue/airbnb",
    "eslint:recommended",
    "@vue/prettier",
  ],
};
