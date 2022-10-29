import {render, screen } from "@testing-library/react";

import Cart from "./cart";


test("Cart exists", () => {
  render(<Cart/>);
  expect(screen.getByRole('cart-icon')).toBeInTheDocument()
});


