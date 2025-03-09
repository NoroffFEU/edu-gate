/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dashboard-teacher.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./css/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        primaryHover: "#388E3C",
        secondary: "#2196F3",
        secondaryHover: "#BBDEFB",
        accent: "#FF5722",
        accentHover: "#E64A19",
        neutralLightGray: "#F5F5F5",
        neutralMediumGray: "#757575",
        neutralDarkGray: "#333333",
        table: "#F9F9F9",
        tableHover: "#E9E9E9",
        tableClicked: "#D1D1D1",
        success: "#2D7230",
        successBg: "#E8F5E9",
        failed: "#C62828",
        failedBg: "#FFEBEE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
