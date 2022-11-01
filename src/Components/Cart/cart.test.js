import {render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

import Cart from "./cart";


test("Cart exists", () => {
  render(
    <Provider store={store}>
      <Cart/>
    </Provider>
  );
  expect(screen.getByRole('cart-icon')).toBeInTheDocument()
});


