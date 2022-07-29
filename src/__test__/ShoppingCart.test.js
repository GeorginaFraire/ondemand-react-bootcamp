import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import App from "../App";
import {Product}  from '../mocks/product_YWL8XBIAAC0AzuPZ';
import { clearAll } from "../redux/reducers";
import { act } from "react-dom/test-utils";

afterEach(() => {
    act(() => {store.dispatch(clearAll())}) 
})

const renderCartPage = () => {
    render (
        <Provider store={store}>
        <MemoryRouter initialEntries={['/cart']}>
            <App />
        </MemoryRouter>
        </Provider>
    );
}

const renderHomePage = () => {
    render (
        <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
        </Provider>
    );
}

// test("Should render an empty cart", async () => {
//     renderCartPage();
//     const table = await screen.findAllByTestId("cart-table");
//     expect(table).toHaveLength(1); 
// })

// test("Should render an product in the cart page", async () => {
//     renderHomePage();
   
//     fireEvent.click(await screen.findByTestId("home-feature-product-add-YWL8XBIAAC0AzuPZ"));
//     fireEvent.click(await screen.findByTestId("header-cart-button"));
   
//     const table = await screen.findByRole("table");

//     const imgProduct = within(table).getByRole("img");
//     const productPrice = await screen.findByTestId(`cart-product-price-${Product.results[0].id}`);
//     const productQuantity = await screen.findByTestId(`cart-product-quantity-${Product.results[0].id}`);
//     const productTotal = await screen.findByTestId(`cart-product-total-${Product.results[0].id}`);
//     const productRemove = await screen.findByTestId(`cart-remove-product-${Product.results[0].id}`);
  
//     expect(imgProduct).toBeInTheDocument();
//     expect(productPrice).toBeInTheDocument();
//     expect(productQuantity).toBeInTheDocument();
//     expect(productTotal).toBeInTheDocument();
//     expect(productRemove).toBeInTheDocument();

//     expect(store.getState().cartProduct.CartProducts[0].quantity).toBe(1);
   
// });

// test("Should calculate the correct total of the cart.", async()=>{
//     renderHomePage();
   
//     fireEvent.click(await screen.findByTestId("home-feature-product-add-YWL8XBIAAC0AzuPZ"));
//     fireEvent.click(await screen.findByTestId("home-feature-product-add-YWJKhBIAACkAy8ew"));

//     fireEvent.click(await screen.findByTestId("header-cart-button"));
//     const Products = store.getState().cartProduct.CartProducts;
//     const total = Products.reduce((acc, cur) => acc + cur.total, 0);
//     const TotalTable = await screen.findByTestId("cart-total");
//     expect(parseFloat(TotalTable.innerHTML)).toEqual(total);  
// })

// test("should update the quantity of items for a particular product in the cart", async()=>{
//     renderHomePage();
//     act(() => {store.dispatch(clearAll())}) 
//     fireEvent.click(await screen.findByTestId("home-feature-product-add-YWL8XBIAAC0AzuPZ"));
//     fireEvent.click(await screen.findByTestId("header-cart-button"));
//     fireEvent.click(await screen.findByTestId("cart-product-quantity-increment-YWL8XBIAAC0AzuPZ"));
//     expect(store.getState().cartProduct.CartProducts[0].quantity).toBe(2);
//     const productQuantity = await screen.findByTestId("cart-product-quantity-YWL8XBIAAC0AzuPZ-number");
//     expect(productQuantity.innerHTML).toBe("2");
//     fireEvent.click(await screen.findByTestId("cart-product-quantity-decrement-YWL8XBIAAC0AzuPZ"));
//     expect(store.getState().cartProduct.CartProducts[0].quantity).toBe(1); 
//     expect(productQuantity.innerHTML).toBe("1");
// })


test("should remove a particular item", async()=>{
    renderHomePage();
   
    fireEvent.click(await screen.findByTestId("home-feature-product-add-YWL8XBIAAC0AzuPZ"));
    fireEvent.click(await screen.findByTestId("home-feature-product-add-YWJKhBIAACkAy8ew"));
    fireEvent.click(await screen.findByTestId("header-cart-button"));

    expect(await screen.findByTestId("cart-product-YWL8XBIAAC0AzuPZ")).toBeInTheDocument();
    expect(await screen.findByTestId("cart-product-YWJKhBIAACkAy8ew")).toBeInTheDocument();
    const table = await screen.findByTestId("cart-table-body");
    expect(table.childNodes.length).toBe(2);
    fireEvent.click((await screen.findByTestId("cart-remove-product-YWL8XBIAAC0AzuPZ")).getElementsByTagName("button")[0]);
    expect(table.childNodes.length).toBe(1);
     
})

