import React from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
