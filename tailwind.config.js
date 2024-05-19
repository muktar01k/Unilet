/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Background: "url('/src/assets/Bannerbg.png')",
        Background2:"url('/src/assets/Mansion.png')",
        Bgg:"url('/src/assets/ReadBg.png')",
        Bgg2:"url('/src/assets/ArticlesBg.png')",
      },
      screens: {
        // "xr":"414px",
        // "pro":"428px",
        // "x":"375px",
        // "smm":"390px",
        //  "sam":"360px",
        "lg":"1280px"
      }
    },
  },
  plugins: [],
}
