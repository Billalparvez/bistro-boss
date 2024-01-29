import { Helmet } from "react-helmet-async";
import Banner from "../Home/Banner/Banner"
import Category from "../Home/Category/Category"
import PopularMenu from "../Home/PopularMenu/PopularMenu"
import Feather from "../Home/Feather/Feather"
import Testomonials from "../Home/Testomonials/Testomonials"
import Test from "./Test";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title> Bistor Boss |  Home </title>           
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feather></Feather>
            <Testomonials></Testomonials>
            <Test></Test>


        </div>
    );
};

export default Home;