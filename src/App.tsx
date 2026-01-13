import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Register from "./(pages)/auth/register/Register";
import Login from "./(pages)/auth/login/Login";
import Listing from "./(pages)/listing/Listing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="/" element={<Listing />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
