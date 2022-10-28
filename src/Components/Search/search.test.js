import {render, screen } from "@testing-library/react";

import Search from "./search";


test("Search input exists", () => {
  render(<Search />);
  const element = screen.getByRole('textbox')
  expect(element).toHaveAttribute("placeholder", "Search products")
  expect(element).toBeInTheDocument()
});


