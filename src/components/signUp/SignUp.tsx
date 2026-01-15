import { useState } from "react";
import Input from "../input/Input";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

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
      <form className="flex flex-col gap-12 max-w-138 w-full">
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

        <Input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

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

        <Input
          required
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          showTogglePassword
          onTogglePassword={() => setShowPassword((prev) => !prev)}
        />
      </form>
    </>
  );
}

export default SignUp;
