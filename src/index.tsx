import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from "react-router-dom";

import { ContactInfoContextProvider } from 'context';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme/theme';
import { Header } from 'components';

import { router } from 'navigation/router/routes';
import { Provider } from 'react-redux';
import store from 'reduxStore'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={ theme }>
        <ContactInfoContextProvider>
          <>
              <Header />
              <RouterProvider router={router} />
          </>
        </ContactInfoContextProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
