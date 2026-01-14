import { Link } from "react-router";

function Login() {
  return (
    <>
      <h1>Login Page</h1>
      <Link className="text-red-500" to="/auth/register">
        Register Page
      </Link>
    </>
  );
}
export default Login;
