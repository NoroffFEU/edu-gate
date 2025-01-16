/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        "primary-hover": "#388E3C",
        secondary: "#2196F3",
        "secondary-hover": "#BBDEFB",
        accent: "#FF5722",
        "accent-hover": "#E64A19",
        "neutral-light-gray": "#F5F5F5",
        "neutral-medium-gray": "#757575",
        "neutral-dark-gray": "#333333",
        table: "#F9F9F9",
        "table-hover": "#E9E9E9",
        "table-clicked": "#D1D1D1",
        success: "#2D7230",
        "success-background": "#E8F5E9",
        failed: "#C62828",
        "failed-background": "#FFEBEE",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
