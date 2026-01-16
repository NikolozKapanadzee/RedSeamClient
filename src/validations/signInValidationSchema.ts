import * as yup from "yup";

export const SignInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is  required")
    .email("Invalid email format.")
    .min(3),
  password: yup.string().required("passowrd is  required"),
});
