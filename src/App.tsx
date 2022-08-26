import { ChakraProvider } from '@chakra-ui/react'
import { AppRouter } from 'router/AppRouter';
import { theme } from 'theme/theme';
import { ContactInfoContextProvider } from 'context';



function App() {
  return (
    <ChakraProvider theme={ theme }>
      <ContactInfoContextProvider>
        <AppRouter /> 
      </ContactInfoContextProvider>
    </ChakraProvider>
  );
}

export default App;
