import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

describe('Given a main layout', () => {
  test('When a page is accessed, then return a title', () => {
    render(<MainLayout />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
