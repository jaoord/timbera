const config = {
  plugins: {
    '@tailwindcss/postcss': {
      theme: {
        extend: {
          fontFamily: {
            heading: ['var(--font-inter)', 'sans-serif'],
            body: ['var(--font-nunito)', 'sans-serif'],
          },
        },
      },
    },
  },
}
export default config
