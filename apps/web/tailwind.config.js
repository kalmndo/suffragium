const base = require("@suffragium/config/tailwind-preset");
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: [...base.content],
};