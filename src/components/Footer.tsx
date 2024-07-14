import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" py={3} textAlign="center">
            <Typography variant="body1">&copy; 2024 Your Company Name Here</Typography>
            <Typography variant="body1">A project by BLuurr</Typography>
        </Box>
    );
};

export default Footer;
