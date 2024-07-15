import React from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import ubereats100 from '../assets/icons/ubereats/ubereats100.svg';
import facebook100 from '../assets/icons/facebook/facebook100.svg';
import instagram100 from '../assets/icons/instagram/instagram100.svg';
import placeholderHeroSection from '../assets/placeholderHeroSection.jpeg';
import placeholderMenu from '../assets/placeholderMenu.jpg';

const HeroSection = styled(Grid)(({ theme }) => ({
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
        objectFit: 'scale-down',
        maxWidth: '100%',
        maxHeight: 'auto',

    },
}));

const MenuSection = styled(Grid)(({ theme }) => ({
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
        objectFit: 'scale-down',
        maxWidth: '100%',
        maxHeight: 'auto',
    },
}));

const SocialMediaSection = styled(Grid)(({ theme }) => ({
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
        objectFit: 'scale-down',
        maxWidth: '100%',
        maxHeight: 'auto',
    },
}));

const OverlayText = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    maxWidth: '600px',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        maxWidth: '400px',
        padding: theme.spacing(1),
        fontSize: '0.875rem',
    },
    [theme.breakpoints.up('md')]: {
        width: '70%',
        padding: theme.spacing(2),
        fontSize: '1rem',
    },
}));

const Home: React.FC = () => {
    return (
        <Grid
            container
            direction="row"
            sx={{
                padding: '0', 
                margin: '0',
            }} 
        >
            <HeroSection 
                item 
                xs={12} 
                justifyContent="center" 
                sx={{ 
                    position: 'relative', 
                    textAlign: 'center' 
                }}
            >
                <Box
                    component="img"
                    src={placeholderHeroSection}
                    alt="Image"
                    sx={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />
                <OverlayText>
                    <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                        Welcome to my Coffee Shop!
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        We make coffee!
                    </Typography>
                    <CustomButton
                        variant="contained"
                        component={Link}
                        to="/about"
                        sx={{ 
                            marginTop: 2,
                            color: 'white' 
                        }}
                    >
                        Learn More About Us
                    </CustomButton>
                </OverlayText>
            </HeroSection>
            <MenuSection 
                item 
                xs={12} 
                justifyContent="center" 
                sx={{
                    position: 'relative', 
                    textAlign: 'center'
                }}
            >
                <Box
                    component="img"
                    src={placeholderMenu}
                    alt="Image"
                    sx={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />
                <OverlayText>
                    <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2.5rem '} }}>
                        Take a look at our menu!
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Can alternatively link to UberEats/DoorDash/etc
                    </Typography>
                    <CustomButton
                        variant="contained"
                        component={Link}
                        to="/menu"
                        sx={{ 
                            marginTop: 2, 
                            color: 'white' 
                        }}
                    >
                        Menu
                    </CustomButton>
                </OverlayText>
            </MenuSection>
            <SocialMediaSection
                item
                xs={12}
                justifyContent="center"
                sx={{
                    position: 'relative',
                }}
            >
                <Grid 
                    container
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignContent="center"
                >
                    <Grid item>
                        <IconButton aria-label="Facebook" href="https://www.facebook.com" target="_blank">
                            <Box 
                                component="img" 
                                src={facebook100} 
                                sx={{ 
                                    width: { xs: '50px', md: '100px' }, 
                                    height: { xs: '50px', md: '100px' } 
                                }} 
                            />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Instagram" href="https://www.instagram.com" target="_blank">
                            <Box 
                                component="img" 
                                src={instagram100} 
                                sx={{ 
                                    width: { xs: '52px', md: '104px' }, 
                                    height: { xs: '52px', md: '104px' } 
                                }} 
                            />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Uber Eats" href="https://www.ubereats.com" target="_blank">
                            <Box 
                                component="img" 
                                src={ubereats100} 
                                sx={{ 
                                    width: { xs: '53px', md: '106px' }, 
                                    height: { xs: '53px', md: '106px' } 
                                }} 
                            />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant="h6" paragraph sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Can add more social media or relevant icons here
                </Typography>
            </SocialMediaSection>
        </Grid>
    );
};

export default Home;
