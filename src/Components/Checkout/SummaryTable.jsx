import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

function SummaryTable() {
  const cart = useSelector((state) => state.cartProduct.CartProducts);

  return (
    <div style={{margin:'20px'}}>
      <table id="sumamaryTable">
        <thead>
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="wrapper"> 
                    {product.name}
                  </div>
                </td>
                <td>
                  <div className="wrapper-center">{product.quantity}</div>
                </td>
                <td> $ {product.total}</td>
              </tr>
            );
          })}
        </tbody>
        {cart.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan="2" style={{ textAlign: "right" }}>
                Total
              </td>
              <td style={{ textAlign: "left" }}>
                {cart.length > 0
                  ? `$ ${cart.reduce((acc, product) => {
                      return acc + product.total;
                    }, 0)}`
                  : "$ 0.00"}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

export default SummaryTable;
