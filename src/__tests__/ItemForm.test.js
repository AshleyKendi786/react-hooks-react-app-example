 import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemForm from '../components/ItemForm';

describe('ItemForm', () => {
  test('submits form data correctly', () => {
    const mockSubmit = jest.fn();
    render(<ItemForm onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Test Item' }
    });
    fireEvent.click(screen.getByText(/submit/i));
    
    expect(mockSubmit).toHaveBeenCalled();
  });

  test('form clears after submission', () => {
    const mockSubmit = jest.fn();
    render(<ItemForm onSubmit={mockSubmit} />);
    
    const input = screen.getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: 'Test' } });
    fireEvent.click(screen.getByText(/submit/i));
    
    expect(input.value).toBe('');
  });
});