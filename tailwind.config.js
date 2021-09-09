const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'media', // or 'media' or 'class'
    theme: {
    screens: {
      'xs': {'min': '0px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px'
    },
    colors: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
    },
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray
      },
      spacing: {
        '96': '24rem',
        '128': '32rem'
      },
      height: {
        '84': '22rem'
      },
      width: {
        '3/2': '150%',
        '4/2': '200%',
        '1/2-screen': '50vw'
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  purge: {
    // mode: "layers",
    // enabled: process.env.NODE_ENV === "production",
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  }
}
