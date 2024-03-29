import { Link } from "react-router-dom"
import "./Navbar.css"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import useCart from "../../hooks/useCart";
const Navbar = () => {
    const [cart] = useCart()
    const { user, logOut } = useContext(AuthContext)
    const userLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    const navLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        <li><Link to={'/dashboard'}>DASHBOARD</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li><Link to={'/dashboard/cart'}>
            <button className="btn">
                Inbox
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        {
            user ? <>
                <li className="top-2">{user.email}</li>
                <button onClick={userLogout} className="btn btn-outline text-white ">LogOut</button>
            </>
                : <>
                    <li><Link to={'/login'}>Login</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar px-10 fixed z-10 bg-opacity-30 bg-black max-w-7xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                    <a className="text-xl">BISTRO BOSS </a>
                </div>
                {/* <a className="text-xl">Restaurant </a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;