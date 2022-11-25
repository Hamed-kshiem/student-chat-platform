import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web'

import Keycloak from 'keycloak-js';
import App from './app/app';

const keycloak = new Keycloak('assets/keycloak.json');
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
  {/* <StrictMode> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  {/* </StrictMode> */}
  </ReactKeycloakProvider>
);
