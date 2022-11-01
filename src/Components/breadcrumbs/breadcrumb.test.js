import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Breadcrumbs from "./breadcrumbs";



test("Breadcrumb exists", () => {
  render(
    <Router>
      <Breadcrumbs/>
    </Router>
  );
  const element = screen.getByText(/Home/i);
  expect(element).toBeInTheDocument();
});

test("has a link to de home", () => {
  render(
    <Router>
      <Breadcrumbs/>
    </Router>
  );
  const linkElement = screen.getAllByRole("link", { name: "Home" });
  expect(linkElement.length).toBe(1);
  expect(linkElement.at(0)).toHaveAttribute("href", "/");
});

