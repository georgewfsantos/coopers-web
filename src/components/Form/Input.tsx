import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  borderColor: string;
};

export function Input({ borderColor, className, ...props }: Props) {
  return (
    <input
      className={`w-full h-[50px] border focus:outline-gray-500 border-${borderColor} px-4 rounded-[4px]`}
      {...props}
    />
  );
}
