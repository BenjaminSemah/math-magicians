import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Calculator from '../components/Calculator';

describe('App functions properly', () => {
  test('App component renders correctly', () => {
    render(<App />);

    screen.getByRole('heading', { name: /math magicians/i });
    expect(screen.getByRole('heading', { name: /math magicians/i })).toBeInTheDocument();
    expect(screen.queryByText("Let's do some math!")).toBeNull();
    expect(screen.queryByText('Leo Tolstoy')).toBeNull();
  });

  test('App navigation works properly', () => {
    render(<App />);

    screen.getByRole('heading', { name: /math magicians/i });
    expect(screen.getByRole('heading', { name: /math magicians/i })).toBeInTheDocument();
    expect(screen.queryByText("Let's do some math!")).toBeNull();
    expect(screen.queryByText('Leo Tolstoy')).toBeNull();

    userEvent.click(screen.getByRole('link', { name: /calculator/i }));
    expect(screen.getByRole('heading', { name: /math magicians/i })).toBeInTheDocument();
    expect(screen.queryByText("Let's do some math!")).toBeInTheDocument();
    expect(screen.queryByText('Leo Tolstoy')).toBeNull();

    userEvent.click(screen.getByRole('link', { name: /quote/i }));
    expect(screen.getByRole('heading', { name: /math magicians/i })).toBeInTheDocument();
    expect(screen.queryByText("Let's do some math!")).toBeNull();
    expect(screen.getByText(/\- leo tolstoy/i)).toBeInTheDocument();
  });

  test('Calculator addition works properly', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /5/i }));
    userEvent.click(screen.queryByText('+'));
    userEvent.click(screen.getByRole('button', { name: /7/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    expect(screen.getByText(/12/i)).toBeInTheDocument();
  });

  test('Calculator subtraction works properly', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /5/i }));
    userEvent.click(screen.queryByText('-'));
    userEvent.click(screen.getByRole('button', { name: /7/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    expect(screen.getByText(/\-2/i)).toBeInTheDocument();
  });

  test('Calculator division works properly', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /8/i }));
    userEvent.click(screen.getByRole('button', { name: /\+\/\-/i}));
    userEvent.click(screen.queryByText('÷'));
    userEvent.click(screen.getByRole('button', { name: /4/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    expect(screen.getByText(/\-2/i)).toBeInTheDocument();
  });

  test('Calculator Multiplication works properly', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /2/i }));
    userEvent.click(screen.getByRole('button', { name: /\+\/\-/i}));
    userEvent.click(screen.getByRole('button', {  name: /x/i}));
    userEvent.click(screen.getByRole('button', { name: /3/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    expect(screen.getByText(/\-6/i)).toBeInTheDocument();
  });

  test('Calculator Modulus works properly', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /2/i }));
    userEvent.click(screen.getByRole('button', { name: /\+\/\-/i}));
    userEvent.click(screen.getByRole('button', {  name: /%/i}));
    userEvent.click(screen.getByRole('button', { name: /3/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    expect(screen.getByText(/\-2/i)).toBeInTheDocument();
  });
});
