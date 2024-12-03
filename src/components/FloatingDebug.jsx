import { Box, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';
import useStats from '../hooks/useStats';
import { useEffect } from 'react';

export default function FloatingDebug () {
    const { isAuthenticated } = useAuth();
    const { lastClick } = useStats();
    useEffect(() => {
        console.log('FloatingDebug rendered');
    }, []);
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                p: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant="body1">Clicks: {JSON.stringify(lastClick)}</Typography>
            <Typography variant="body1">Is authenticated: {isAuthenticated ? 'Yes' : 'No'}</Typography>
        </Box>
    );
};
