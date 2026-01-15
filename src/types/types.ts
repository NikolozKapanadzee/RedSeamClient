import type { ChangeEvent } from "react";

export interface InputProps {
  label?: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
}
