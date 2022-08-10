import React from "react";
import OrderForm from "../Components/Checkout/OrderForm.jsx";
import SummaryTable from "../Components/Checkout/SummaryTable.jsx";

function CheckoutPage() {

    return (
        <div className="container">
        <h1>Checkout Page Cart</h1>
        <SummaryTable></SummaryTable>
        <OrderForm></OrderForm>
        </div>
    );
}

export default CheckoutPage;