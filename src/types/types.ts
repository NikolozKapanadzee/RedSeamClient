import type { LucideIcon } from "lucide-react";

export interface InputProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  showTogglePassword?: boolean;
  onTogglePassword?: () => void;
  className?: string;
}
export interface ButtonProps {
  text?: string;
  icon?: LucideIcon | React.ComponentType<any>;
  imgSrc?: string;
  className?: string;
  pTagStyle?: string;
  iconStyle?: string;
  isSelected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
