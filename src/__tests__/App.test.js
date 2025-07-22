 // src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock child components with correct paths
jest.mock('../components/Navigation', () => () => (
  <div data-testid="mock-navigation">Mock Navigation</div>
));

jest.mock('../components/ShoppingList', () => () => (
  <div data-testid="mock-shopping-list">Mock ShoppingList</div>
));

// Basic router mock
jest.mock('react-router-dom', () => ({
  Link: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ element }) => element,
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('mock-navigation')).toBeInTheDocument();
    expect(screen.getByTestId('mock-shopping-list')).toBeInTheDocument();
  });
});