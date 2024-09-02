import { createContext, useState } from "react";
import propTypes from "prop-types";

export const AuthContext = createContext(AuthProvider);
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};
