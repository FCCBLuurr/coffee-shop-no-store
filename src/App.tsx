import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import theme from './themes/theme';
import Wrapper from './components/Wrapper';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Wrapper>
                    <Box
                        sx={{
                            backgroundColor: 'background.default',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <CssBaseline />
                        <Header />
                        <Routes>
                            <Route path="/" element={(<Home />)} />
                            <Route path="/about" element={(<About />)} />
                        </Routes>
                        <Footer />
                    </Box>
                </Wrapper>
            </Router>
        </ThemeProvider>
    );
};

export default App;