import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

const buttonStyles = cva(
  'px-4 py-2 font-semibold rounded',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white border border-black hover:bg-transparent hover:text-black',
        secondary: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
        destructive: 'bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:text-white',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    }
  }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles> & {
};

export const Button: FC<ButtonProps> = ({ className, variant, size, ...props}) => {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      {...props}
    >{props.children}</button>
  );
}

