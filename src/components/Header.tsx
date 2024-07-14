import React from 'react';
import { AppBar, Container, Typography } from '@mui/material';
import Navbar from './Navbar';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Container>
                <Navbar />
            </Container>
        </AppBar>
    );
};

export default Header;
