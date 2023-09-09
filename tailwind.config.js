/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.blue.600'),
          },
          img: {
            display: 'inline-block'
          },
          hr: {
            borderColor: theme('colors.gray.400'),
            marginTop: '2em',
            marginBottom: '2em',
          }
        }
      }
    }),
    extend: {
      colors: {
        'meetup-blue': '#00455D',
        'meetup-purple': '#1F24CC',
        'gray-750': '#3f495a',
        'gray-850': '#222733',
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '200': '50rem',
      },
      width: {
        '7/10': '70%',
        '3/10': '30%',
      },
      fontSize: {
        xxs: '0.5rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
    container: {
      padding: '1rem'
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      'source-sans-pro': [
        'Source Sans Pro',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  daisyui: {
    themes: [
      {
        'redcinema': {
          'primary': '#f21717',
          'primary-focus': '#cb0c0c',
          'primary-content': '#131616',
          'secondary': '#ffd700',
          'secondary-focus': '#F5D000',
          'secondary-content': '#ffffff',
          'accent': '#4fa300',
          'accent-focus': '#367000',
          'accent-content': '#ffffff',
          'neutral': '#1b1d1d',
          'neutral-focus': '#131616',
          'neutral-content': '#ffffff',
          'base-100': '#1f1f1f',
          'base-200': '#1b1d1d',
          'base-300': '#131616',
          'base-content': '#ffffff',
          'info': '#66c7ff',
          'success': '#87cf3a',
          'warning': '#e1d460',
          'error': '#ff6b6b',
          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '.25s',
          '--animation-input': '.2s',
          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        }
      },
        "business",
        "fantasy"
      ],
    },
    plugins: [
      require('@tailwindcss/typography'),
      require("daisyui")
    ]
  }