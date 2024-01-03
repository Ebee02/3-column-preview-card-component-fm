/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-orange": "#e38826",
        "dark-cyan": "#006970",
        "darker-cyan": "#004241",
        "trans-white": "#ffffffbf",
        "light-gray": "#f2f2f2",
      },
    },
  },
  plugins: [],
};
