import { Helmet } from "react-helmet-async";
import Cover from "../../Pages/Cover/Cover";
import Coverimg from "../../../src/assets/menu/banner3.jpg"
import saladImg from "../../../src/assets/menu/salad-bg.jpg"
import dessertImg from "../../../src/assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg"
import soupImg from "../../../src/assets/menu/soup-bg.jpg"
import MenuCategory from "./MenuCategory";
// import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
const Menu = () => {
    const [menu] = useMenu()
    console.log(menu)
    const desserts = menu.filter(menu => menu.category === "dessert")
    const soups = menu.filter(menu => menu.category === "soup")
    const offereds = menu.filter(menu => menu.category === "offered")
    const pizzas = menu.filter(menu => menu.category === "pizza")
    const salads = menu.filter(menu => menu.category === "salad")
    // console.log(desserts)
    return (
        <div>
            <Helmet>
                <title> Bistor Boss |  Menu </title>
            </Helmet>
            <Cover img={Coverimg} title='Our Menu' des="Would you like to try a dish?"></Cover>
            <SectionTitle
                headings={"Don't miss"} subHeading={"TODAY'S OFFER"}
            ></SectionTitle>
            {/* // offer menu items */}
            <MenuCategory items={offereds}></MenuCategory>
            {/* dessert Menu item */}
            <MenuCategory
                items={desserts} title="Dessert" des='Lorem Ipsum has been the industry’s
                 standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book.'
                coverImg={dessertImg}>
            </MenuCategory>
            {/* soups menu items */}
            <MenuCategory
                title="soups" items={soups} coverImg={soupImg}>
            </MenuCategory>
            {/* pizzas Menu items */}
            <MenuCategory
                title="pizza" items={pizzas} coverImg={pizzaImg}>
            </MenuCategory>
            {/* salad Menu items */}
            <MenuCategory
                title="salad" items={salads} coverImg={saladImg}>
            </MenuCategory>
        </div>
    );
};

export default Menu;
