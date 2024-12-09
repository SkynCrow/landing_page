import { Modal, TextField, Button, Typography, Paper } from "@mui/material";

import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

ModalLogin.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default function ModalLogin({ open, handleClose }) {
  const { Login } = useAuth();

  const handleLogin = (e) => {
    Login(e.target.email.value, e.target.password.value)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.error(error);
        handleClose();
      });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          borderRadius: 3,
          p: 3,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(e);
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Modal>
  );
}
