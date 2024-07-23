const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      screens: {
        'xxxs': '350px',
        'xxs': '425px',
        'xs': '576px',
        'mmd': '877px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customRed: '#f9004d',
        customDark: '#191919',
        fontColor: '#81828d',
        blackColor: '#101010',
        bgCards: '#808080',
      },
      lineHeight: {
        'tighter': '0',
        'tight': '1.2',
      },
      fontSize: {
        '54px': '54px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.whitespace-break-spaces': {
          'white-space': 'break-spaces',
        },
      });
    }),
  ],
};
