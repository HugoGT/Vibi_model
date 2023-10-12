/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Archivo", "sans"],
      },
      colors: {
        vibi: "#ec245a",
      },
    },
  },
  plugins: [],
};
