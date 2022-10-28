import React from "react";
import {render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";


import Home from "./home";


function renderWithProviders(el) {
  return render(<Router>{el}</Router>);
}

test("Home exists", () => {
  renderWithProviders(<Home />);
  const element = screen.getByTestId('home');
  expect(element).toBeInTheDocument();
});

test("Store title exists", () => {
  renderWithProviders(<Home />);
  const element = screen.getByText(/Store/i);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('text-center');
});

  

