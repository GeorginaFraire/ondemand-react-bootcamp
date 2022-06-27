import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  z-index: 100;
  height: 60px;
  display: block;
  position: fixed;
  top: 0;
  background-color:white;
  border-bottom:1px dashed #d5ae99;

  .header-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    padding: 5px;
  }

  .header-logo {
    align-items: left;
    cursor: pointer;
  }

  .header-logo img {
    width: 50%;
  }

  .header-search input {
    width: 90%;
    height: 30px;
    margin-top: 5px;
  }

  .header-cart {
    top: 2;
    align-items: center;
    color: #ceb5a2;
    margin-top: 5px;
    cursor: pointer;
  }
`;

export default HeaderStyle;
