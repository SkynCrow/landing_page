import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import propTypes from "prop-types";
import CustomThemeContext from "../contexts/CustomThemeContext";
import { useMediaQuery } from "@mui/material";

CustomThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default function CustomThemeProvider({ children }) {
  const [theme_mode, setTheme] = useState("dark");
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: theme_mode,
      },
    });
  }, [theme_mode]);
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));
  const [breakpoint, setBreakpoint] = useState(("xs"));
  const [breakpointIndex, setBreakpointIndex] = useState(0);
  useEffect(() => {
    if (isXs){
      setBreakpoint("xs");
      setBreakpointIndex(0);
    };
    if (isSm){
      setBreakpoint("sm");
      setBreakpointIndex(1);
    };
    if (isMd){
      setBreakpoint("md");
      setBreakpointIndex(2);
    };
    if (isLg){
      setBreakpoint("lg");
      setBreakpointIndex(3);
    };
    if (isXl){
      setBreakpoint("xl");
      setBreakpointIndex(4);
    };
  }, [isXs, isSm, isMd, isLg, isXl]);

  const toggleTheme = () => {
    console.log("toggleTheme", theme_mode);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <CustomThemeContext.Provider value={{ theme: theme_mode, toggleTheme,breakpoint,breakpointIndex }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
