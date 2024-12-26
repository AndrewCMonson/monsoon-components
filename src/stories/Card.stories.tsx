import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../lib/Card/Card.js';

const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<Card className="">
					<CardHeader>Card Header</CardHeader>
					<CardContent>Card Body</CardContent>
					<CardFooter>Card Footer</CardFooter>
				</Card>
			</>
		),
	},
};

export const WithTitle: Story = {
  args: {
    children: (
      <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      </>
    )
  }
}