import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Main from './Main'

it('renders correctly', () => {
  const tree = renderer
    .create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Main', () => {
  test('renders Main component', () => {
    render(<Main />);
    expect(screen.getByText('This is main page')).toBeInTheDocument();
  });
});