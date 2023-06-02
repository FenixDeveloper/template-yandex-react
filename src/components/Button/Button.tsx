import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './types';
import styles from './Button.module.scss';

export default function Button({
	className,
	type = 'button',
	children,
	label,
	variant = 'text',
	...props
}: ButtonProps): JSX.Element {
	return (
		<button
			{...props}
			type={type}
			className={clsx(styles.button, className, {
				[styles.text]: variant === 'text',
				[styles.outlined]: variant === 'outlined',
				[styles.primary]: variant === 'primary',
				[styles.secondary]: variant === 'secondary',
			})}
		>
			{children ?? label}
		</button>
	);
}
