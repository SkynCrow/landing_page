import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import useStats from '../hooks/useStats';
FloatingDebug.propTypes = {
    text: PropTypes.string.isRequired,
};

export default function FloatingDebug () {
    const { isAuthenticated } = useAuth();
    const { clicks } = useStats();
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
            <Typography variant="body1">Clicks: {clicks.toString()}</Typography>
            <Typography variant="body1">Is authenticated: {isAuthenticated ? 'Yes' : 'No'}</Typography>
        </Box>
    );
};
