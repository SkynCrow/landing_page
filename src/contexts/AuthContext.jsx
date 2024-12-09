import { createContext, useCallback, useEffect, useState } from "react";
import { login, logout, OnAuthStateChanged } from "../../firebase";
import propTypes from "prop-types";

export const AuthContext = createContext(AuthProvider);
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionID, setSessionID] = useState(null);
  const [credentials, setCredentials] = useState(null);
  const Rand = useCallback(() => {
    return Math.random().toString(36).substr(2);
  }, []);
  const Login = useCallback(async (email, password) => {
    login(email, password);

  }, []);
  const Logout = useCallback(async () => {
    logout();
    localStorage.clear();
  }, []);

  const Token = useCallback(() => {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      let rand = Rand() + Rand();
      localStorage.setItem("token", rand);
      return rand;
    }
  }, [Rand]);

  useEffect(() => {
    const unsubscribe = OnAuthStateChanged((creds) => {
      setCredentials(creds);
      if (!creds) {
        localStorage.clear();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [Token]);

  useEffect(() => {
    if (credentials) {
      setIsAuthenticated(true);
      setSessionID(Token());
    } else {
      setIsAuthenticated(false);
      setSessionID(null);
    }
  }, [credentials, Token]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, sessionID, credentials, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};
