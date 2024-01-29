
import Cover from "../../Pages/Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";
import {Link, useParams} from "react-router-dom"


const MenuCategory = ({ items, title, coverImg,des }) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} title={title} des={des} ></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-0 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id} item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                <button className="btn  btn-outline border-0 border-b-4  my-7">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            
            </div>

        </div>
    );
};

export default MenuCategory;