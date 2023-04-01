import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Shared/Loading';
import { AuthContext } from '../../context/AuthProvider';



const Login = () => {


    const { logIn, createUserGoogle } = useContext(AuthContext);
    const [isLoadig, setIsLoading] = useState(false)

    const { register, handleSubmit, } = useForm();

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const onSubmit = (data) => {
        setIsLoading(true)
        const email = data.email;
        const password = data.password;
        logIn(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('log in user successfully')
                setIsLoading(false)
                navigate(from, { replace: true })

            })
            .catch(err => {
                setIsLoading(false)
                console.error('log in error', err)
                toast.error('something went wrong please try again')
            })

    }

    const handleGoogleBtn = () => {
        setIsLoading(true)
        createUserGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setIsLoading(false)
                navigate('/')
                const userData = {
                    name: user.displayName,
                    password: '',
                    email: user.email,
                    photo: user.photoURL,

                }

                fetch(`https://repliq-task-server.vercel.app/users`, {
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
                setIsLoading(false)
                console.log('google pop up error');
                toast.error('something went wrong please try again')
            })

    }

    return (
        <div>
            {
                isLoadig ?
                    <Loading></Loading>
                    :
                    <div className=' flex justify-center '>

                        <form className='' onSubmit={handleSubmit(onSubmit)} >

                            <div className="card my-6 flex-shrink-0 w-full shadow-2xl bg-base-100">
                                <div className="w-96 lg:w-[400px] card-body py-2">
                                    <h2 className=' font-bold text-4xl text-blue-700 text-center mb-1'>Login</h2>
                                    <hr />

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
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            {...register("password")}
                                            required type="password" placeholder="password" className="input input-bordered" />
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                                        </div>

                                        <div className="text-sm">
                                            <Link className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                        </div>
                                    </div>
                                    <div className="form-control mt-2">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="divider">or</div>
                                    <div className="form-control ">
                                        <button onClick={handleGoogleBtn} type='submit' className="btn btn-outline mb-4">Login with google</button>
                                    </div>

                                </div>
                            </div>
                        </form>

                    </div>
            }

            <div className=' m-4 absolute top-16 right-3'>
                <h2>Cridential Info</h2>
                <h2>Admin</h2>
                <p>Email : admin@gmail.com</p>
                <p>Password : 123456</p>
                <h2>User</h2>
                <p>Email : user@gmail.com</p>
                <p>password : 123456</p>
            </div>

        </div>
    );
};

export default Login;