import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
import { ChakraProvider } from "@chakra-ui/react"
import { myNewTheme } from './theme';



ReactDOM.render(
  <ChakraProvider theme={myNewTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();