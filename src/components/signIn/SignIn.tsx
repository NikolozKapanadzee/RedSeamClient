import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInValidationSchema } from "../../validations/signInValidationSchema";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignInValidationSchema) });

  const onSubmit = (data: any) => {
    console.log("Data:", data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 max-w-138 w-full"
      >
        <h1 className="text-[42px] font-poppins font-semibold text-[#10151F]">
          Log in
        </h1>

        <div className="flex flex-col gap-1">
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message as string}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            showTogglePassword
            onTogglePassword={() => setShowPassword((prev) => !prev)}
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message as string}
            </span>
          )}
        </div>
        <Button
          className="w-full rounded-[10px] bg-[#FF4000] py-2.5 text-[14px] text-white font-poppins font-normal mt-5.5"
          text="Log in"
          type="submit"
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
