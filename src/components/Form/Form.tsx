import React, { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import Button from '../Button';
import { FormProps, InputProps } from './types';
import styles from './Form.module.scss';

export default function Form({
	className,
	title,
	fields = [],
}: FormProps): JSX.Element {
	const [state, setState] = useState(
		fields.reduce(
			(a: Object, { name, value }: InputProps) =>
				Object.assign(a, { [name as string]: [value] }),
			{}
		)
	);

	return (
		<form className={clsx(styles.form, className)}>
			{title ? <h2>{title}</h2> : null}

			{fields.map((input) => (
				<label key={input.name} className={styles.field}>
					<input {...input} className={clsx(styles.input, input.className)} />
				</label>
			))}

			<Button type="submit" label="Сохранить" variant="primary" />
		</form>
	);
}
