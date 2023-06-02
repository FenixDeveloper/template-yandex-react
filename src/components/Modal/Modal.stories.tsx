import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'UI/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		portal: false,
		up: false,
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;
type Case = StoryFn<typeof Modal>;

export const Default: Case = (props) => (
	<div
		className="storybook-case-wrapper"
		style={{
			position: 'relative',
			height: '100%',
		}}
	>
		<Modal {...props}>Modal content</Modal>
	</div>
);
