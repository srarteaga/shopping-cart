import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

import Header from "./Header";

function renderWithProviders(el) {
  return render(<Router>{el}</Router>);
}

test("header exists", () => {
  renderWithProviders(
    <Provider store={store}>
      <Header/>
    </Provider>
  );
  const element = screen.getByText(/Test Zara/i);
  expect(element).toBeInTheDocument();
});

test("has a link to the Home Page", () => {
  renderWithProviders(
    <Provider store={store}>
      <Header/>
    </Provider>
  );
  const linkElement = screen.getAllByRole("link", { name: "Test Zara" });
  expect(linkElement.length).toBe(1);
  expect(linkElement.at(0)).toHaveAttribute("href", "/");
});

