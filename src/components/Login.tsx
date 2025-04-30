import React from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../auth/msalConfig";
import './Login.css';

const Login: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((error) => {
      console.error("Login failed:", error);
    });
  };

  return (
    <div className="login-container">
      <button className="login-button" onClick={handleLogin}>
        Login with Microsoft
      </button>
    </div>
  );
};

export default Login; 