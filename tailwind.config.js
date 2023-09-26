/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        drops:
          "url('https://cdn.pixabay.com/photo/2019/11/22/17/15/drop-of-water-4645249_1280.jpg')",
      },
    },
  },
  plugins: [],
};
