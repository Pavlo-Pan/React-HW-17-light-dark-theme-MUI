import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
});

export const ThemeToggleButton = styled.button(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        transform: 'scale(1.05)',
    },
    '&:focus': {
        outline: 'none',
        boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.3)',
    },
}));

export const Card = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    marginTop: '20px',
}));

export const flex = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
}

export const container = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
}