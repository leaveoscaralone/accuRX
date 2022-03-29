import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header with accuRX logo and filter by name text', () => {
  render(<App />);
  const linkElement = screen.getByText(/accuRX/i);
  const linkElement2 = screen.getByText(/filter by name/i)
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});

test('search bar and filter are properly rendered', () => {
  render(<App />);
  const searchBar = screen.getByPlaceholderText(/search/i);
  const filter = screen.getByRole('combobox')
  expect(searchBar).toBeInTheDocument();
  expect(filter).toBeInTheDocument();
});





