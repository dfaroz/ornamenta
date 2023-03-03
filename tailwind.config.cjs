/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png,svg}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-1": "#343A40",
        "gray-2": "#495057",
        "gray-3": "#6C757D",
        "gray-4": "#F8F8F8",
        "green-1": "#337A5B",
        "green-2": "#25A244",
        "green-3": "#2DC653",
        "green-4": "#B7EFC5"
      },
      backgroundImage: (theme) => ({
        "gradient-whitegreen": "linear-gradient(180deg, rgba(18, 56, 39, 0.34) 0%, rgba(40, 90, 67, 0.34) 47.92%, rgba(40, 90, 67, 0.102) 100%)",
        "plant-banner": "url('./assets/image1.png')",
        "email-us": "url('./assets/image13.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        image2: "url('.assets/image2.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
