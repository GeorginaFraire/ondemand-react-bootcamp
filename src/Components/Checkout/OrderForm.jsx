import React from "react";
import {Link} from 'react-router-dom'
import "./Checkout.css";

function OrderForm() {

    const onPrevetDefault = (e) => {
        e.preventDefault();
    }

  return (
    <div
      style={{ margin: "30px", padding: "10px", border: "1px dashed #d5ae99" }}>
      <form onSubmit={onPrevetDefault}>
        <div className="form-group">           
            <input
              className="form-text"
              required
              type="text"
              name="customer"
              placeholder="Name"
            />   
        </div>

        <div className="form-group">
            <input
              className="form-text"
              required
              type="email"
              name="email"
              placeholder="email"
            />
        </div>
        <div className="form-group">
            <input
              className="form-text"
              required
              type="text"
              name="zipcode"
              placeholder="zicode"
            />
        </div>
        <div className="form-group">
            <textarea className="form-text" name="notes" placeholder="notes" />
        </div>
        <div className="form-2-col">
            <button className="form-button">Place order</button>
            <Link to='/cart'>
            <button className="form-button">Go back to cart</button>
            </Link>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
