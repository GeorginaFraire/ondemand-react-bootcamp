import styled from 'styled-components';

const HeaderStyle =  styled.header`
  width: 100%;
  z-index: 10;
  background-color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  text-align: center;
  top: 0;

    .header-container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        justify-content: center;
        padding: 10px;
    }

    .header-logo {
        align-items: left;
        cursor: pointer;
    }

    .header-logo img{
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
        color: #1E517B;
        margin-top: 5px;
        cursor: pointer;
    }
    
`

export default HeaderStyle;