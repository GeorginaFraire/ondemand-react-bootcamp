import React,{useEffect, useState} from "react";
import {useSelector} from "react-redux";
import HeaderStyle from "./HeaderStyled";
import logo from "../../images/logo-ecommerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

import {Link, useNavigate} from 'react-router-dom'

function Header() {
  const [search, setSearch] = useState('');
  const cart = useSelector((state) => state.cartProduct.CartProducts);
  let navigate = useNavigate();
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setSearch(urlParams.get("q"));
  },[])

  const onHandleSearchTerm = (e) => {
    const url_serch = search.length > 0 ? `/search?q=${search}` : '/search';
    navigate(url_serch);
    navigate(0);
  }

  const onHandleChange  = (e) => {
    setSearch(e.target.value);
  }

  return (
    <HeaderStyle>
      <div className="header-container ">
        <div className="header-logo">
          <Link to='/home'>
          <img src={logo} alt="e-commerce" onClick={() => setSearch('')} />
          </Link>
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search" value={search || ''} onChange={onHandleChange}/>
          <button onClick={onHandleSearchTerm}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="header-cart">
            <Link to='/cart' data-testid="header-cart-button">
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
            {cart.length > 0 && <span className="cart-count" data-testid="header-cart-count">{cart.length}</span>}
            </Link>
        </div>
      </div>
    </HeaderStyle>
  );
}


export default Header;
