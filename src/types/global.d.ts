import React, { MouseEventHandler } from 'react';

declare global {
	type ReactChildren = React.ReactNode;

	type BaseProps = {
		className?: string;
	};

	interface Clickable {
		onClick: MouseEventHandler | Function;
	}
}

export {};
