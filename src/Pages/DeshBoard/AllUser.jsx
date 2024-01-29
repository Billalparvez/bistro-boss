
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxios()
    // tanstanc Use kore users data access
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    // delete
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
                axiosSecure.delete(`/users/${id}`)
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
    // update user data admin
    const handleMakeAdmin = (user) => {
        // console.log(user)
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="px-10 ">
            <SectionTitle headings={'From 11:00am to 10:00pm'}
                subHeading={'ORDER ONLINE'}>
            </SectionTitle>
            {/* table */}
            <div className="overflow-x-auto ">
                <h1>Total Users: {users.length} </h1>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>Email</th>
                            <th>Pole</th>
                            <th >Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)}>Role</button>} </td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUser;