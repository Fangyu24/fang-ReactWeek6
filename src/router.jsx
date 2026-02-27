import { createHashRouter } from "react-router-dom";
import Home from "./views/front/Home";
import Products from "./views/front/Products";
import SingleProduct from "./views/front/SingleProduct";
import Cart from "./views/front/Cart";
import Notfound from "./views/front/Notfound";
import FrontendLayout from "./layout/FrontendLayout";
import Checkout from "./views/front/Checkout";
import Login from "./views/front/Login";



export const router= createHashRouter(
    [
        {
            path:"/",
            element:<FrontendLayout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"products",
                    element:<Products/>
                },
                {
                    path:"product/:id",
                    element:<SingleProduct/>
                },
                {
                    path:"cart",
                    element:<Cart/>
                },
                {
                    path:"checkout",
                    element:<Checkout/>
                },{
                    path:"login",
                    element:<Login/>
                }
            ]
        },{
            path:"*",
            element:<Notfound/>
        }
    ]);