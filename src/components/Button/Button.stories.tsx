import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		label: 'Button',
	},
};

export default meta;
type Story = StoryObj<typeof Button>;
type Case = StoryFn<typeof Button>;

export const Default: Story = {
	args: {},
};

export const Variants: Case = (props) => (
	<div className="storybook-case-wrapper">
		<Button {...props} variant="text" />
		<Button {...props} variant="outlined" />
		<Button {...props} variant="secondary" />
		<Button {...props} variant="primary" />
	</div>
);
