/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // Choose your preferred built-in theme or customize
      "dark", // classic, professional look
      // You can add more themes here, e.g. "light", "dark", "emerald", etc.
    ],
    darkTheme: "business", // Optional: set a dark theme
  },
}