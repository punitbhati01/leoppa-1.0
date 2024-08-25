import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Divider } from '@mui/material';

function Copyright() {
    return (
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary" align='center'>
            {'Copyright © '}
            <Link style={{ textDecoration: 'none' }} color="inherit" href="https://leoppa.in/">
                Leoppa
            </Link>{' '}
            {new Date().getFullYear()}
            {' -'} All Right Reserved
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={4}>
                                <Typography variant="h6" color="text.primary" gutterBottom>
                                    About
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We are LEOPPA company, dedicated to providing the best products to our
                                    customers.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" color="text.primary" gutterBottom>
                                    Contact us
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faridabad, Haryana, India
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Email: leoppa@gmail.com
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phone: +91 9250015009
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" color="text.primary" gutterBottom>
                                    Follow us
                                </Typography>
                                <Box sx={{ my: 2, "& svg": { fontSize: "30px", cursor: "pointer", mr: 2 } }}>
                                    <InstagramIcon />
                                    <FacebookIcon />
                                    <XIcon />
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider sx={{ pt: 3 }} />
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}