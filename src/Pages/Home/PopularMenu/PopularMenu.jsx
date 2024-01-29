
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../Sharde/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu()
    const  popular =menu.filter(menu=>menu.category ==="popular")
    console.log(menu)
    // const [menu, setMenu] = useState([])
    // console.log(menu)
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === "popular")
    //             setMenu(popularItem)
    //         })
    // }, [])
    return (
        <div>
            <section>
                <SectionTitle
                    headings={'Check it out'}
                    subHeading={'FROM OUR MENU'}
                ></SectionTitle>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-0 my-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id} item={item}
                    ></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;