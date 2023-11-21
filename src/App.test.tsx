import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('renders app', () => {
  const { getByText } = render(<App />);

  const logoElement = getByText(/home/i);
  expect(logoElement).toBeInTheDocument();
});