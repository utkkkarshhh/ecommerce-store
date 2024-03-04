import React, { useState } from "react";

const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null,
  login: (email, password) => {},
  logout: () => {},
  register: (name, email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const loginHandler = (email, password) => {
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };

  const registerHandler = (name, email, password) => {
    if (name && email && password) {
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
