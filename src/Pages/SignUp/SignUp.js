import React from 'react';
import { useForm } from 'react-hook-form';



const SignUp = () => {

    const { register, handleSubmit, } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className=' flex justify-center '>
            <div className=' border-purple-700 '>

                <form className='lg:w-[450px] mb-6' onSubmit={handleSubmit(onSubmit)} >

                    <h2 className=' font-bold text-4xl text-pink-500 text-center p-3'>SignUp</h2>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className=" py-4 px-8">
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

        </div>
    );
};

export default SignUp;