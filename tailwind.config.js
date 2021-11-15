module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'second-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
        'brand-gray': '#f0f8ff'
      },
      backgroundImage: {
        'mobile-pattern':
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')"
      }
    }
  },
  variants: {
    extend: {
      color: ['before']
    }
  },
  plugins: []
}
