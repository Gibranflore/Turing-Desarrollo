/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "var(--brand-deep)",
        },
        green: {
          aqua: "var(--green-aqua)",
        },
        verde: {
          verde: "var(--verde-verde)",
        },
        gris: {
          gris: "var(--gris-gris)",
        },
        pasto: {
          pasto: "var(--pasto-pasto)",
        },
      },
    },
  },
  plugins: [],
}