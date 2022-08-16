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
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/error" element={<Error />} />
                <Route 
                    path="*" 
                    element={<Navigate to="/error" replace />} 
                />
            </Routes>
        </div>
    );
};

export default AppRouter;
