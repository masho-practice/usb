/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#3490dc", // Example primary color
      secondary: "#f6993f", // Example secondary color
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"], // Replace with your font
    },
  },
};
export const plugins = [];
