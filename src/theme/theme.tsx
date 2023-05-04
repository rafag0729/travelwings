import { extendTheme } from '@chakra-ui/react';
import '@fontsource/pacifico/400.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';



export const theme = extendTheme({
    colors: {
        brand: {
            red: '#fd0100ff',
            purple: '#84495aff',
            blue: '#1291b1ff',
            green: '#81d060ff',
            yellow: '#f5f616ff'       
        }
    },
    fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
      },
})