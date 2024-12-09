// #region Imports
import propTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import StatsContext from "./StatsContext";
import useAuth from "../hooks/useAuth";
import { GetOrientation } from "../tools";
import { PushEvent } from "../../firebase";
import { useLocation } from "react-router-dom";
StatsProvider.propTypes = {
  children: propTypes.node.isRequired,
};
// #endregion

/**
 * Proveedor de contexto para estadísticas de la aplicación.
 */
function StatsProvider({ children }) {
  // #region Variables
  const { isAuthenticated, credentials, sessionID } = useAuth();
  const [inited, setInited] = useState(false);
  const [lastClick, setLastClick] = useState(null);
  const [lastSessionID, setLastSessionID] = useState(null);
  // Variables acotadas
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  // Variables sin acotar
  const [orientation, setOrientation] = useState(GetOrientation());
  // #endregion

  // #region Functions
  const handleClick = useCallback((e) => {
    setLastClick({
      type: "click",
      position: [e.clientX, e.clientY],
      location: window.location.pathname,
      windowSize,
      target: e.target.id || "untagged",
    });
  }, []);
  const handleResize = useCallback(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
    setOrientation(GetOrientation());
  }, []);
  const handleUnload = useCallback(() => {
    console.log("unload");
    if (sessionID) PushEvent(sessionID, {
      type: "unload",
      location: window.location.pathname,
      windowSize,
      orientation,
    });
  }, []);


  const Register = useCallback(
    (data) => {
      if (sessionID) PushEvent(sessionID, data);
    },
    [sessionID]
  );
  // #endregion
  // #region Effects
  useEffect(() => {
    if (isAuthenticated && sessionID && !inited && !localStorage.getItem("statsInited")) {
      PushEvent(sessionID, {
        type: "signin",
        uid: credentials?.uid || "",
        location: location.pathname,
        orientation,
        windowSize,
      });
      localStorage.setItem("statsInited", true);
      setLastSessionID(sessionID);
      setInited(true);
    } else {
      if (inited && lastSessionID) {
        PushEvent(lastSessionID, {
          type: "signout",
          uid: credentials?.uid || "",
          location: location.pathname,
          orientation,
          windowSize,
        });
        setLastSessionID(null);
        setInited(false);
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      Register({
        type: "resize",
        windowSize,
      });
    }, 100);
    return () => clearTimeout(timeout);
  }, [windowSize]);
  
  useEffect(() => {
    Register(lastClick);
  }, [lastClick]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);
    window.addEventListener("beforeunload", handleUnload)
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleClick, handleResize]);

  // #endregion
  return (
    <StatsContext.Provider value={{ lastClick }}>
      {children}
    </StatsContext.Provider>
  );
}

export default StatsProvider;
