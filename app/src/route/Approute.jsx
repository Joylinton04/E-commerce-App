import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route,Outlet } from "react-router-dom"
import Home from "../pages/Home/Home"
import Products from "../pages/Products/Products"
import Product from "../pages/product/Product"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/footer/Footer"
import "../App.scss"

const Approute = () => {
    const Layout = () => {
        return (
            <div className="app">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        )
    }
    

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children:[
                {
                    path: "/",
                    element:<Home/>
                },
                {
                    path: "/products/:id",
                    element:<Products/>
                },
                {
                    path: "/product/:id",
                    element:<Product/> 
                }
            ]
        }
    ])
    
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Approute;