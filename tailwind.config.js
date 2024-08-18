/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sofia: ["Sofia Pro", "sans-serif"],
       titillium :["Titillium Web", "sans-serif"],
       century:['var(--century-gothic)'],
        // koblenz2: ["koblenz-serial-db-regular", "sans-serif"],
        sofiaPro: ["var(--sofiaPro)"],
        koblenz: ["var(--koblenz)", "sans-serif"],
      },

      backgroundImage: {
        "about-pattern": "url('/assets/bgpattern.png')", //Make Sure the path starts inside public folder and do not include 'public' in the path
        "board": "url('/assets/yoga.png')",
        "silverbg": "url('/assets/silverborder.jpg')",
        "product2-texture": "url('/assets/product2.png')",
      },
      cursor: {
        mic: "url('/assets/mici.png), pointer",
      },

      fontSize: {
        h1: "9.6rem",
        h2: "6rem",
        h3: "4.8rem",
        h4: "3.4rem",
        h5: "2.4rem",
        h6: "2rem",
        "subtitle-1": "1.6rem",
        "subtitle-2": "1.4rem",
        "body-1": "1.6rem",
        "body-2": "1.4rem",
        button: "1.4rem",
        caption: "1.2rem",
        overline: "1rem",
      },

      colors: {
        primary: "#000000",
        heroPrimary:"rgb(20 64 70)",
        secondary: "#02CC75",
        ternary: "#00505b",
        fourth: "#003747",
        footerText: "#83A1B0",
        background: "#002834",
        neutral: "#d9d9d9",
        headerText: "#ff7a01",
        headerText2: "#fdad12",
      },

      keyframes:{
        arrowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        arrowRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(60px)' },
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation:{
        arrowBounce: 'arrowBounce 2s ease-in-out infinite',
        arrowRight: 'arrowRight 2s ease-in-out infinite',
        fadeIn: ' fadeIn .81s ease-in-out forwards',
        fadeIn2: ' fadeIn 1.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}