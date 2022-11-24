import { ReactNode } from "react";

type Props = {
  label: string;
  customLabelClass?: string;
  children: ReactNode;
};

export function Field({ label, customLabelClass, children }: Props) {
  return (
    <div className="mt-6">
      <label
        className={`${
          customLabelClass ? customLabelClass : "text-gray-900"
        } mb-2`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
