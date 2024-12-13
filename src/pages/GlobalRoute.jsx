import { Grid2 } from "@mui/material";
import useAuth from "../hooks/useAuth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Navbar from "../components/Navbar";
import FloatingDebug from "../components/FloatingDebug";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useStats from "../hooks/useStats";

export default function GlobalRoute() {
  const { isAuthenticated } = useAuth();
  const { Register } = useStats();
  const location = useLocation();

  useEffect(() => {
    Register({
      type: "location",
      location: location.pathname,
    });
  }, [location]);

  return (
    <Grid2 container direction={"column"}  justifyContent={"center"} alignItems={"center"} gap={3}>

      <Navbar />
      {!isAuthenticated && (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      )}
      {isAuthenticated && (
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      )}
      <FloatingDebug />
    </Grid2>
  );
}
