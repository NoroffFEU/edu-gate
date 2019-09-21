import React from 'react';
// import  from '../Link.react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});