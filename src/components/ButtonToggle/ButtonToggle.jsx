import Box from '@mui/material/Box';
import { ThemeToggleButton, flex } from '../../styles/styles';

export default function ButtonToggle({ isDarkMode, onToggle }) {
    return (
        <Box sx={flex}>
            <ThemeToggleButton onClick={onToggle}>
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </ThemeToggleButton>
        </Box>
    )
}