import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

// Example styled component using @mui/material/styles
const HeroSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#BB9457',
    padding: theme.spacing(4),
}));

const Home: React.FC = () => {
    return (
        <Container>
            <HeroSection>
                <Typography variant="h2" gutterBottom>
                    Welcome to My Company
                </Typography>
                <Typography variant="h6" paragraph>
                    We provide exceptional services to help your business grow.
                </Typography>
                <CustomButton
                    variant="contained"
                    component={Link}
                    to="/about"
                    sx={{ marginTop: 2, color: 'white' }}
                >
                    Learn More About Us
                </CustomButton>
            </HeroSection>
        </Container>
    );
};

export default Home;
