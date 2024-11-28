import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) 
    return children;
  else
   return null
}
