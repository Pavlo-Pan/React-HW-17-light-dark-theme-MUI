import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { flex } from '../../styles/styles';

export default function Header({ isDarkMode }) {
    return (
        <Box sx={flex}>
            <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
            >
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography>
        </Box>
    )
}