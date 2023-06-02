import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import Form from './Form';

const meta: Meta<typeof Form> = {
	title: 'UI/Form',
	component: Form,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Form>;
type Case = StoryFn<typeof Form>;

export const Default: Story = {
	args: {
		title: 'Example 1',
		fields: [
			{
				name: 'name',
				type: 'text',
				value: 'first input',
			},
			{
				name: 'name',
				type: 'number',
				value: 20,
			},
		],
	},
};

/*	
export const Variants: Case = (props) => (<div className="storybook-case-wrapper">
	<Form {...props} />
</div>);
*/
