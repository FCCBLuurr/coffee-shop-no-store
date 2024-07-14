import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1">We are a company dedicated to...</Typography>
        </Container>
    );
};

export default About;
