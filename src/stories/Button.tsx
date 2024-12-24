import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

const buttonStyles = cva('px-4 py-2 font-semibold rounded', {
	variants: {
		variant: {
			primary: 'bg-blue-500 text-white',
			secondary: 'bg-gray-300 text-gray-800',
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
	},
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonStyles>;

export const Button: FC<ButtonProps> = ({
	className,
	variant,
	size,
	...props
}) => {
	return (
		<button className={buttonStyles({ variant, size, className })} {...props}>
			{props.children}
		</button>
	);
};
