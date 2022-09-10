import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GitHubProvider } from './context/context';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-58i0tk38.us.auth0.com"
      clientId="I7Uoe3WEkrLriGBFMO2qRH3TTHoZ51T9"
      redirectUri={window.location.origin}
    >
      <GitHubProvider>
        <App />
      </GitHubProvider>
    </Auth0Provider>
  </StrictMode>
);
