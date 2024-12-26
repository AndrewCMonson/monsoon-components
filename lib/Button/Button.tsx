import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const buttonStyles = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition ease-in-out delay-75 hover:-translate-y-0.5 hover:scale-105 active:scale-95 active:-translate-y-0.5',
	{
		variants: {
			variant: {
				primary:
					'bg-primary text-secondary border border-primary ',
				secondary:
					'bg-transparent text-primary border border-primary',
				accent:
					'bg-accent text-secondary border border-accent',
				warning: 
					'bg-warning text-secondary border border-warning',
			},
			size: {
				small: 'h-7 rounded-md px-2',
				medium: 'h-9 rounded-md px-3',
				large: 'h-11 rounded-md px-4 text-lg',
				icon: 'h-9 w-9 rounded-md',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'medium',
		},
	}
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonStyles> {
		asChild?: boolean;
	};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={(buttonStyles({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = 'Button';
