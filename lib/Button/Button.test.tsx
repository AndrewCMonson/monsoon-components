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
			'bg-primary text-secondary border border-primary'
		);
	});

	it('renders with primary variant', () => {
		render(<Button variant="primary">Primary Button</Button>);
		const button = screen.getByRole('button', { name: /primary button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-primary text-secondary border border-primary'
		);
	});

	it('renders with secondary variant', () => {
		render(<Button variant="secondary">Secondary Button</Button>);
		const button = screen.getByRole('button', { name: /secondary button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-transparent text-primary border border-primary'
		);
	});

	it('renders with warning variant', () => {
		render(<Button variant="warning">Destructive Button</Button>);
		const button = screen.getByRole('button', { name: /destructive button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-warning text-secondary border border-warning'
		);
	});
	it('renders with accent variant', () => {
		render(<Button variant="accent">Accent Button</Button>);
		const button = screen.getByRole('button', { name: /accent button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('bg-accent text-secondary border border-accent');
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
		expect(button).toHaveClass('h-9 rounded-md px-3');
	});

	it('renders with large size', () => {
		render(<Button size="large">Large Button</Button>);
		const button = screen.getByRole('button', { name: /large button/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('h-11 rounded-md px-4');
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
