const recommended = {
  parser: "@typescript-eslint/parser",
  parserOptions: { sourceType: "module" },
  rules: {
    "@suffragium/eslint/deprecated-imports": "error",
    "@suffragium/eslint/avoid-web-storage": "error",
  },
};

export default recommended;
