module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greens: '#049A37',
        greys: {
          100: '#333333',
          200: '#666666',
          300: '#222222',
          400: '#999999',
          500: '#F1F1F1',
        }
      },
        fontFamily: {
          body: ['Montserrat'],
          display: ['Rubik']
        },
        width: {
        '1/11': '61%',
        '2/11': '62%',
        '3/11': '63%',
        '4/11': '64%',
        '5/11': '65%',
        '6/11': '35%',
        '7/11': '36%',
        '8/11': '37%',
        '9/11': '38%',
        '10/11': '39%',
        }
      },
   },
  variants: {
    extend: {},
  },
  plugins: [],
}
