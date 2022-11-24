import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function Button({ title, ...props }: Props) {
  return <button {...props}>{title}</button>;
}
