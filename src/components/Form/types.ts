import { InputHTMLAttributes } from 'react';

export type InputValue = string | number | boolean;

export type FieldProps = {
	type: string;
	className?: string;
	inputClassName?: string;
	disabled?: boolean;
	placeholder?: string;
	label?: string;
};

export type InputProps = {
	value: InputValue;
	onChange: (value: InputValue) => void;
} & FieldProps;

export type FormProps = {
	className?: string;
	title?: string;
	fields?: Record<string, FieldProps>;
	value: Record<string, InputValue>;
	onSubmit: (state: Record<string, InputValue>) => void;
};
