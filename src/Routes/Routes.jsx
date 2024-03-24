import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import BookMark from "../components/BookMark";
import Blogdetail from "../components/Blogdetail";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>,
                loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path:'blog_dtl/:id',
                loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
                element: <Blogdetail></Blogdetail>,
                children:[
                    {path: "",
                    loader:({params})=> fetch(`https://dev.to/api/articles/${params?.id}`),
                    element: <Content></Content>
                   },
                   {
                    path:"author",
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
                    element: <Author></Author>
                   }
                ]
            },
            {
                path:'bookmark',
                element: <BookMark></BookMark>
            }
        ]
    }
])