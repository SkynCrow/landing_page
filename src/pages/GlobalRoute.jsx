import useAuth from "../hooks/useAuth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function GlobalRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <PrivateRoute />;
  else return <PublicRoute />;
}
