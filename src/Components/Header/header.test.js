import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import Header from "./Header";

function renderWithProviders(el) {
  return render(<Router>{el}</Router>);
}

test("header exists", () => {
  renderWithProviders(<Header />);
  const element = screen.getByText(/Test Zara/i);
  expect(element).toBeInTheDocument();
});

it("has a link to the Home Page", () => {
  renderWithProviders(<Header />);
  const linkElement = screen.getAllByRole("link", { name: "Test Zara" });
  expect(linkElement.length).toBe(1);
  expect(linkElement.at(0)).toHaveAttribute("href", "/");
});

