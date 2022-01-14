import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

const photo = {
  name: 'Building exterior',
  category: 'commercial',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
};

afterEach(cleanup);

describe('PhotoList component', () => {
  it('renders', () => {
    render(<PhotoList category={photo}/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList category={photo}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

// it('renders', () => {
//   const { getByTestId } = render(<PhotoList category={photo}/>)
//   expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
// })

