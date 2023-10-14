/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        costum: "10px 10px #646464;",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
