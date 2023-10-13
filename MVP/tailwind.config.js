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
        blue_vibi: "#102c57",
        orange_vibi: "#ff3d00",
        green_wpp: "#40c351",
      },
    },
  },
  plugins: [],
};
