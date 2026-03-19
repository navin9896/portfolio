/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(99, 102, 241, 0.25), 0 10px 30px rgba(2, 6, 23, 0.7)"
      }
    }
  },
  plugins: []
};

