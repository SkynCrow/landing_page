import { Route, BrowserRouter, Routes } from "react-router-dom";
import GlobalRoute from "./pages/GlobalRoute";
import AuthProvider from "./providers/AuthProvider";
import DataProvider from "./providers/DataProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import StatsProvider from "./providers/StatsProvider";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
function App() {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <DataProvider>
          <StatsProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<GlobalRoute />}>
                  <Route index element={<Home />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="about" element={<h1>About and Contact</h1>} />
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
