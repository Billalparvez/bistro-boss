// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from '../../../hooks/useAuth';
// import { axiosPublic } from '../../../hooks/useAxiosPublic';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Register = () => {
    const axiosPublic = useAxiosPublic()
    // console.log(axiosPublic)
    const navigate = useNavigate()
    const { createUser, userUpdateProfile, singInGoogle } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                const logger = res.user
                console.log(logger)
                userUpdateProfile(data.name, data.photoURL)
                    .then(res => {
                        console.log(res)
                        const userInfo = {
                            email: data.email,
                            name: data.name
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user adding data base')
                                    reset()
                                    Swal.fire({
                                        title: "Your Register!",
                                        text: "Your photo update success!",
                                        icon: "success"
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => {
                        console.log(error)
                    })
                Swal.fire({
                    title: "Your Register!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            })
    }
    const handleGoogle = () => {
        console.log('google')
        singInGoogle()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res.user?.email,
                    name: res?.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.user)
                    })
                    navigate('/')
            });


    }

    // const handleSingUp = (e) => {
    //     e.preventDefault()
    //     const form = e.target
    //     const name = form.name.value
    //     const email = form.email.value
    //     const password = form.password.value
    //     console.log(name, email, password)
    //     createUser(email, password)
    //         .then(data => {
    //             console.log(data.user)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^[A-Za-z]+$/i })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "minLength" && (
                                <p className="">Password must be 6 chareter</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 text">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <p>Are you not LOgin? <Link to={'/login'}>Login Now</Link> </p>
                    <p onClick={handleGoogle} className='btn my-3'>Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;