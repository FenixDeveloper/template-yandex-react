import { MouseEventHandler } from 'react';

export type ButtonProps = {
	className?: string;
	type?: 'button' | 'submit';
	children?: ReactChildren;
	label?: ReactChildren;
	variant?: 'text' | 'outlined' | 'primary' | 'secondary';
	onClick?: MouseEventHandler;
	disabled?: boolean;
};
