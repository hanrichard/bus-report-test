import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './Footer';

describe('Footer', () => {
  test('renders footer', () => {
    const { getByText } = render(<Footer />);

    const footerElement = getByText(/Transport for NSW/i);
    expect(footerElement).toBeInTheDocument();
  });
})