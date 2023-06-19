/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl-only': {'min': '1536px', 'max': '1919px'},
      // => @media (min-width: 1536px) and (max-width: 1919px) { ... }
      'max-2xl': {'max': '1919px'},
      // => @media (max-width: 1919px) { ... }
      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }

      'xl-only': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px) and (max-width: 1535px) { ... }
      'max-xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

      'lg-only': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px) and (max-width: 1279px) { ... }
      'max-lg': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'md-only': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px) and (max-width: 1023px) { ... }
      'max-md': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'min': '768px'},
      // => @media (min-width: 768px) { ... }

      'sm-only': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px) and (max-width: 767px) { ... }
      'max-sm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'sm': {'min': '640px'},
      // => @media (min-width: 640px) { ... }

      'esm-only': {'min': '420px', 'max': '639px'},
      // => @media (min-width: 420px) and (max-width: 639px) { ... }    
      'max-esm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'esm': {'min': '420px'},
      // => @media (min-width: 420px) { ... }

      'exsm-only': {'min': '320px', 'max': '419px'},
      // => @media (min-width: 320px) and (max-width: 419px) { ... }
      'max-exsm': {'max': '419px'},
      // => @media (max-width: 419px) { ... }
      'exsm': {'min': '320px'},
      // => @media (min-width: 320px) { ... }


      '@media-screen': {'min': '768px', 'max': '1919px'},
      '@media-mobile': {'min': '530px', 'max': '767px'},
      // => @media (min-width: 530px) and (max-width: 767px) { ... }
    },
    
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
    },
  },
  plugins: [],
}
