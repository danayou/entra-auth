import { Configuration, PopupRequest } from "@azure/msal-browser";

// Debug environment variables
console.log('Environment variables:', {
  APPLICATION_ID: import.meta.env.VITE_APPLICATION_ID,
  OBJECT_ID: import.meta.env.VITE_OBJECT_ID,
  TENANT_ID: import.meta.env.VITE_TENANT_ID
});

// MSAL configuration
const tenantId = import.meta.env.VITE_TENANT_ID;
if (!tenantId) {
  console.error('VITE_TENANT_ID is not defined! Please check your .env file');
}

export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_APPLICATION_ID,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"],
}; 