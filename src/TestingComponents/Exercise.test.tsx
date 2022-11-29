import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/redux/store';
import Exercises from '../common/components/Exercises';

test('render "List of Exercises" as a text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Exercises />
      </BrowserRouter>
    </Provider>,
  );
  const viewExerciseList = screen.getByText('List of Exercises');
  expect(viewExerciseList).toBeInTheDocument();
});
test('should the button have attribute submit', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Exercises />
      </BrowserRouter>
    </Provider>,
  );
  const buttonElement = screen.getByTestId('custom-element');
  expect(buttonElement).toBeInTheDocument();
});
