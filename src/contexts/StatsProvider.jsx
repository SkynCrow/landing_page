// #region Imports
import propTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import StatsContext from "./StatsContext";
import useAuth from "../hooks/useAuth";
import { GetOrientation } from "../tools";
StatsProvider.propTypes = {
  children: propTypes.node.isRequired,
};
// #endregion

/**
 * Proveedor de contexto para estadísticas de la aplicación.
 */
function StatsProvider({ children }) {
  // #region Variables
  const { isAuthenticated } = useAuth();
  const [location, setLocation] = useState(window.location.href);
  const [orientation, setOrientation] = useState(GetOrientation());
  const [clicks] = useState(new Map());
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [lastClick, setLastClick] = useState(null);
  // #endregion

  // #region Functions

  const Track = useCallback((id) => {
    console.log("StatsProvider rendered", id);
  }, []);

  const handleClick = useCallback(
    (e) => {
      let id = Date.now();
      let data = {
        x: e.clientX,
        y: e.clientY,
        id: e.target.id,
        timestamp: id,
      };
      clicks.set(id, data);
      setLastClick(data);
    },
    [clicks]
  );
  const handleResize = useCallback(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
    setOrientation(GetOrientation());
  }, []);
  // #endregion
  // #region Effects


  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  useEffect(() => {
    console.log(orientation);
  }, [orientation]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(windowSize);
    }, 100);
    return () => clearTimeout(timeout);
  }, [windowSize]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleClick, handleResize]);
  // #endregion
  return (
    <StatsContext.Provider value={{ clicks, lastClick, Track }}>
      {children}
    </StatsContext.Provider>
  );
}

export default StatsProvider;
