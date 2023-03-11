import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('greet renders with a name', () => {
  render(<Greet name="Kiran" />);
  const textElement = screen.getByText('Hello Kiran');
  expect(textElement).toBeInTheDocument();
});

test('greet with name', () => {
  render(<Greet name="Sai" />);
  const textElement = screen.getByText('Hello Sai');
  expect(textElement).toBeInTheDocument();
});
