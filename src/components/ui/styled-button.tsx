type ButtonProps = {
  variant: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function AuthButton({
  variant,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-body-1 px-10 py-[0.6rem] border rounded-full cursor-pointer";

  const styles: Record<ButtonProps["variant"], string> = {
    primary: "text-white bg-brown-600 border-brown-600 hover:bg-brown-500",
    outline: "text-brown-600 bg-white border-brown-400 hover:bg-brown-200",
  };

  return (
    <button
      type="button"
      className={`${base} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
