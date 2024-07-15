import { createTheme } from '@mui/material/styles';

const NavbarTheme = createTheme ({
    palette: {
        primary: {
            main: '#6F1D1B' //Coffee shop red for navbar
        },
        secondary: {
            main: '#432818', //Darker brown for contrast
            dark: 'black' //Straight up black for hover effect
        },
        background: {
            // main: ''     //Not implemented
        },
        text: {
            primary: '#F8EAC6' //Dutch white for text
        },
    },
    typography: {
        h1: {

        },

    },
});

export default NavbarTheme;