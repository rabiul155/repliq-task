import React from 'react';
import { useForm } from 'react-hook-form';



const SignUp = () => {

    const { register, handleSubmit, } = useForm();


    const onSubmit = (data) => {
        console.log(data);
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
                            <button type='submit' className="btn btn-outline mb-4">signup with google</button>
                        </div>
                    </div>
                </div>
            </form>



        </div>
    );
};

export default SignUp;