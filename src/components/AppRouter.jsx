import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import App from "../App";
import "../styles/App.css";

const AppRouter = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="react-fundamental" element={<App />} />
                <Route path="react-fundamental/about" element={<About />} />
                <Route path="react-fundamental/posts" element={<Posts />} />
                <Route path="react-fundamental/error" element={<Error />} />
                <Route 
                    path="*" 
                    element={<Navigate to="react-fundamental/error" replace />} 
                />
            </Routes>
        </div>
    );
};

export default AppRouter;
