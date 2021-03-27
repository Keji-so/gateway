module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        gridd: '450px',
        tablet: '500px',
        desktop: '580px',
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
        '1/15': '57%',
        },
        inset: {
          '2/15': '34%',
          '3/15': '44%',
         }
      },
   },
  variants: {
    extend: {},
  },
  plugins: [],
}
