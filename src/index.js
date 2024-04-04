import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-0xmgwn7xmhrk80pm.us.auth0.com"
    clientId="h0jGiPfq1dIurXh5vnWhYL0PFW0k5qOE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <App />
  </Auth0Provider>
);
 
reportWebVitals();
