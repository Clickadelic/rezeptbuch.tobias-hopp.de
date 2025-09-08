import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hello } from '../Hello';

// screen gibt es ab v12 von @testing-library/react
import { screen } from '@testing-library/react';

test('zeigt den Namen an', () => {
    render(<Hello name="Tobias" />);
    expect(screen.getByText('Hello, Tobias!')).toBeInTheDocument();
});
