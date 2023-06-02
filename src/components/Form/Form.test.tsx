import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders hello', () => {
	render(<Form fields={[{ name: 'test', value: 'Form' }]} />);
	const element = screen.getByText(/Form/i);
	expect(element).toBeInTheDocument();
});
