/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      primary: {
        100: '#17153A',
        50: '#AC7F98',
      },
      orange: '#FC6220',
      white: '#FFFFFF',
      black : '#000000',
      gray : '#F1F1F1',
      grey : '#D9D9D9',
      black : '#000000',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     

    },
  },
  plugins: [],
}
