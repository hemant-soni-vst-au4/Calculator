import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from './Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Quote', () => {
  test('renders Quote component', () => {
    render(<Quote />);
    expect(screen.getByText('Quote of day')).toBeInTheDocument();
  });
});
