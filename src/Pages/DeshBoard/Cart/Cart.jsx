import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";

import useCart from "../../../hooks/useCart";

import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { Link, } from "react-router-dom";


const Cart = () => {
    const axiosSecure = useAxios()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => item.price + total, 0)
    console.log(totalPrice)
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });


    }
    return (
        <div className="">
            <Helmet>
                <title> Bistor Boss |  Menu </title>
            </Helmet>
            <SectionTitle
                headings={"My Cart"} subHeading={"WANNA ADD MORE?"}
            ></SectionTitle>
            <div className="flex md:justify-between items-center px-20 font-bold uppercase">
                <h2 className="text2xl"> Total Order: {cart.length}</h2>
                <h2 className="text2xl"> Total Price: $ {totalPrice}</h2>
                {cart.length ? <Link to={'/dashboard/payment'}>
                    <button className="btn btn-primary bg-orange-400">PaY</button>

                </Link> :
                    <button disabled className="btn btn-primary bg-orange-400">PaY</button>}
            </div>
            {/* table */}
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th >Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((cart, index) => <tr key={cart._id}>
                                <th>
                                    <label>
                                        {/* <input type="checkbox" className="checkbox" /> */}
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cart.image} />
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{cart.name}</div>
                                </td>
                                <td>
                                    <div className="font-bold">$ {cart.price}</div>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(cart._id)} className="btn btn-ghost btn-xs">delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;