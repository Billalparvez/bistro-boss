import FoodCard from "../../../components/FoodCard/FoodCard";


const TabCard = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-3">
            {
                item.map((dessert, idx) =>
                    <FoodCard key={idx} items={dessert}>
                    </FoodCard>)
            }

        </div>
    );
};

export default TabCard;