/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1F41BB",
        textSecondary: "#494949",
        darkBg: "#F1F4FF",
      },
      fontFamily: {
        poppinsThin: ["Poppins_100Thin"],
        poppinsThinItalic: ["Poppins_100Thin_Italic"],
        poppinsExtraLight: ["Poppins_200ExtraLight"],
        poppinsExtraLightItalic: ["Poppins_200ExtraLight_Italic"],
        poppinsLight: ["Poppins_300Light"],
        poppinsLightItalic: ["Poppins_300Light_Italic"],
        poppinsRegular: ["Poppins_400Regular"],
        poppinsRegularItalic: ["Poppins_400Regular_Italic"],
        poppinsMedium: ["Poppins_500Medium"],
        poppinsMediumItalic: ["Poppins_500Medium_Italic"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
        poppinsSemiBoldItalic: ["Poppins_600SemiBold_Italic"],
        poppinsBold: ["Poppins_700Bold"],
        poppinsBoldItalic: ["Poppins_700Bold_Italic"],
        poppinsExtraBold: ["Poppins_800ExtraBold"],
        poppinsExtraBoldItalic: ["Poppins_800ExtraBold_Italic"],
        poppinsBlack: ["Poppins_900Black"],
        poppinsBlackItalic: ["Poppins_900Black_Italic"],
      },
    },
  },
  plugins: [],
};
