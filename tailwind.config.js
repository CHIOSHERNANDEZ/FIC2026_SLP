/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#070b14",
        plum: "#3d2546",
        teal: "#48988e",
        aqua: "#5ce1e6",
        terracotta: "#d97b5d",
        sand: "#f2d7b1",
        violet: "#7b5ea7",
        slateglass: "rgba(15,23,42,0.52)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Cormorant Garamond", "serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(92, 225, 230, 0.28)",
        glass: "0 18px 45px rgba(15, 23, 42, 0.25)"
      }
    },
  },
  plugins: [],
}
