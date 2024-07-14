import React from 'react';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import NavbarTheme from '../themes/navbarTheme';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import placeholderLogo from '../assets/placeholderLogo.png';


const Navbar: React.FC = () => {
    return (
        <ThemeProvider theme={NavbarTheme}>
            <AppBar position="static" color="primary">
                <Container sx={{ maxWidth: 'lg' }}>
                    <Toolbar disableGutters>
                        <Box component={Link} to="/" sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            textDecoration: 'none', 
                            color: 'inherit' 
                        }}>
                            <Box 
                                component="img" 
                                src={placeholderLogo} 
                                alt="Logo" 
                                sx={{ maxHeight: 120, marginRight: 2 }} 
                            />
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <CustomButton color="inherit" component={Link} to="/">Home</CustomButton>
                            <CustomButton color="inherit" component={Link} to="/about">About Us</CustomButton>
                            <CustomButton color="inherit" component={Link} to="/products">Our Drinks</CustomButton>
                            <CustomButton color="inherit" component={Link} to="/contact" >Contact Us</CustomButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;