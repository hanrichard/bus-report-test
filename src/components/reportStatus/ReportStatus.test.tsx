import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ReportStatus } from './ReportStatus';

describe('ReportStatus', () => {
  test('renders ReportStatus on time', async () => {
    const { getByText } = render(<ReportStatus deviationFromTimetable={50} />);
    const value = await getByText(/On Time/i);
    expect(await value).toBeInTheDocument();
  });


  test('renders ReportStatus on time', async () => {
    const { getByText } = render(<ReportStatus deviationFromTimetable={-50} />);
    const value = await getByText(/Early/i);
    expect(await value).toBeInTheDocument();
  });


  test('renders ReportStatus on time', async () => {
    const { getByText } = render(<ReportStatus deviationFromTimetable={150} />);
    const value = await getByText(/Late/i);
    expect(await value).toBeInTheDocument();
  });
})