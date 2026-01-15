import authImg from "../../../assets/images/authImage.svg";
import SignUp from "../../../components/signUp/SignUp";

function Register() {
  return (
    <>
      <div className="flex items-center min-h-screen">
        <img
          src={authImg}
          alt="auth_image"
          className="w-1/2 h-screen object-cover"
        />
        <div className="w-1/2 flex justify-center items-center px-8">
          <SignUp />
        </div>
      </div>
    </>
  );
}
export default Register;
