import { Input } from "../components/ui/input";

type AuthFieldProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function AuthField({
  id,
  label,
  type = "text",
  autoComplete,
  ...props
}: AuthFieldProps) {
  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor={id} className="text-body-2 text-brown-400">
        {label}
      </label>

      <Input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        className="bg-white border border-brown-300 h-12 text-body-2"
        {...props}
      />
    </div>
  );
}
