import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, LinkProps } from 'react-router-dom';
import NavbarTheme from '../themes/navbarTheme';

const CustomButtonTheme = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: NavbarTheme.palette.secondary.main,
    color: NavbarTheme.palette.text.primary,
    '&:hover': {
        backgroundColor: NavbarTheme.palette.secondary.dark,
    },
    padding: '14px 30px',
    borderRadius: '8px',
    fontSize: '1.2rem',
    marginRight: '15px',
    [theme.breakpoints.down('sm')]: {
        padding: '6px 12px', // Adjust padding for small screens
        fontSize: '0.75rem', // Adjust font size for small screens
        marginRight: '5px',
    },
    [theme.breakpoints.up('md')]: {
        padding: '14px 30px',
        fontSize: '1.2rem',
        marginRight: '15px',
    },
}));

const CustomButton: React.FC<ButtonProps & LinkProps> = (props) => {
    return <CustomButtonTheme component={Link} {...props} />;
};

export default CustomButton;
