import {render, screen } from "@testing-library/react";

import Image from "./image";


test("Image exists", () => {
  render(<Image />);
  const element = screen.getByRole('img')
  expect(element).toBeInTheDocument()
});


