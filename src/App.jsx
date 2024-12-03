import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import GlobalRoute from "./pages/GlobalRoute";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import StatsProvider from "./contexts/StatsProvider";
import Proyects from "./pages/Proyects";
function App() {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <DataProvider>
          <StatsProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<GlobalRoute />}>
                  <Route index element={<h1>Home</h1>} />
                  <Route path="about" element={<h1>About</h1>} />
                  <Route path="contact" element={<h1>Contact</h1>} />
                  <Route path="projects" element={<Proyects/>} />
                </Route>
              </Routes>
            </BrowserRouter>
          </StatsProvider>
        </DataProvider>
      </AuthProvider>
    </CustomThemeProvider>
  );
}

export default App;
