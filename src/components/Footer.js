import React from "react";
import FooterStyles from '../styles/FooterStyles';
import { Link } from "gatsby";

const Footer = () => {
    return (
        <FooterStyles>
            <div className="wrapperForm">
                <legend>
                    <span className="formAction">Подписаться</span> на нашу рассылку!
                </legend>
            </div>

            <div className="wrapperMain">
                <Link to="/"> Fresh Blog </Link>
                &copy; {new Date().getFullYear()}
            </div>
        </FooterStyles>
    )
}

export default Footer;