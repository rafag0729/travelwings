import { ChakraProvider } from '@chakra-ui/react'
import { AppRouter } from './router/AppRouter';



function App() {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
