import SectionTitle from "../../../components/SectionTitle";
import "./Fether.css"
import feathur from '../../../assets/home/chef-service.jpg'
import { Helmet } from 'react-helmet-async';
const Feather = () => {
    <Helmet>
        <title>Bistro-Boss | Feathur</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    return (
        <div className="feather bg-fixed my-20 text-white ">
            <section className="bg-opacity-30 bg-black py-10" >
                <SectionTitle
                    headings={'---Check it out---'}
                    subHeading={'FROM OUR MENU'}>
                </SectionTitle>
                <div className="gap-10 px-40 mb-7 md:flex justify-center items-center">
                    <div className="flex-1"> <img className="h-[300px] rounded" src={feathur} alt="" /></div>
                    <div className="flex-1">
                        <p>March 20, 2023
                            WHERE CAN I GET SOME?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="mt-3 text-white border-0 border-b-4  btn btn-outline">Order Now</button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Feather;