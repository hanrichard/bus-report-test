import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Report } from './Report';

describe('Report', () => {
  test('renders Report', async () => {
    const { getByText } = render(<Report {
      ...{
        "organisation": "Westbus",
        "date": "27/09/2023",
        "busData": [
          {
            "busId": "94811",
            "routeVariant": "664 2 1",
            "deviationFromTimetable": 164
          }
        ]
      }} />);

    const busId = getByText(/94811/i);
    const routeVariantFirst = getByText(/664/i);
    const routeVariantRest = getByText(/2 1/i);
    expect(busId).toBeInTheDocument();
    expect(routeVariantFirst).toBeInTheDocument();
    expect(routeVariantRest).toBeInTheDocument();
  });


  test('renders Report with unkown', async () => {
    const { getByText } = render(<Report {
      ...{
        "organisation": "Westbus",
        "date": "27/09/2023",
        "busData": [
          {
            "busId": "94811",
            "routeVariant": "unkown",
            "deviationFromTimetable": 164
          }
        ]
      }} />);

    const routeVariant = getByText(/unkown/i);
    expect(routeVariant).toBeInTheDocument();
  });
})