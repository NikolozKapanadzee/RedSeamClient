import { Link } from "react-router";

function Listing() {
  return (
    <>
      <h1>Listing Page</h1>
      <Link className="text-red-500" to="auth/login">
        Log In Page
      </Link>
      <Link className="text-red-500" to="auth/register">
        Register Page
      </Link>
    </>
  );
}
export default Listing;
