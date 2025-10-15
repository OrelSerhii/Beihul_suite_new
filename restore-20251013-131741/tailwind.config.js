/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#013026",
          gold: "#e9b05b",
          gold2: "#fcb154",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
