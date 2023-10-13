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
        secondary_vibi: "#384961",
        blue_vibi: "#102c57",
        orange_vibi: {
          100: "#fff5ec",
          700: "#ff3d00",
          900: "#cc1a00",
        },
        green_vibi: {
          100: "#effefb",
          700: "#0a837f",
          900: "#004540",
        },
        green_wpp: "#40c351",
      },
    },
  },
  plugins: [],
};
