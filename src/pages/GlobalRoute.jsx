import { Container } from "@mui/material";
import useAuth from "../hooks/useAuth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PropTypes from "prop-types";

GlobalRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function GlobalRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated)
    return (
      <Container>
        <PrivateRoute>{children}</PrivateRoute>
      </Container>
    );
  else
    return (
      <Container>
        <PublicRoute>{children}</PublicRoute>
      </Container>
    );
}
