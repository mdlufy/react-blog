import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import cl from './Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    const login = () => {
        navigate('login');
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__links}>
                <Link className={cl.navbar__item} to="about">О сайте</Link>
                <Link className={cl.navbar__item} to="posts">Посты</Link>
            </div>
            {isAuth ? 
                <MyButton onClick={logout}>
                    Выйти
                </MyButton> 
            :
                <MyButton onClick={login}>
                    Войти
                </MyButton>
            }
        </div>
    );
};

export default Navbar;
