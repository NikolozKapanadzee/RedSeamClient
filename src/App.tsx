import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Register from "./(pages)/auth/register/Register";
import Login from "./(pages)/auth/login/Login";
import Listing from "./(pages)/listing/Listing";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
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
