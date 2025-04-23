/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { lightTheme, darkTheme, container } from '../styles/styles';
import Header from '../Header/Header';
import CardToggle from '../CardToggle/CardToggle';
import ButtonToggle from '../ButtonToggle/ButtonToggle';
import resetStyles from "../styles/reset";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Global styles={resetStyles} />
      <Container maxWidth="sm"
        sx={container} >
        <Header isDarkMode={isDarkMode} />
        <CardToggle isDarkMode={isDarkMode} />
        <ButtonToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;