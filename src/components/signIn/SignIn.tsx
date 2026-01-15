import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { Link } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <form className="flex flex-col gap-8 max-w-138 w-full">
        <h1 className="text-[42px] font-poppins font-semibold text-[#10151F]">
          Log in
        </h1>
        <Input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <Input
          required
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          showTogglePassword
          onTogglePassword={() => setShowPassword((prev) => !prev)}
        />
        <Button
          className="w-full rounded-[10px] bg-[#FF4000] py-2.5 text-[14px] text-white font-poppins font-normal mt-5.5"
          text="Log in"
        />
        <p className="text-[14px] text-[#3E424A] font-poppins font-normal w-full text-center">
          Not a member?
          <Link to="/auth/register">
            <span className="pl-2 text-[#FF4000] text-[14px] font-poppins font-medium cursor-pointer">
              Register
            </span>
          </Link>
        </p>
      </form>
    </>
  );
}
export default SignIn;
