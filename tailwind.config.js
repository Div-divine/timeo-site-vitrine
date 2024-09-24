/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)', 'var(--font-cormorant)', 'var(--font-proza_libre)']
      },
      boxShadow: {
        'footerMenuShadow': '0 4px 10px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
}

