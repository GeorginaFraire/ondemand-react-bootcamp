import React from "react";
import HeaderStyle from "../styles/js/HeaderStyled";
import logo from "../images/logo-ecommerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <div className="header-container ">
          <div className="header-logo">
            <img src={logo} alt="e-commerce" />
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search" />
          </div>

          <div className="header-cart">
            <FontAwesomeIcon icon={faCartShopping}  size="2x"/>
          </div>
        </div>
      </HeaderStyle>
    );
  } 
} 
