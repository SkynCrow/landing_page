import {
  Button,
  ButtonGroup,
  Grid2,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { IconButton } from "@mui/material";
import useTheme from "../hooks/useTheme";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import useAuth from "../hooks/useAuth";
import LoginButton from "./LoginButton";
import AccountMenu from "./AccountMenu";
import { useCallback } from "react";
import useStats from "../hooks/useStats";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navegate = useNavigate();
  const location = useLocation();
  const buttons = [
    {
      id: "button.home",
      text: "Inicio",
      url: "/",
    },
    {
      id: "button.proyects",
      text: "Proyectos",
      url: "/projects",
    },
    {
      id: "button.contact",
      text: "Contacto",
      url: "/about",
    },
  ];
  const { isAuthenticated } = useAuth();
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
        <Typography variant="h4" fontWeight={"bold"}>
          {location.pathname == "/" ? "Bienvenido" : "Proyectos"}
        </Typography>
      </Grid2>
      <Grid2 container gap={3}>
        <ButtonGroup size="small" aria-label="Small button group">
          {buttons.map((button) => (
            <Button
              key={button.id}
              onClick={() => {
                navegate(button.url);
              }}
            >
              {button.text}
            </Button>
          ))}
        </ButtonGroup>

        <AccountMenu />
      </Grid2>
    </Grid2>
  );
}
