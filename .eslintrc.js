module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["@morphis-labs/eslint-config"],
  rules: {
    "@tanstack/query/exhaustive-deps": "off",
  },
};
