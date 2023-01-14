import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web'

import Keycloak from 'keycloak-js';
import App from './app/app';

const  keycloak =  new Keycloak('assets/keycloak.json');
const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('root', keycloak);

const setTokens = () => {
  const { token, refreshToken, idTokenParsed } = keycloak;
  if (token && refreshToken && idTokenParsed) {
      sessionStorage.setItem('react-token', token);
      localStorage.setItem('token', token);
      localStorage.setItem('currentUser', idTokenParsed['preferred_username']); // For case inbox filter api
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('idTokenParsed', JSON.stringify(idTokenParsed));                               
    }
    createUserIfNotexsists();
};

const createUserIfNotexsists = async () => {
  fetch('http://localhost:3333/api/user/createUserIfNotExisits ', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": localStorage.getItem('currentUser'),
    "firstName": localStorage.getItem('idTokenParsed')['given_name'],
    "lastName": localStorage.getItem('idTokenParsed')['family_name'],
    "email": localStorage.getItem('idTokenParsed')['email'],
  })
}).then(res => console.log(res))
  .then(res => console.log(res));
}


const refreshAccessToken = () => {
  keycloak
      .updateToken(50)
      .success((refreshed) => {
          if (refreshed) {
              setTokens();
          }
      })
      .error(() => {
          sessionStorage.clear();
          keycloak.logout();
      });
};

const handleEvent = (event) => {
  if (event === 'onAuthSuccess') {
      setTokens();
  }

  if (event === 'onTokenExpired') {
      refreshAccessToken();
  }

  if (event === 'onAuthLogout') {
      sessionStorage.clear();
  }
};

root.render(
  <ReactKeycloakProvider authClient={keycloak} onTokens={tokenLogger}   onEvent={handleEvent}
  >
  {/* <StrictMode> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  {/* </StrictMode> */}
  </ReactKeycloakProvider>
);
