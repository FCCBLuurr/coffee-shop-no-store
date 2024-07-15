import React, { ReactNode } from 'react';
import { Box, ThemeProvider, useTheme } from '@mui/material';
import WrapperTheme from '../themes/wrapperTheme';

interface WrapperProps {
    children: ReactNode;
}



const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={WrapperTheme}>
            <Box
                sx={{
                    backgroundColor: theme.palette.background.default,
                    minHeight: '100%', // Ensure it covers the entire viewport height
                    minWidth: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        maxWidth: '1920px',
                        margin: '0 auto',
                        padding: '0 16px',
                        width: '100%',
                    }}
                >
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Wrapper;