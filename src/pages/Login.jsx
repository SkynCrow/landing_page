import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useData from "../hooks/useData";
import {
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export default function Login() {
  const { login } = useAuth();
  const { setToken } = useData();
  const [email, setEmail] = useState("");
  const { background } = useTheme();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const token = await login(email, password);
      setToken(token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Grid sx={{ background: background }}>
      <Typography>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          fullWidth
        />

        <TextField
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          fullWidth
        />
        <Button fullWidth type="submit">
          Login
        </Button>
      </form>
      {error && <p>{error}</p>}
    </Grid>
  );
}
