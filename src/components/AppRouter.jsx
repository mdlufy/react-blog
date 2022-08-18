import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router";
import "../styles/App.css";
import Layout from "./Layout";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                <Route path="react-fundamental" element={<Layout />}>
                    {privateRoutes.map(route => 
                        <Route element={route.element} path={route.path} key={route.path} />
                    )}
                    <Route path="*" element={<Navigate to="posts" replace />} />
                </Route>
            </Routes>
            :
            <Routes>
                <Route path="react-fundamental" element={<Layout />}>
                    {publicRoutes.map(route => 
                        <Route element={route.element} path={route.path} key={route.path}/>
                    )}
                    <Route path="*" element={<Navigate to="login" replace />} />
                </Route>
            </Routes>
        
    );
};

export default AppRouter;
