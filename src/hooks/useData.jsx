import { useContext } from "react";
import  DataContext  from "../contexts/DataContext";

export default function useData() {
  return useContext(DataContext);
}
