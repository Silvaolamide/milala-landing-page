const colors = require('tailwindcss/colors');
const flowbite = require('flowbite');

module.exports = {
  mode: 'jit',
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
    // Add other content paths if needed
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-top': "url('/img/Group4.svg')",
        'hero-mid': "url('/img/bg-mid.png')",
        'hero-bottom': "url('/img/bottom.png')",
        'milala-logo': "url('/img/milala-logo.svg')",
        'milala-step': "url('/img/step.png')",
        'milala-footer': "url('/img/footer-bg.png')",
        //'footer-texture': "url('/img/footer-texture.png')",
       },
       backgroundPosition: {
        top: 'top',
       'top-4': 'left top -319 -336',
       'mid-4': 'left top -319 -336',
       'top-5': 'left -21px top -25px',
       },
       backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '50%': '100%',
       '120%': '115%',
       '16': '4rem',
      },
      colors: {
        'my-orange': '#F57B00',
        'my-teal': '#009A9A'
       },
       fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'],
        'serif': ['ui-serif', 'Georgia'],
         'Inter': ['Inter', 'ui-sans-serif', 'system-ui'],
        'roboto':['Roboto', 'sans-serif'],
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji']
      },
      fontSize: {
        'xss': '9px',
        'smm': '13px',
      },
      fontWeight: {
        "medium": "500",
       "extra-bold": "900"
      },
      // Add Flowbite classes
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
