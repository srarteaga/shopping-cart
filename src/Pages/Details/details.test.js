import {render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";


import Details from "./details";


function renderWithProviders(el) {
    return render(<Router>{el}</Router>);
  }
  
  test("Details exists", () => {
    renderWithProviders(
      <Provider store={store}>
        <Details/>
      </Provider>
    );
    const element = screen.getByTestId('details');
    expect(element).toBeInTheDocument();
  });
  
  test("Store title exists", () => {
    renderWithProviders(
      <Provider store={store}>
        <Details/>
      </Provider>
    );
    const element = screen.getByText(/Details/i);
    expect(element).toBeInTheDocument();
  });