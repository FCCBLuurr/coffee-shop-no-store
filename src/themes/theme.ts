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
        },
    },
    //ToDo: Add more theming here
});

export default theme;