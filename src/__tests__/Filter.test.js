 // src/__tests__/Filter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '../components/Filter';

// Create a manual mock for react-router-dom in __mocks__ folder
// OR use inline mock like this:
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
  // Add any other react-router components you use
}));

describe('Filter Component', () => {
  const mockItems = [
    { id: 1, name: 'Apple', category: 'fruits' },
    { id: 2, name: 'Carrot', category: 'vegetables' },
  ];

  test('renders without crashing', () => {
    render(<Filter items={mockItems} />);
    expect(screen.getByRole('heading', { name: /filter/i })).toBeInTheDocument();
  });

  test('displays all categories', () => {
    render(<Filter items={mockItems} />);
    expect(screen.getByText('All Items')).toBeInTheDocument();
    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Vegetables')).toBeInTheDocument();
  });

  test('filters items correctly', () => {
    render(<Filter items={mockItems} />);
    fireEvent.click(screen.getByText('Fruits'));
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Carrot')).not.toBeInTheDocument();
  });
});