import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-medium transition-colors duration-200";

  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800",

    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}