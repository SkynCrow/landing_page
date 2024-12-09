import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default function PrivateRoute({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
