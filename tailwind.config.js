/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        story: "url('/src/assets/chef.jpg')",
      },

      colors: {
        prime: "#292524",
      },
    },
  },
  plugins: [],
};
