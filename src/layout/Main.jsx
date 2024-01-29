
import { Outlet } from 'react-router';
import Footer from '../Sharde/Footer/Footer'
import Navbar from '../Sharde/Navbar/Navbar';
const Main = () => {
    const noHeader = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {noHeader || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeader || <Footer></Footer>}
        </div>
    );
};

export default Main;