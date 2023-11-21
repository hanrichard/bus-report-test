import React from 'react';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { busReportsHandler } from '../apis/mocks';
import { mswServer } from '../setupTests';
import { render } from '../test/test-utils';
import { Home } from './Home';

test('renders Home page', async () => {
  mswServer.use(...busReportsHandler)
  await render(<Home />);

  expect(await screen.findByText('Bus Reports')).toBeInTheDocument()
});
