/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        content: "calc(100vh - 67.76px)",
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: [],
  },
};
