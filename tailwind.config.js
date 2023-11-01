/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage : {
        "banner":"url('Assets/banner-bg.png')",
        // "banner2":"url('Assets/banner-bg2.png')"
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  
],
}