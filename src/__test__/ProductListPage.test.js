import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store/index";

import ProductList from "../Pages/ProductListPage";
import PaginationControls from "../Components/Pagination-Controls/pagination-controls";

const ProductPageList = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    </Provider>
  );
};

test("should render categories sidebar", async () => {
  render(<ProductPageList />);
  const sideBar = await screen.findByTestId("product-list-sidebar-0");
  expect(sideBar).toBeInTheDocument();
});

test("should render pagination controls based on the number of results fetched from the AP", async () => {
  render(<ProductPageList />);
  const paginationControls = await screen.findByTestId("pagination-controls");
  const button_numbers = screen.getAllByTestId("button-number");
  expect(paginationControls).toBeInTheDocument();
  expect(button_numbers.length).toBe(3);
});

test("sholud next page button be disabled", async () => {
  render(
    <PaginationControls
      currentPage={3}
      totalPages={3}
      pageSize={12}
    ></PaginationControls>
  );
  const paginationcontrolsnext = await screen.findByTestId(
    "pagination-controls-next"
  );

  expect(paginationcontrolsnext).toBeInTheDocument();
  expect(paginationcontrolsnext).toBeDisabled();
});

test("sholud prev page button be disabled", async () => {
  render(
    <PaginationControls
      currentPage={1}
      totalPages={3}
      pageSize={12}
    ></PaginationControls>
  );
  const paginationcontrolsprev = await screen.findByTestId(
    "pagination-controls-prev"
  );

  expect(paginationcontrolsprev).toBeInTheDocument();
  expect(paginationcontrolsprev).toBeDisabled();


});

test('should move to the next page', async () => {
  render(<ProductPageList />)
  const paginationcontrolsnext = await screen.findByTestId(
    "pagination-controls-next"
  );
  await fireEvent.click(paginationcontrolsnext);
  await expect(window.location.search).toEqual('?page=2');
})