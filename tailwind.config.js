/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
      },
    },
    extend: {
      fontFamily: {
        aeoniktrials: "aeoniktrial, sans-serif",
        Inter: "Inter, sans-serif",
        Jost: "Jost, sans-serif",
      },
      colors: {
        dodgerBlue: "#33B6FF",
        firefly: "#0E1A32",
        midnight: "#000C24",
        pictonBlue: "#2EA4E6",
        alto: "#E0E0E0",
        curiousBlue: "#2C9DDF",
        "curiousBlue-500": "#2A96D7",
        blueZodiac: "#0B1A38",
        "blueZodiac-500": "#132E50",
        blackPearl: "#030F27",
        oxfordBlue: "#353F52",
        santasGray: "#9999A6",
        rollingStone: "#75787B",
        azureRadiance: "#02a9f7",
        iron: "#E3E4E5",
        paleSky: "#666D7C",
        prussianBlue: "#002343",
        tealishBlue: "#081735",
        deepCove: "#051D39",
        whiteGradient: "linear-gradient(180deg, #02A9F7 0%, #2262BC 116.35%)",
      },
      backgroundImage: {
        herobg: "url('/assets/homepage/png/main-hero-bg-image.png')",
        // headerbg: "url('/assets/images/header/png/notification-bar-bg.png')",
        // commonbgimage: "url('/assets/images/hero/png/common-bg-image.png')",
        footerbg: "url('/assets/common/footer/png/footer-bg.png')",
        corevaluebg:
          "url('/assets/corevaluetimeline/png/bg-corevaluetimeline.png')",
        // threestepbg:
        //   "url('/assets/images/brandspage/threestepprocess/png/three-step-bg-process.png')",
      },
    },
  },
  plugins: [],
};
