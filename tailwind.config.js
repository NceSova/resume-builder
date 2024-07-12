/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          50: '#0a0f0e',
          100: '#151e1c',
          200: '#2a3c38',
          300: '#3f5a53',
          400: '#54786f',
          500: '#69968b',
          600: '#87aba2',
          700: '#a5c0b9',
          800: '#c3d5d1',
          900: '#e1eae8',
          950: '#f0f5f3',
        },
        background: {
          50: '#09100e',
          100: '#13201c',
          200: '#254138',
          300: '#386153',
          400: '#4a826f',
          500: '#5da28b',
          600: '#7db5a2',
          700: '#9ec7b9',
          800: '#bedad1',
          900: '#dfece8',
          950: '#eff6f3',
        },
        primary: {
          50: '#0a100f',
          100: '#141f1d',
          200: '#283e3b',
          300: '#3c5d58',
          400: '#507c76',
          500: '#639c93',
          600: '#83afa9',
          700: '#a2c3be',
          800: '#c1d7d4',
          900: '#e0ebe9',
          950: '#eff5f4',
        },
        secondary: {
          50: '#0a0c10',
          100: '#14181f',
          200: '#272f3f',
          300: '#3b475e',
          400: '#4f5e7d',
          500: '#62769d',
          600: '#8291b0',
          700: '#a1adc4',
          800: '#c0c8d8',
          900: '#e0e4eb',
          950: '#eff1f5',
        },
        accent: {
          50: '#0a0a10',
          100: '#14141f',
          200: '#28283e',
          300: '#3c3c5d',
          400: '#50507c',
          500: '#63649c',
          600: '#8383af',
          700: '#a2a2c3',
          800: '#c1c1d7',
          900: '#e0e0eb',
          950: '#eff0f5',
        },
      },

      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Rubik',
        body: 'Rubik',
      },
      fontWeight: {
        normal: '400',
        bold: '500',
      },
    },
  },
  plugins: [],
};
