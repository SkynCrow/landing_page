import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import propTypes from "prop-types";
import CustomThemeContext from "../contexts/CustomThemeContext";

CustomThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const themeConfig = useMemo(() => {
    return createTheme({
      palette: {
        mode: theme,
      },
    });
  }, [theme]);

  const toggleTheme = () => {
    console.log("toggleTheme", theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
