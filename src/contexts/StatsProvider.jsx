import propTypes from "prop-types";
import {useCallback, useEffect, useState } from "react";
import StatsContext from "./StatsContext";

StatsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

function StatsProvider({ children }) {

  const [clicks, setClicks] = useState(0);
  const Track = useCallback((id) => {
    console.log("StatsProvider rendered",id);
  }, []);

  function handleClick(e) {
    if (e.target.id)
    {
      console.log(e.target.id)
      setClicks((clicks) => clicks + 1);
    }
    console.log({
      x: e.clientX,
      y: e.clientY,
      id: e.target.id,
      location: window.location.href,
      timestamp : Date.now(),
    })
  }
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, []);
  
  return (
    <StatsContext.Provider value={{clicks,Track}} >
      {children}
    </StatsContext.Provider>
  );
}

export default StatsProvider;

