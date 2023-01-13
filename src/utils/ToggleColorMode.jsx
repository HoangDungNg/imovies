import React, { useState, createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// export ColorModeContext to be used in NavBar.jsx for triggering mode change
export const ColorModeContext = createContext();

// @children: define this variable for later passing the <App />
const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light');
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // useMemo is used to memoize the value of theme returned by the createTheme function
  // if the mode is not changed, the value of theme does not change
  // use useMemo because value of theme is returned by an expensive function (complex function)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
