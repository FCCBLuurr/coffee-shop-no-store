import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#BB9457',
        },
        secondary: {
            main: '#14171A',
        },
        background: {
            default: '#E1E8ED',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
    typography: {
        h1: {
            fontSize: '2.5rem',
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h2: {
            fontSize: '2rem',
            '@media (max-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        h6: {
            fontSize: '1.25rem',
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;
