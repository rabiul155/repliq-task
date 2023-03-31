import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';



const SignUp = () => {

    const { createUser, updateUser, createUserGoogle } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();

    const imageHostingKey = '60a0534fb81af8024326073b2526de82';
    const navigate = useNavigate();


    const onSubmit = (data) => {

        const name = data.name;
        const email = data.email;
        const password = data.password;

        console.log(email, password);

        const image = data.picture[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);

                if (imgData.success) {
                    createUser(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            toast.success('SignUp successfully')
                            navigate('/')
                            const userInfo = {
                                displayName: name,
                                photoURL: imgData.data.url
                            }
                            updateUser(userInfo)
                                .then(result => {

                                    const user = {
                                        name,
                                        password,
                                        email,
                                        photo: imgData.data.url,

                                    }

                                    fetch(`http://localhost:5000/users`, {
                                        method: "POST",
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(user)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            console.log(data)

                                        })

                                })
                                .catch(err => {
                                    console.error('update user error', err);
                                    toast.error('something went wrong, please try again')
                                })

                        })
                        .catch(err => {
                            console.error('create user error', err)
                            toast.error('something went wrong, please try again')
                        })


                }
            })


    }

    const handleGoogleBtn = () => {
        createUserGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                const userData = {
                    name: user.displayName,
                    password: '',
                    email: user.email,
                    photo: user.photoURL,

                }

                fetch(`http://localhost:5000/users`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                    })


            })
            .catch(err => {
                console.log('google pop up error');
                toast.error('something went wrong please try again')
            })

    }

    return (

        <div className=' flex justify-center '>

            <form className=' ' onSubmit={handleSubmit(onSubmit)} >

                <div className="card my-6 flex-shrink-0 w-full shadow-2xl bg-base-100">

                    <div className="card-body w-96 lg:w-[430px]  py-2 ">
                        <h2 className=' font-bold text-4xl text-blue-700 text-center mb-5'>SignUp</h2>
                        <hr />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name")}
                                type="text" placeholder="Name" required className=" input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email")}
                                type="email" placeholder="Email" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input required
                                {...register("picture")}
                                type="file" className="file-input file-input-bordered w-full " />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password")}
                                required type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-5">
                            <button type='submit' className="btn btn-primary">signup</button>
                        </div>
                        <div className="divider">or</div>
                        <div className="form-control ">
                            <button onClick={handleGoogleBtn} type='submit' className="btn btn-outline mb-4">signup with google</button>
                        </div>
                    </div>
                </div>
            </form>



        </div>
    );
};

export default SignUp;