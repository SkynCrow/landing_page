import { createContext } from "react";
import DataProvider from "../providers/DataProvider";
const DataContext = createContext(DataProvider);
export default DataContext;