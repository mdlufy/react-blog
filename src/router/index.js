import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


export const privateRoutes = [
    {path: 'about', element: <About/>},
    {path: 'posts', element: <Posts/>},
    {path: 'posts/:id', element: <PostIdPage/>},
]

export const publicRoutes = [
    {path: 'about', element: <About/>},
    {path: 'login', element: <Login/>},
    {path: 'error', element: <Error/>}
]