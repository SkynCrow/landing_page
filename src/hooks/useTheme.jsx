import { useContext } from "react";
import { CustomThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  return useContext(CustomThemeContext);
}
