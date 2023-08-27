/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-bg" : "var(--bg-black)",
        "dark-fg" : "var(--fg-black)",
        "darker-green" : "var(--darker-green)",
        "dark-green" : "var( --dark-green)"
      }
    },
  },
  plugins: [],
}

