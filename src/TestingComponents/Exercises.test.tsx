import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Exercises from 'pages/Exercises';
import store from '../store';

test('renders "List of Exercises" as a text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Exercises />
      </BrowserRouter>
    </Provider>,
  );
  const searchElement = screen.getByText('List of Exercises');
  expect(searchElement).toBeInTheDocument();
});
test('should the button have attribute submit', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Exercises />
      </BrowserRouter>
    </Provider>,
  );
  const buttonElement = screen.getByTestId('exercises-list');
  expect(buttonElement).toBeInTheDocument();
});
