import React, { useState, useCallback, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { ModalProps } from './types';
import styles from './Modal.module.scss';

export default function Modal({
	className,
	modalClassName,
	children,
	active = true,
	portal = true,
	up = true,
	closeIcon = true,
	onClose,
}: ModalProps): JSX.Element | null {
	if (!active) return null;

	const modal = (
		<div className={clsx(styles.modal, modalClassName)}>
			<div
				className={clsx(styles.container, className, {
					[styles.up]: !!up,
				})}
			>
				{closeIcon && onClose ? (
					<button
						className={clsx('icon-xmark-solid', styles.close)}
						onClick={onClose as MouseEventHandler}
						aria-label="close"
					/>
				) : null}

				{children}
			</div>
		</div>
	);

	return portal ? createPortal(modal, document.body) : modal;
}
