import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <>
        <nav className="navBar">
            <Link to="/" className="logo">LOGO</Link>
            <p>OUR PROJECT</p>
            <Link to="/sepetim" className="basketButton">
                SEPET
            </Link>
        </nav>
    </>
}

export default Navbar;