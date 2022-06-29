import React from "react";
import FooterStyled from "./FooterStyled";
import PropTypes from 'prop-types';

export default function Footer({text}) {
    return (
        <FooterStyled>
                <p>{text}</p>
        </FooterStyled>
    ) 
}
Footer.propTypes = {
    text : PropTypes.string
}