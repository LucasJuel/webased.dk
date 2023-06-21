import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';


let theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: [
      'Source Sans Pro',
      
    ].join(','),
  },
  palette: {
    primary: {
      main: '#4D7E3E',
    },
    secondary: {
      main: '#FF560B',
    },
    error: {
      main: '#c20404',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Auth0Provider 
        domain='webased.eu.auth0.com'
        clientId='hCoLXA8BWetOcEplCwNyMUH3bbnNvVK4'
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
