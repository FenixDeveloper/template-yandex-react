import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type FormProps = {
	className?: string;
	title?: string;
	fields: InputProps[];
};
