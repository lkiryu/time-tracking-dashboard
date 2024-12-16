/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-light_orange",
    "bg-soft_blue",
    "bg-light_red",
    "bg-lime_green",
    "bg-violet",
    "bg-soft_orange",
    "bg-work",
    "bg-play",
    "bg-study",
    "bg-exercise",
    "bg-social",
    "bg-self",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
    extend: {
      backgroundColor: {
        light_orange: "hsl(15, 100%, 70%)",
        soft_blue: "hsl(195, 74%, 62%)",
        light_red: "hsl(348, 100%, 68%)",
        lime_green: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        soft_orange: "hsl(43, 84%, 65%)",
        Blue: "hsl(246, 80%, 60%)",
        very_dark_blue: "hsl(226, 43%, 10%)",
        dark_blue: "hsl(235, 46%, 20%)",
        desaturated_blue: "hsl(235, 45%, 30%)",
      },
      backgroundImage: {
        work: "url(./src/assets/images/icon-work.svg)",
        play: "url(./src/assets/images/icon-play.svg)",
        study: "url(./src/assets/images/icon-study.svg)",
        exercise: "url(./src/assets/images/icon-exercise.svg)",
        social: "url(./src/assets/images/icon-social.svg)",
        self: "url(./src/assets/images/icon-self-care.svg)"
      },
      textColor: {
        pale_blue: "hsl(236, 100%, 87%)",
        desaturated_blue: "hsl(235, 45%, 61%)",
      },
      fontFamily: {
        Rubik: ["Rubik", "serif"]
      }
    },
  },
  plugins: [],
}

