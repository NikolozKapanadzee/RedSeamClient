import * as yup from "yup";

export const SignUpValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(3),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .min(3),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "password should contain at least 8 symbols")
    .max(20, "password should not be greater than 20 symbols"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "invalid credentials")
    .required("confrim password is required"),
});
