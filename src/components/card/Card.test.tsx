import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('should render Card by default', async () => {
    render(<Card />);
    expect(await screen.findByText('This is a card')).toBeInTheDocument();
  });
});
