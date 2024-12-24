import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";

import { LoginPage, Room , RegisterPage} from "./Pages/index";

function App() {
  return (
    <Router>
      <AuthProvider>
        
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Private Routes ensure Protected Pages i.e. with out Authentication u can,t access the pages */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Room />} />
          </Route>
        </Routes>

      </AuthProvider>
    </Router>
  );
}

export default App;
