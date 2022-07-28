import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/index";

it("render image logo", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
});
