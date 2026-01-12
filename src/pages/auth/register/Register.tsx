import { Link } from "react-router";

function Register() {
  return (
    <>
      <h1>Register Page</h1>
      <Link className="text-red-500" to="/pages/auth/login">
        Log In Page
      </Link>
    </>
  );
}
export default Register;
