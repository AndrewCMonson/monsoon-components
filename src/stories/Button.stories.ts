import { Button } from '@/components/Button/Button.jsx';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Sets the button style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Sets the size of the button',
    },
    children: {
      control: 'text',
      description: 'Content inside the button',
    },
    onClick: { action: 'clicked', description: 'Event handler for button click' },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    children: 'Secondary Button',
  }
};

export const SmallPrimary: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Primary',
  }
};


export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Disabled Button',
    disabled: true,
  }
};