import React from "react";
import FooterStyled from "./FooterStyled";

export default function Footer({text}) {
    return (
        <FooterStyled>
                <p>{text}</p>
        </FooterStyled>
    ) 
}
