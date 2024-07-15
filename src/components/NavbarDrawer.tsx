import React from 'react';
import { Box, IconButton, Drawer, List, ListItemText, ListItemButton, Divider } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

interface NavbarDrawerProps {
    open: boolean;
    onClose: () => void;

}

const StyledCloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: 7.5,
    right: 0,
    color: theme.palette.text.primary,
    zIndex: 1000,
}));

const NavbarDrawer: React.FC<NavbarDrawerProps> = ({ open, onClose }) => {
    const theme = useTheme();

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: theme.palette.primary.main, color: theme.palette.text.primary },
            }}
        >
            <Box sx={{ textAlign: 'center', height: '100%', width: '100%' }}>
                <StyledCloseButton onClick={onClose}>
                    <CloseIcon sx={{ height: '2rem', width: '2rem' }} />
                </StyledCloseButton>
                <List sx={{ paddingTop: 7.5 }}>
                    <Divider sx={{ backgroundColor: theme.palette.text.primary, height: 2 }} />
                    <ListItemButton component={Link} to="/" sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary }}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <Divider sx={{ backgroundColor: theme.palette.text.primary, height: 2 }} />
                    <ListItemButton component={Link} to="/menu" sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary }}>
                        <ListItemText primary="Our Drinks" />
                    </ListItemButton>
                    <Divider sx={{ backgroundColor: theme.palette.text.primary, height: 2 }} />
                    <ListItemButton component={Link} to="/about" sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary }}>
                        <ListItemText primary="About Us" />
                    </ListItemButton>
                    <Divider sx={{ backgroundColor: theme.palette.text.primary, height: 2 }} />
                    <ListItemButton component={Link} to="/contact" sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary }}>
                        <ListItemText primary="Contact Us" />
                    </ListItemButton>
                    <Divider sx={{ backgroundColor: theme.palette.text.primary, height: 2 }} />
                </List>
            </Box>
        </Drawer>
    );
};

export default NavbarDrawer;
