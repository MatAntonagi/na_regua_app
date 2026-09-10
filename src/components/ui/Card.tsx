interface CardProps {
  variant?: "dark" | "light";
  className?: string;
  children: React.ReactNode;
}

export function Card({ children, variant = "light", className }: CardProps) {
  const variants = {
    dark: "bg-ink p-[22px] rounded-lg",
    light: "bg-paper p-4 rounded-[14px] border border-border",
  };
  return <div className={` ${variants[variant]} ${className}`}>{children}</div>;
}
