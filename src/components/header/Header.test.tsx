import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Header } from './Header';

describe('Header', () => {
  test('renders Header', () => {
    const { getByAltText } = render(<Header />);

    const headerElement = getByAltText(/transportnsw.info/i);
    expect(headerElement).toBeInTheDocument();
  });
})