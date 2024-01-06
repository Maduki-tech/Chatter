/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: true,
  singleQuote: false,
  printWidth: 100,
  tabWidth: 4,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
