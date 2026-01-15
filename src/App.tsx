import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Register from "./(pages)/auth/register/Register";
import Login from "./(pages)/auth/login/Login";
import Listing from "./(pages)/listing/Listing";
import Header from "./components/header/Header";
import SignUp from "./components/signUp/SignUp";
import authImg from "./assets/images/authImage.svg";
import Input from "./components/input/Input";
import SignIn from "./components/signIn/SignIn";
function App() {
  return (
    <>
      <Header />
      <div className="flex items-center min-h-screen">
        <img
          src={authImg}
          alt="auth_image"
          className="w-1/2 h-screen object-cover"
        />
        <div className="w-1/2 flex justify-center items-center px-8">
          {/* <SignUp /> */}
          <SignIn />
        </div>
      </div>
      {/* <Router>
        <Routes>
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="/" element={<Listing />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
