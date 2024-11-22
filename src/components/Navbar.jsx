import { Button, ButtonGroup, Grid2, Paper, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import useTheme from "../hooks/useTheme";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Paper sx={{ width: "100%", height: "200px" }} elevation={5} m={1}>
      <Grid2 container justifyContent={"space-between"}>
        <Grid2>
          <Typography variant="h4">Context App</Typography>
        </Grid2>
        <Grid2 container>
          <ButtonGroup>
            <Button variant="contained" color="primary">
              Home
            </Button>
            <Button variant="contained" color="primary">
              About
            </Button>
            <Button variant="contained" color="primary">
              Contact
            </Button>
          </ButtonGroup>
          <IconButton onClick={toggleTheme}>
            {theme !== "light" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
