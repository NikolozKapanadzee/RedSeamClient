import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="pages/auth/register" element={<Register />} />
          <Route path="pages/auth/login" element={<Login />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
