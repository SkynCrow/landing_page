import { Container } from "@mui/material";
import useAuth from "../hooks/useAuth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function GlobalRoute() {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
    {isAuthenticated ? <PrivateRoute /> : <PublicRoute />}
    </Container>
  )
}
