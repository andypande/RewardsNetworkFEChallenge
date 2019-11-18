import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('app loads with initial sort order ascending and search term of blank', () => {
  const { container } = render(<App />);
  const sortValue = getByTestId(container, "sortvalue");
  expect(sortValue.textContent).toBe("asc");
});

it('app loads with initial search term of blank', () => {
  const { container } = render(<App />);
  const searchValue = getByTestId(container, "searchValue");
  expect(searchValue.textContent).toBe("");
});

it('sort by ascending and descending buttons work', () => {
  const { container } = render(<App />);
  const descButton = getByTestId(container, "sortDescending");
  const ascButton = getByTestId(container, "sortAscending");
  const sortValue = getByTestId(container, "sortvalue");
  expect(sortValue.textContent).toBe("asc");
  fireEvent.click(descButton);
  expect(sortValue.textContent).toBe("desc");
  fireEvent.click(ascButton);
  expect(sortValue.textContent).toBe("asc");
});
