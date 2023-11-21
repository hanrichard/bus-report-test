import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Note } from './Note';

describe('Note', () => {
  test('renders Note', async () => {
    const { queryByRole } = render(<Note organisation='test' />);
    const button = await queryByRole('button', { name: /Save Notes/i });

    expect(await button).toBeInTheDocument();
  });
})