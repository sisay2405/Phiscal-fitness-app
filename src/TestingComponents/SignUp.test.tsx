import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUp from 'features/pages/SignUp';
import store from '../app/redux/store';

test('render "Sign Up" as a text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  const viewSignUpElement = screen.getByText('Sign Up');
  expect(viewSignUpElement).toBeInTheDocument();
});
test('should the button have attribute submit', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  const buttonElement = screen.getByTestId('custom-element');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('type', 'submit');
});
test('display Name', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  const placeHolder = screen.getByPlaceholderText(/display Name/i);
  expect(placeHolder).toBeInTheDocument();
});
