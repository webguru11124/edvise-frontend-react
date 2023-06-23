import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from '../../components/Alert';

describe('<Alert />', () => {
  test('Should show Alert', () => {
    render(<Alert message='Testing' />);
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });
});
