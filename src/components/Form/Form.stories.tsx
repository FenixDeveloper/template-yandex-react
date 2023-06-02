import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import Form from './Form';

const meta: Meta<typeof Form> = {
	title: 'UI/Form',
	component: Form,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		title: 'Example 1',
		fields: {
			age: { type: 'number' },
		},
		value: {
			name: 'Test',
			age: 23,
		},
		onSubmit: (data) => console.log(data),
	},
};

export default meta;
type Story = StoryObj<typeof Form>;
type Case = StoryFn<typeof Form>;

export const Default: Story = {
	args: {},
};
