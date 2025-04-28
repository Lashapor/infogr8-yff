/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // Font sizes based on the provided images
      fontSize: {
        // H1 variants - 56/108
        'h1-regular': ['56px', { lineHeight: '120%', fontWeight: '400' }],
        'h1-bold': ['56px', { lineHeight: '120%', fontWeight: '700' }],
        'h1-caps-regular': ['56px', { lineHeight: '120%', fontWeight: '400', textTransform: 'uppercase' }],
        'h1-caps-bold': ['56px', { lineHeight: '120%', fontWeight: '700', textTransform: 'uppercase' }],

        // H2 variants - 40/108
        'h2-regular': ['40px', { lineHeight: '120%', fontWeight: '400' }],
        'h2-bold': ['40px', { lineHeight: '120%', fontWeight: '700' }],
        'h2-caps-regular': ['40px', { lineHeight: '120%', fontWeight: '400', textTransform: 'uppercase' }],
        'h2-caps-bold': ['40px', { lineHeight: '120%', fontWeight: '700', textTransform: 'uppercase' }],

        // H3 variants - 24/108
        'h3-regular': ['24px', { lineHeight: '120%', fontWeight: '400' }],
        'h3-bold': ['24px', { lineHeight: '120%', fontWeight: '700' }],
        'h3-caps-regular': ['24px', { lineHeight: '120%', fontWeight: '400', textTransform: 'uppercase' }],
        'h3-caps-bold': ['24px', { lineHeight: '120%', fontWeight: '700', textTransform: 'uppercase' }],

        // H4 variants - 20/120 or 20/108
        'h4-regular': ['20px', { lineHeight: '120%', fontWeight: '400' }],
        'h4-bold': ['20px', { lineHeight: '120%', fontWeight: '700' }],
        'h4-caps-regular': ['20px', { lineHeight: '120%', fontWeight: '400', textTransform: 'uppercase' }],
        'h4-caps-bold': ['20px', { lineHeight: '120%', fontWeight: '700', textTransform: 'uppercase' }],

        // H5 Quote variants - 32/108
        'h5-quote-regular': ['32px', { lineHeight: '120%', fontWeight: '400' }],
        'h5-quote-bold': ['32px', { lineHeight: '120%', fontWeight: '700' }],
        'h5-quote-caps-regular': ['32px', { lineHeight: '120%', fontWeight: '400', textTransform: 'uppercase' }],
        'h5-quote-caps-bold': ['32px', { lineHeight: '120%', fontWeight: '700', textTransform: 'uppercase' }],

        // Paragraph XLarge variants - 18/108
        'paragraph-xlarge-regular': ['18px', { lineHeight: '120%', fontWeight: '400' }],
        'paragraph-xlarge-bold': ['18px', { lineHeight: '120%', fontWeight: '700' }],
        'paragraph-xlarge-cap-regular': ['18px', { lineHeight: '120%', fontWeight: '400', textTransform: 'capitalize' }],
        'paragraph-xlarge-cap-bold': ['18px', { lineHeight: '120%', fontWeight: '700', textTransform: 'capitalize' }],

        // Paragraph Large variants - 16/108
        'paragraph-large-regular': ['16px', { lineHeight: '120%', fontWeight: '400' }],
        'paragraph-large-bold': ['16px', { lineHeight: '120%', fontWeight: '700' }],
        'paragraph-large-cap-regular': ['16px', { lineHeight: '120%', fontWeight: '400', textTransform: 'capitalize' }],
        'paragraph-large-cap-bold': ['16px', { lineHeight: '120%', fontWeight: '700', textTransform: 'capitalize' }],

        // Paragraph Base variants - 14/auto or 14/108
        'paragraph-base-regular': ['14px', { lineHeight: 'auto', fontWeight: '400' }],
        'paragraph-base-bold': ['14px', { lineHeight: '120%', fontWeight: '700' }],
        'paragraph-base-cap-regular': ['14px', { lineHeight: '120%', fontWeight: '400', textTransform: 'capitalize' }],
        'paragraph-base-cap-bold': ['14px', { lineHeight: '120%', fontWeight: '700', textTransform: 'capitalize' }],

        // Paragraph Small variants - 12/108
        'paragraph-small-regular': ['12px', { lineHeight: '120%', fontWeight: '400' }],
        'paragraph-small-bold': ['12px', { lineHeight: '120%', fontWeight: '700' }],
        'paragraph-small-cap-regular': ['12px', { lineHeight: '120%', fontWeight: '400', textTransform: 'capitalize' }],
        'paragraph-small-cap-bold': ['12px', { lineHeight: '120%', fontWeight: '700', textTransform: 'capitalize' }],

        // Paragraph XSmall variants - 10/108
        'paragraph-xsmall-regular': ['10px', { lineHeight: '120%', fontWeight: '400' }],
        'paragraph-xsmall-bold': ['10px', { lineHeight: '120%', fontWeight: '700' }],

        // Insights variants - 86/108
        'insights-bold': ['86px', { lineHeight: '120%', fontWeight: '700' }],
        'insights-regular': ['86px', { lineHeight: '120%', fontWeight: '400' }],
      },

      // If you want to separate font weights for more flexibility
      fontWeight: {
        regular: 400,
        bold: 700,
      },

      colors: {
        // Add your custom colors here. For example:
        "footer-green": {
          400: '#2F727D',  // Custom teal color, overriding the default if needed
        },
        primary: '#1A202C',  // Example: A dark blue-gray for primary elements
        secondary: '#38B2AC',  // Example: A lighter teal or cyan for accents
        'color-shades-blue-light': {
          '1000': '#2A4E50',
          '900': '#356165',
          '800': '#3F7479',
          '700': '#4A888D',
          '600': '#549BA1',
          '500': '#69C2C9',
          '300': '#A5DBDF',
          '100': "#C3E7EA",
        },
        'color-shades-blue-dark': {
          '100': "#CCDDE4",
        },
        'color-shades-purple-light': {
          '1000': '#320E1D',
          '900': '#3F1124',
          '800': '#4B142B',
          '700': '#581832',
          '600': '#641B3A',
          '100': "#E5D3DA",
        },
        'color-shades-green-light': {
          '1000': '#504700',
          '900': '#645901',
          '800': '#786B01',
          '700': '#8C7D01',
          '600': '#A08E01',
          '400': '#D2C233',
          '300': '#DDD165',
          '200': '#E9E099',
          '100': '#F4F0CC',
        },
        'color-shades-green-dark': {
          '500': '#49783C',
          '100': '#DBE4D8',
        },
        'color-shades-pink-dark': {
          '1000': '#5C1216',
          '900': '#73171C',
          '800': '#891C21',
          '700': '#A02027',
          '600': '#B7252C',
          '100': "#FAD5D8",
        },
        'color-shades-pink-light': {
          '200': '#FFCCD1',
          '100': '#FFE6E8',
        },
        'color-shades-orange-dark': {
          '1000': '#5C2407',
          '900': '#732D09',
          '800': '#8A350B',
          '700': '#A13E0D',
          '600': '#B8470E',
          '100': "#FADED0"
        },
        'color-shades-orange-light': {
          '1000': '#634418',
          '900': '#7C561F',
          '800': '#946725',
          '700': '#AD782B',
          '600': '#C68931',
          '500': '#F7AB3D',
          '400': '#F9BC64',
          '300': '#FACD8B',
          '200': '#FCDDB1',
          '100': '#FCEFD8'
        },
        'color-primary-orange-dark': {
          'accent': '#E55912'
        },
        'color-primary-purple-light': {
          '100': '#E5D3DA'
        },
        'color-primary-orange-light': {
          '100': '#FCEFD8',
          '0': '#F7AB3D'
        },
        'color-primary-purple': {
          '0': '#7D2248'
        },
        'color-primary-orange-dark-accent': {
          '0': '#E55912'
        }
        // You can add more shades or colors as needed, e.g., { light: '#hex', dark: '#hex' }
      },
    },
  },
  plugins: [],
}
