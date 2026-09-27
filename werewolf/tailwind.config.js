/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "var(--bright-yellow)",
        customBrown: "var(--dark-brown)",
        customTeal1: "var(--teal1)",
        customTeal2: "var(--teal2)",
        customRed: "var(--red-theme)",
        customBlack: "var(--black-theme)",
      },
      fontFamily: {
        heading: ["var(--font-bbh-bogle)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
}

