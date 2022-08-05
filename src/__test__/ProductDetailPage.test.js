import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import App from "../App";

const renderProduct = () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/product/YWL8XBIAAC0AzuPZ"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
};

test("Should render product data", async () => {
  renderProduct();
  const table = await screen.findByTestId("product-info-main");
  expect(
    await screen.findByTestId("product-YWL8XBIAAC0AzuPZ")
  ).toBeInTheDocument();
  expect(table).toBeInTheDocument();
});

test("Should render the product information", async () => {
  renderProduct();
  const table = await screen.findByTestId("product-info-main");
  const rows = within(table).getAllByRole("cell");
  expect(rows[0]).toHaveTextContent("Price");
  expect(rows[2]).toHaveTextContent("SKU");
  expect(rows[4]).toHaveTextContent("Category");
  expect(rows[6]).toHaveTextContent("Tags");
  expect(
    await screen.findByTestId("product-information-description")
  ).toBeInTheDocument();
});

test("Should render quantity input and add cart button", async () => {
  renderProduct();
  const input = await screen.findByTestId("product-information-quantity");
  const button = await screen.findByTestId("product-information-add-to-cart");
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("Should add the number of item that are selected in the input quantty", async () => {
  renderProduct();
  const input = await screen.findByTestId("product-information-quantity");
  fireEvent.change(input, { target: { value: "2" } });
  fireEvent.click(await screen.findByTestId("product-information-add-to-cart"));
  expect(store.getState().cartProduct.CartProducts[0].quantity).toBe(2);
});

test("Sholud ”Add to Cart” button is disabled when the stock units available for the selected product is zero", async () => {
  renderProduct();
  const input = await screen.findByTestId("product-information-quantity");
  fireEvent.change(input, { target: { value: "4" } });
  fireEvent.click(await screen.findByTestId("product-information-add-to-cart"));
  expect(
    await screen.findByTestId("product-information-add-to-cart")
  ).toBeDisabled();
});
