import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Home from './Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('This is Home page')).toBeInTheDocument();
  });
});
