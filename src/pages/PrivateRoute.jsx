import { Grid2 } from "@mui/material";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default function PrivateRoute({ children }) {
  return (
    <Grid2 container width={"100%"} justifyContent={"center"} alignItems={"center"} alignContent={"center"} direction={"column"}>
      {children}
    </Grid2>
  );
}
