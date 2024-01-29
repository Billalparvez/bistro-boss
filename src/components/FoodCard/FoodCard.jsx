// import { useContext } from "react";
// import  { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";


const FoodCard = ({ items }) => {
    const [,refetch]=useCart()
    const axiosSecure=useAxios()
    const { user } = useAuth()
    // const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location=useLocation()

    const handleAddToCart = () => {
        // console.log(food)
        if (user && user.email) {
            const cartItem={
                name,
                image,
                price,
                email:user.email,
                menuId:_id
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if (res.data.insertedId) {
                      Swal.fire({
                        title: `${name}`,
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                    // navigate('/login',{state:{from:location}})
                    // // navigate('/login',{state:{from:location}})
                }
            })
        } else {
            Swal.fire({
                title: "YOur are not login?",
                text: "please Login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                    navigate('/login',{state:{from:location}})
                    // navigate('/login',{state:{from:location}})
                }
            });
        }
    }
    const { name, image, recipe, price ,_id} = items
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute text-white bg-black rounded p-1 top-5 right-7">$ {price}</p>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    {/* <button onClick={() => handleAddToCart(items)} className="btn btn-outline border-0 border-b-4">Add To Cart</button> */}
                    <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;