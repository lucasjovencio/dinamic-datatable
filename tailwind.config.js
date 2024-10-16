/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0fa968",
          50: "#ecfdf3",
          100: "#d1fae1",
          200: "#a7f3c9",
          300: "#6ee7ac",
          400: "#34d38b",
          500: "#0fa968",
          600: "#05965c",
          700: "#04784c",
          800: "#065f3e",
          900: "#064e34",
        },
        background: "#e5e5e5",
        surface: "#ffffff",
      },
    },
  },
  variants: {
    aspectRatio: ["responsive", "hover"],
    opacity: ["disabled"],
    cursor: ["disabled"],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
};
