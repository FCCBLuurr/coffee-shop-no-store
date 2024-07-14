import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, LinkProps } from 'react-router-dom';
import NavbarTheme from '../themes/navbarTheme';

//CustomButtonTheme uses themes from parent component. Modify the theme in parent component's theme file
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
}));

const CustomButton: React.FC<ButtonProps & LinkProps> = (props) => {
    return <CustomButtonTheme component={Link} {...props} />;
};

export default CustomButton;