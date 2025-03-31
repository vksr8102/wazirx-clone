const config = {
  plugins: ["@tailwindcss/postcss"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232F3F",
        secondary: "#f1c40f",
        },
    },
    },
    variants: {},
};

export default config;
