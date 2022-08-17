import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import "../styles/App.css";
import Layout from "./Layout";

const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
            ?
            <Routes>
                <Route path="react-fundamental" element={<Layout />}>
                    {privateRoutes.map(route => 
                        <Route element={route.element} path={route.path} />
                    )}
                    <Route path="*" element={<Navigate to="posts" replace />} />
                </Route>
            </Routes>
            :
            <Routes>
                <Route path="react-fundamental" element={<Layout />}>
                    {publicRoutes.map(route => 
                        <Route element={route.element} path={route.path} />
                    )}
                    <Route path="*" element={<Navigate to="login" replace />} />
                </Route>
            </Routes>
        
    );
};

export default AppRouter;
