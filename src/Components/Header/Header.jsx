import React from "react";
import HeaderStyle from "./HeaderStyled";
import logo from "../../images/logo-ecommerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header({GoHome}) {
  return (
    <HeaderStyle>
      <div className="header-container ">
        <div className="header-logo">
          <img src={logo} alt="e-commerce" onClick={GoHome} />
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="header-cart">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </div>
      </div>
    </HeaderStyle>
  );
}
export default Header;
