import { createContext } from "react";
import StatsProvider from "../providers/StatsProvider";
const StatsContext = createContext(StatsProvider);
export default StatsContext;