import type { InputHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-semibold text-slte-500">{label}</label>}
      <input {...props} className={`w-full ${props.className}`} />
    </div>
  );
}
