import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../../components/Avatar';

describe('<Avatar />', () => {
  test('Should show avatar', () => {
    render(<Avatar url='https://picsum.photos/200/300' alt='avatar' />);
    expect(screen.getByAltText(/avatar/i)).toBeDefined();
  });
});
