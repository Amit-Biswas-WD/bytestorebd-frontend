import { cn } from "@/lib/utils";
import { Input, InputProps } from "./input";

interface InputFieldProps extends InputProps {
  label?: string;
  required?: boolean;
  error?: string;
}

export function InputField({
  label,
  required,
  error,
  id,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-[#171717]">
          {label}
          {required && <span className="ml-1 text-[#DC2626]">*</span>}
        </label>
      )}

      <Input
        id={id}
        className={cn("rounded-lg text-black font-normal mt-2", className)}
        {...props}
      />

      {error && <p className="text-xs font-normal text-[#DC2626]">{error}</p>}
    </div>
  );
}
