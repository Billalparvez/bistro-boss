

const MenuItem = ({ item }) => {
    // console.log(item)
    const { name, image, recipe, price } = item
    return (
        <div className="flex gap-5 space-y-5  ">
            <img style={{borderRadius:' 0 200px 200px 200px'}} className="w-[100px] " src={image} alt="" />
            <div>
                <h1 className="font-bold">{name} ---------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 md:mr-5">{price}</p>
        </div>
    );
};

export default MenuItem;