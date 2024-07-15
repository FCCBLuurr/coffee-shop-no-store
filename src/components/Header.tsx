import React from 'react';
import { AppBar } from '@mui/material';
import Navbar from './Navbar';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Navbar />
        </AppBar>
    );
};

export default Header;
