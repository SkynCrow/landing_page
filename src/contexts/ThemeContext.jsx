import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

CustomThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const CustomThemeContext = createContext(CustomThemeProvider);

export function CustomThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const themeConfig = useMemo(() => {
        return createTheme({
          palette: {
            mode: theme,
          },
        });
      }, [theme]);

  const toggleTheme = () => {
    console.log("toggleTheme",theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
