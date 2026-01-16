import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpValidationSchema } from "../../validations/signUpValidationSchema";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpValidationSchema) });

  const onSubmit = (data: any) => {
    console.log("Data:", data);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    const fileInput = document.getElementById(
      "profile-upload"
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 max-w-138 w-full"
      >
        <h1 className="text-[42px] font-poppins font-semibold text-[#10151F]">
          Registration
        </h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <label
              htmlFor="profile-upload"
              className="cursor-pointer text-[#3E424A] font-poppins text-sm hover:text-black transition-colors"
            >
              Upload new
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            {profileImage && (
              <>
                <span className="text-gray-300">|</span>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="text-[#3E424A] font-poppins text-sm hover:text-red-500 transition-colors"
                >
                  Remove
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Input type="text" placeholder="Username" {...register("username")} />
          {errors.username && (
            <span className="text-red-500 text-sm">
              {errors.username.message as string}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input placeholder="Email" type="email" {...register("email")} />
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

        <div className="flex flex-col gap-1">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            showTogglePassword
            onTogglePassword={() => setShowPassword((prev) => !prev)}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword.message as string}
            </span>
          )}
        </div>

        <Button
          className="w-full rounded-[10px] bg-[#FF4000] py-2.5 text-[14px] text-white font-poppins font-normal mt-5.5"
          text="Register"
          type="submit"
        />
        <p className="text-[14px] text-[#3E424A] font-poppins font-normal w-full text-center">
          Already member?
          <Link to="/auth/login">
            <span className="pl-2 text-[#FF4000] text-[14px] font-poppins font-medium cursor-pointer">
              Log in
            </span>
          </Link>
        </p>
      </form>
    </>
  );
}

export default SignUp;
