import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "eq inline-block whitespace-nowrap  rounded-md border px-6 py-2 text-center text-lg disabled:cursor-default disabled:border-gray disabled:bg-gray disabled:text-black",
  {
    variants: {
      variant: {
        primary:
          "bg-dark text-white border-dark hover:bg-dark/90 hover:border-dark/90",
        secondary: "bg-blue text-white border-blue  hover:bg-blue/90 ",
        danger:
          "bg-red text-white border-red hover:bg-red/90 hover:border-red/90",
        outline:
          "bg-transparent text-white border-blue hover:bg-blue hover:text-white",
        lighting:
          "bg-transparent text-light  border-light hover:bg-dark/70 hover:text-white",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  variant,
  size,
  isLoading,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        buttonVariants({ variant, size }),
        isLoading && "flex items-center justify-center gap-2.5"
      )}
    >
      {isLoading && <Loader2 size={20} className='animate-spin' />}
      {children}
    </button>
  );
};

export default Button;
