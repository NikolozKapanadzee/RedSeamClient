import { forwardRef } from "react";
import { Eye } from "lucide-react";
import type { InputProps } from "../../types/types";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = "text",
    placeholder,
    required = false,
    showTogglePassword = false,
    onTogglePassword,
    className,
    ...restProps
  } = props;

  return (
    <div className="w-full">
      <div className="relative">
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`
              peer border border-gray-300 outline-none px-3 text-[14px] text-[#3E424A] font-poppins font-medium py-[10.5px] w-full rounded-lg placeholder:text-[#3E424A] placeholder:font-poppins placeholder:font-light
              ${className ?? ""}
            `}
          {...restProps}
        />

        {required && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#3E424A] text-sm">
            {placeholder}
            <span className="text-red-500 ml-0.5">*</span>
          </span>
        )}

        {showTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            <Eye size={18} />
          </button>
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
