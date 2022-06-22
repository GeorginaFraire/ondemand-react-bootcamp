import React from "react";
import FooterStyled from "../styles/js/FooterStyled";

export default function Footer({text}) {
    return (
        <FooterStyled>
                <p>{text}</p>
        </FooterStyled>
    )
}
