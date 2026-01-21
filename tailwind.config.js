/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-body)'],
      },
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          elevated: 'var(--color-bg-elevated)',
        },
        fg: {
          DEFAULT: 'var(--color-foreground)',
          muted: 'var(--color-muted)',
        },
        border: {
          subtle: 'var(--color-border)',
        },
      },
      fontSize: {
        'display-2xl': ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'display-xl': ['2.75rem', { lineHeight: '1.18' }],
        'display-lg': ['2.25rem', { lineHeight: '1.22' }],
        'display-md': ['1.75rem', { lineHeight: '1.28' }],
        'display-sm': ['1.375rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        'card': '1.5rem',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(30, 41, 59, 0.06), 0 1px 2px -1px rgba(30, 41, 59, 0.04)',
        'soft-lg': '0 4px 12px -2px rgba(30, 41, 59, 0.06), 0 2px 6px -2px rgba(30, 41, 59, 0.04)',
        'dark-soft': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.16)',
        'dark-soft-lg': '0 4px 12px -2px rgba(0, 0, 0, 0.25), 0 2px 6px -2px rgba(0, 0, 0, 0.18)',
      },
      maxWidth: {
        'container': '72rem',
      },
    },
  },
  plugins: [],
}
