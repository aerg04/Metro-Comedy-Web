/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgb(19,20,23)"
      },
      transitionDuration: {
        '500': '0.5s',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      fontFamily:{
        archivoBlack: ["Archivo Black", "sans-serif"],
        outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}

