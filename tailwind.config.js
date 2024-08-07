module.exports = {
  content: [
    "./*.html", // Adjust the path according to where your HTML files are located
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        lime: "#d7da2f",
        red: "#d73328",
        white: "#ffffff",
        slate1: "#e3f3fd",
        slate3: "#9abed5",
        slate5: "#6b94a8",
        slate7: "#4e6e7e",
        slate9: "#122f3f",
      },
    },
  },
  plugins: [],
};
