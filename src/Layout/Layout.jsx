import Container from '@mui/material/Container';
import { container as containerSx } from '../styles/styles';
export default function Layout({ children }) {
    return (
        <Container maxWidth="sm" sx={containerSx} >{children}</Container>
    )
}