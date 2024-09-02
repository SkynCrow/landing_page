import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import GlobalRoute from "./pages/GlobalRoute";
import Login from "./pages/Login";
function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<GlobalRoute />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
