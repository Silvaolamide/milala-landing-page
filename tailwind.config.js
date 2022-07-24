const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
       },
       fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
         'Inter': ['Inter', 'ui-sans-serif', 'system-ui'],
        'roboto':['Roboto', 'sans-serif']
      },
      fontSize: {
        'xss': '9px',
        'smm': '13px',
      },
      fontWeight: {
        "medium": "500",
       "extra-bold": "900"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
