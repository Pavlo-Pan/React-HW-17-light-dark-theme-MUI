/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import resetStyles from "../../styles/reset";
import { lightTheme, darkTheme } from "../../styles/styles";

const ThemeProviderWrapper = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(prev => !prev);
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Global styles={resetStyles} />
            {typeof children === "function"
                ? children({ isDarkMode, toggleTheme })
                : children}
        </ThemeProvider>
    );
};

export default ThemeProviderWrapper;
