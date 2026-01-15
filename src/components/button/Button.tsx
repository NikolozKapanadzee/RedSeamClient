import type { ButtonProps } from "../../types/types";
export default function Button({
  text,
  icon: Icon,
  imgSrc,
  className = "",
  pTagStyle,
  iconStyle,
  isSelected = false,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
        ${className}
        ${isSelected ? "bg-[#E3E8EF]" : ""}
      `}
    >
      {Icon && <Icon className={iconStyle} />}
      {imgSrc && <img src={imgSrc} alt="button icon" />}
      {text && <p className={pTagStyle}>{text}</p>}
    </button>
  );
}
