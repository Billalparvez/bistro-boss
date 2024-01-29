import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
// imgbb hosting img and img key <about >
const img_hosting_key = '247b7b196fd064f4692fe318dfc79627'
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        // image hos
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                details: data.details,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuResult = await axiosSecure.post('/menu', menuItem)
            console.log('menu', menuResult.data)
            if(menuResult.data.insertedId){
                reset ()
                Swal.fire({
                    title: "menuItem data store mongodb Success!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            }
        }
        console.log(res.data)
    }
    return (
        <div>
            <Helmet>
                <title> Bistor Boss |  AddItems </title>
            </Helmet>
            <SectionTitle
                headings={'Check it out'}
                subHeading={'Add Items'}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text"
                            placeholder="Recipe name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={'defaile'} className="select select-ghost w-full" {...register("category", { required: true })}>
                                <option value={''}>Cagegoru JS framework</option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                            </select>
                        </div>
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number"
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details*"
                            {...register("details", { required: true })}>
                        </textarea>
                    </div>
                    <input type="file"  {...register("image", { required: true })} className="file-input  file-input-bordered w-full max-w-xs" /> <br />
                    <button className="btn text-white bg-orange-300">ADD Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;