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

  return (
    <Grid2
      container
      component={Paper}
      px={2}
      py={1}
      mt={1}
      width={"80%"}
      position={"sticky"}
      top={0}
      justifyContent={"space-between"}
    >
      <Grid2>
        <Typography variant="h4">Navbar</Typography>
      </Grid2>
      <Grid2 container gap={3}>
        <ButtonGroup size="small" aria-label="Small button group">
          <Button variant="outlined" color="primary" id="button.home" fontSize={"inherit"}>
            Home
          </Button>
          <Button variant="outlined" color="primary" id="button.about" fontSize={"inherit"}>
            About
          </Button>
          <Button variant="outlined" color="primary" id="button.contact" fontSize={"inherit"}>
            Contact
          </Button>
        </ButtonGroup>
        
        <AccountMenu />
      </Grid2>
    </Grid2>
  );
}
