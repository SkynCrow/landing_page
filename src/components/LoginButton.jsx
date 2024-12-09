import { useState } from "react";

import ModalLogin from "./ModalLogin";
import { Avatar, Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout, Person } from "@mui/icons-material";

const LoginButton = () => {
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
  // <Avatar sx={{ bgcolor: "primary.main" }} onClick={handleShow}>
  //     <Person/>
  //     <Menu>
  //         <MenuItem onClick={handleShow}>
  //             Login
  //         </MenuItem>

  //     </Menu>
  // </Avatar>
  // <ModalLogin open={show} handleClose={handleClose} />
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default LoginButton;
