import { useState } from 'react';
import { Avatar, Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Implement logout functionality here
        handleClose();
    };

    const handleSettings = () => {
        // Implement settings functionality here
        handleClose();
    };

    return (
        <Avatar>
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleSettings}>
                    <Settings fontSize="small" />
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <Logout fontSize="small" />
                    Logout
                </MenuItem>
            </Menu>
        </Avatar>
    );
};

export default AccountMenu;