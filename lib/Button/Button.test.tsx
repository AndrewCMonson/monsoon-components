import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
	it('renders with default props', () => {
		render(<Button>Default Button</Button>);
		const button = screen.getByRole('button', { name: /default button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-black text-white border border-black hover:bg-transparent hover:text-black text-base'
		);
	});

	it('renders with primary variant', () => {
		render(<Button variant="primary">Primary Button</Button>);
		const button = screen.getByRole('button', { name: /primary button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-black text-white border border-black hover:bg-transparent hover:text-black'
		);
	});

	it('renders with secondary variant', () => {
		render(<Button variant="secondary">Secondary Button</Button>);
		const button = screen.getByRole('button', { name: /secondary button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-transparent text-black border border-black hover:bg-black hover:text-white'
		);
	});

	it('renders with warning variant', () => {
		render(<Button variant="warning">Destructive Button</Button>);
		const button = screen.getByRole('button', { name: /destructive button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:text-white'
		);
	});
	it('renders with accent variant', () => {
		render(<Button variant="accent">Accent Button</Button>);
		const button = screen.getByRole('button', { name: /accent button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-accent text-white border border-accent hover:bg-accent-dark hover:text-white'
		);
	});
	it('renders with small size', () => {
		render(<Button size="small">Small Button</Button>);
		const button = screen.getByRole('button', { name: /small button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('text-sm');
	});

	it('renders with medium size', () => {
		render(<Button size="medium">Medium Button</Button>);
		const button = screen.getByRole('button', { name: /medium button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('text-base');
	});

	it('renders with large size', () => {
		render(<Button size="large">Large Button</Button>);
		const button = screen.getByRole('button', { name: /large button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('text-lg');
	});

	it('applies additional class names', () => {
		render(<Button className="extra-class">Button with Extra Class</Button>);
		const button = screen.getByRole('button', {
			name: /button with extra class/i,
		});
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('extra-class');
	});
});
