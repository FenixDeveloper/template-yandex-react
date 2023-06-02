export type ModalProps = {
	className?: string;
	modalClassName?: string;
	children: ReactChildren;
	portal?: boolean;
	up?: boolean;
	active?: boolean;
	closeIcon?: boolean;
	onClose?: Function;
};
