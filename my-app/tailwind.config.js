/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" /* src folder, for example */],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require('flowbite/plugin')],
};

