import Cart from "../Pages/cart/Cart";
import Contact from "../Pages/Contact/Contact";
import DetailProductCard from "../Pages/Proudct/DetailProductCard";



import Products from "../Pages/Proudct/Products";
import Error from "../Pages/Shared/Error/Error";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");
const { default: Login } = require("../Pages/Shared/register/Login");
const { default: SignUp } = require("../Pages/Shared/register/SignUp");




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: '/product',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                // loader: async ({params}) => await fetch(`http://localhost:5000/product/${params.id}`),
                element: <DetailProductCard></DetailProductCard>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },


        ]
    }
])