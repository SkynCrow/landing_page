import { useContext } from "react";
import StatsContext from "../contexts/StatsContext";

export default function useStats() {
    return useContext(StatsContext);
}