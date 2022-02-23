import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';
import Navbar from '../components/Navbar';

it('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Quote renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
