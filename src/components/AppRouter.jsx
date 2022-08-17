import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../router";
import "../styles/App.css";
import Layout from "./Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="react-fundamental" element={<Layout />}>
                {routes.map(route => 
                    <Route element={route.element} path={route.path} />
                )}
                <Route path="*" element={<Navigate to="error" replace />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
