import React from "react";
import { Link } from "react-router-dom";
import cl from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__links}>
                <Link className={cl.navbar__item} to="about">О сайте</Link>
                <Link className={cl.navbar__item} to="posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
