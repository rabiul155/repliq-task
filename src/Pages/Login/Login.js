import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const Login = () => {

    const { register, handleSubmit, } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
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
                            <button type='submit' className="btn btn-outline mb-4">Login with google</button>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;