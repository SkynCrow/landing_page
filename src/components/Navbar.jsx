import { Button, ButtonGroup, Grid2, Paper, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import useTheme from "../hooks/useTheme";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import useAuth from "../hooks/useAuth";
import LoginButton from "./LoginButton";
import AccountMenu from "./AccountMenu";
import { useCallback } from "react";
import useStats from "../hooks/useStats";
export default function Navbar() {

  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const { Track } = useStats();

  const Toggle = useCallback(() => {
    Track("theme.button");
    toggleTheme();
  }, [toggleTheme, Track]);

  return (
    <Paper sx={{ width: "100%" }} elevation={5} m={1}>
      <Grid2 container justifyContent={"space-between"} py={1} px={2}>
        <Grid2>
          <Typography variant="h6">App</Typography>
        </Grid2>
        <Grid2 container>
          <ButtonGroup>
            <Button variant="contained" color="primary" id="button.home">
              Home
            </Button>
            <Button variant="contained" color="primary" id="button.about">
              About
            </Button>
            <Button variant="contained" color="primary" id="button.contact">
              Contact
            </Button>
          </ButtonGroup>
          <IconButton onClick={Toggle} id="theme.button">
            {theme !== "light" ? <LightMode /> : <DarkMode />}
          </IconButton>
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <AccountMenu />}
        </Grid2>
      </Grid2>
    </Paper>
  );
}
