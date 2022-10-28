
import {render, screen } from "@testing-library/react";

import Item from "./item";

test("Item component exists", () => {
  const item = {
    id: "123456",
    brand: "Acer",
    model: "Iconia Talk S",
    imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
    price: "123.45",
  };

  render(<Item item={item} />);
  expect(screen.getByText(`${item.brand} -`)).toBeInTheDocument();
  expect(screen.getByText(item.model)).toBeInTheDocument();
  expect(screen.getByText(`Price: € ${item.price}`)).toBeInTheDocument();

});

