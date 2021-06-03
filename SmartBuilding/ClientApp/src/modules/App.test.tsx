import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render the title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Basic React App')).toBeInTheDocument();
});
