// /** @type {import('tailwindcss').Config} */
module.exports ={
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  // content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  variants:{
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

// // tailwind.config.js
// module.exports = {
//   theme: {
//     // ...
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     // ...
//   ],
// }