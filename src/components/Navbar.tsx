import React from 'react';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import NavbarTheme from '../themes/navbarTheme';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import placeholderLogo from '../assets/placeholderLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarDrawer from './NavbarDrawer';

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={NavbarTheme}>
            <AppBar position="static" color="primary" sx={{ width: '100%', margin: 0 }}>
                <Toolbar disableGutters sx={{ justifyContent: { xs: 'flex-start', sm: 'center' }, width: '100%', padding: 0 }}>
                    <Box component={Link} to="/" sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        flexGrow: { xs: 1, md: 0 }, // Makes sure the logo takes available space on small screens
                    }}>
                        <Box 
                            component="img" 
                            src={placeholderLogo} 
                            alt="Logo" 
                            sx={{ maxHeight: { xs: 60, md: 120 }, marginRight: { xs: 2, md: 0 } }} 
                        />
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                    }}>
                        <CustomButton color="inherit" component={Link} to="/">Home</CustomButton>
                        <CustomButton color="inherit" component={Link} to="/menu">Our Drinks</CustomButton>
                        <CustomButton color="inherit" component={Link} to="/about">About Us</CustomButton>
                        <CustomButton color="inherit" component={Link} to="/contact">Contact Us</CustomButton>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' }, paddingRight: 3 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <NavbarDrawer open={mobileOpen} onClose={handleDrawerToggle} />
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
