import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
FloatingDebug.propTypes = {
    text: PropTypes.string.isRequired,
};

export default function FloatingDebug ({ text }) {
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
            <Typography variant="body1">{text}</Typography>
        </Box>
    );
};
