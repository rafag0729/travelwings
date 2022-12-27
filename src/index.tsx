import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from "react-router-dom";

import { ContactInfoContextProvider } from 'context';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from 'theme/theme';
import { Footer, Header } from 'components';

import { router } from 'router/routes';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <ContactInfoContextProvider>
        <Container maxW="full" bg="blackAlpha.200" p="-0.5">
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </Container>
      </ContactInfoContextProvider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
