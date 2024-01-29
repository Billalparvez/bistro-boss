import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Sharde/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Form/Login/Login";
import Register from "../Pages/Form/Register/Register";
import Cart from "../Pages/DeshBoard/Cart/Cart";
import AllUser from "../Pages/DeshBoard/AllUser";
import DashBoard from "../layout/DashBoard";
import AddItem from "../Pages/AddItem/AddItem";
import Payment from "../Pages/DeshBoard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <Menu></Menu>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'allUser',
                element: <AllUser></AllUser>,
            },
            {
                // path: '/dashboard/addItems',
                path: 'addItems',
                element: <AddItem></AddItem>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            }
        ]
    }
]);
