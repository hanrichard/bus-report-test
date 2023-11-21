import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('renders Header', () => {
    const { getByText } = render(<Card />);

    const cardElement = getByText(/card/i);
    expect(cardElement).toBeInTheDocument();
  });
});
