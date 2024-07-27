/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  fontFamily: {
    lato: ["var(--font-lato)"],
    openSans: ["var(--font-open-sans)"]
  },
  backgroundColor: {
    "primary": "#044192",
    "white":"#FFFF"
  },
  colors: {
    "primary": "#044192",
    "secondary": "#FFC20A",
    "white": "#FFFF"
  }
};
export const plugins = [];
