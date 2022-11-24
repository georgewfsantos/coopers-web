/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat, sans-serif",
      },
      colors: {
        green: {
          400: "#42D76B",
          500: "#4AC959",
          600: "#46BD62",
        },
        gray: {
          500: "#9499B3",
          700: "#312F4F",
          900: "#06152B",
        },
        input: {
          500: "#959595",
        },
        orange: {
          500: "#E88D39",
        },
        black: "#000000",
      },
      backgroundImage: {
        logo: "url('/public/logo-background.png')",
        graphism: "url('/public/graphism.png')",
        footer: "url('/public/footer-background.png')",
        "black-rectangle": "url('/public/black-background.png')",
        "bar-graphism-small": "url('/public/bar-graphism-small.png')",
      },
      boxShadow: {
        "to-do-list": "0 4px 60px rgba(66, 66, 66, 0.2)",
      },
    },
  },
  plugins: [],
};
