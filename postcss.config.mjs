// Tailwind CSS v4 runs through the standard PostCSS pipeline so it works with both
// the webpack build (used on hosting) and the Turbopack dev server.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
