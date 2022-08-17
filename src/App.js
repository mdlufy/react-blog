import React from "react";
import { Outlet } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div>
            <AppRouter />
            <Outlet/>
        </div>
    );
}
export default App;
