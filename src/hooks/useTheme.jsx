import { useContext } from "react";
import  CustomThemeContext  from "../contexts/CustomThemeContext";

export default function useTheme() {
  return useContext(CustomThemeContext);
}
