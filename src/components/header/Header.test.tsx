import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './Header';

describe('Header', () => {
  test('renders Header', () => {
    const { getByText } = render(<Header />);

    const headerElement = getByText(/header/i);
    expect(headerElement).toBeInTheDocument();
  });
})