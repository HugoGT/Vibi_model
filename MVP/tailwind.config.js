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
        vibi_hover: "#d42151",
        blue_vibi: "#102c57",
        gray_vibi: "#5c6f94",
        info_vibi: "#eff7ff",
        secondary_vibi: "#384961",
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
        wpp_hover: "#21a132",
        custom_red: "#ff7598",
      },
    },
  },
  plugins: [],
};
