export default {
  palette: {
    primary: {
      light: 'rgb(255,107,2)',
      main: 'rgb(210,108,34)',
      mainWithOpacity: 'rgb(210,108,34,.3)',
    },
    secondary: {
      light: 'rgb(208,207,204)',
      main: 'rgb(78,77,74)',
      dark: 'rgb(38,37,34)',
    },
    colors: {
      light: '#fff',
      lightGrey: 'rgb(238,237,234)',
      grey: 'rgb(128,127,124)',
    },
  },
  
  // Mixins
  mediaMixins: { width : { notXs: styles => `@media (min-width: 480px) { ${styles} }` } },
};


