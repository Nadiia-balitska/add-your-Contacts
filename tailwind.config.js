/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};

// import aspectRatio from "https://esm.veryfront.com/@tailwindcss/aspect-ratio@0.4.2?external=tailwindcss,postcss";
// import typography from "https://esm.veryfront.com/@tailwindcss/typography?external=tailwindcss,postcss";
// import forms from "https://esm.veryfront.com/@tailwindcss/forms?external=tailwindcss,postcss";
// import animate from "https://cdn.skypack.dev/tailwindcss-animate@1.0.5";
// import daisyui from "https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css";
// export default {
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         md: "2rem",
//       },
//     },
//     aspectRatio: {
//       auto: "auto",
//       square: "1 / 1",
//       video: "16 / 9",
//     },
//     extend: {
//       colors: {
//         primary: "#ff49db",
//       },
//       fontFamily: {
//         sans: ["Helvetica", "Arial", "sans-serif"],
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [
//     animate,
//     aspectRatio,
//     daisyui,
//     typography,
//     forms({ strategy: "class" }),
//   ],
// };
