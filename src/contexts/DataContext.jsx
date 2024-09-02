import { useState } from "react";
import { createContext } from "react";
import propTypes from "prop-types";

export const DataContext = createContext(DataProvider);
export function DataProvider({ children }) {
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
