import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import "../styles/App.css";
import Layout from "./Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="react-fundamental" element={<Layout />}>
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:id" element={<PostIdPage />} />
                <Route path="error" element={<Error />} />
                <Route path="*" element={<Navigate to="error" replace />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
