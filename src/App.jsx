import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import GlobalRoute from "./pages/GlobalRoute";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import StatsProvider from "./contexts/StatsProvider";
function App() {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <DataProvider>
          <StatsProvider>
            <BrowserRouter>
              <Routes>
                <Route index path="/" element={<GlobalRoute />} />
              </Routes>
            </BrowserRouter>
          </StatsProvider>
        </DataProvider>
      </AuthProvider>
    </CustomThemeProvider>
  );
}

export default App;
