import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignIn from 'pages/SignIn';
import store from '../store';

test('renders "Sign In" as a text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>,
  );
  const searchElement = screen.getByText('Sign In');
  expect(searchElement).toBeInTheDocument();
});
test('should the button have attribute submit', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>,
  );
  const buttonElement = screen.getByTestId('custom-element');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('type', 'submit');
});
test('should the input has a place holder Enter email address..', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>,
  );
  const placeHolder = screen.getByPlaceholderText(/Enter email address../i);
  expect(placeHolder).toBeInTheDocument();
});

test('should render a button', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>,
  );
  const buttonElement = screen.getByRole('button', { name: /Submit/i });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('type', 'submit');
});
