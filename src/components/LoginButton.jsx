
import  { useState } from 'react';

import ModalLogin from './ModalLogin';
import { Avatar, Button } from '@mui/material';
import { Person } from '@mui/icons-material';

const LoginButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Avatar sx={{ bgcolor: "primary.main" }} onClick={handleShow}>
                <Person/>
            </Avatar>
            <ModalLogin open={show} handleClose={handleClose} />
        </>
    );
};

export default LoginButton;