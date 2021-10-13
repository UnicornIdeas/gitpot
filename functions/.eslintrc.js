module.exports = {
  "root": true,
  "env": {
    es6: true,
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "rules": {
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "max-len": ["error", {"code": 120}],
    "require-jsdoc": 0,
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
};
