import { Outlet } from "react-router";
import { NavLink } from 'react-router-dom'
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart,user] = useCart()

    const isAdmin = true
    return (
        <div className="flex flex-col md:flex-row gap-5 ">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu mt-10">
                    <h1 className="text-4xl p-2 mb-4">Bistro Boss <br />Resturent</h1>
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/adminHome'}>Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItems'}>Add Items <span className="text-red-500">{cart.length}</span> </NavLink></li>
                            <li><NavLink to={'/dashboard/manageItems'}>Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageBookings'}>Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashboard/allUser'}>All User <span className="text-red-500">{user.length}</span></NavLink></li>
                        </>
                            : <>
                                <li><NavLink to={'/dashboard/home'}>User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}>My Cart <span className="text-red-500">{cart.length}</span> </NavLink></li>
                                <li><NavLink to={'/dashboard/views'}>My Views</NavLink></li>
                                <li><NavLink to={'/dashboard/bookings'}>My Bookings</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}>Reservation</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to={'/'}> Home</NavLink></li>
                    <li><NavLink to={'/menu'}> Menu</NavLink></li>
                    <li><NavLink to={'/shop'}> Shop</NavLink></li>
                    <li><NavLink to={'/contact'}> Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;