import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, flex } from '../styles/styles';

export default function CardToggle({ isDarkMode }) {
    return (
        <Box sx={flex}>
            <Card>
                <Typography variant="body">
                    This is an example of a theme toggle application using Material UI and Emotion.
                </Typography>
                <br />
                <Typography variant="body">
                    Current theme: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong>
                </Typography>
            </Card>
        </Box>
    )

}