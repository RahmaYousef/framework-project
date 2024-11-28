/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    container: {
      center : true 
    },
    extend: {
      colors:{
        primary:{
        50:"#2c3e50",
        100:"#233240",
        200:"#1a2530",
        300:"#1abc9c",
        400:"#12846d",
        
      }
    },
    screens:{
      "2xl":"1320px"
    }
      
    },
  },
  plugins: [    flowbite.plugin(),
  ],
}

