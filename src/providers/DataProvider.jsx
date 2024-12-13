import { useState } from "react";
import propTypes from "prop-types";
import DataContext from "../contexts/DataContext";
import PropTypes from "prop-types";

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const saveData = (data) => {
    setData(data);
  };

  const clearData = () => {
    setData(null);
  };

  return (
    <DataContext.Provider value={{ data, saveData, clearData, setToken }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: propTypes.node.isRequired,
};
