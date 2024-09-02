import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return children;
  }
}
