import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="navbar__links__item" to="react-fundamental/about">О сайте</Link>
                <Link className="navbar__links__item" to="react-fundamental/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
