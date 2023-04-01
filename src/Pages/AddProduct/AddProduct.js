import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Shared/Loading';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const imageHostingKey = '60a0534fb81af8024326073b2526de82';

    const onSubmit = data => {
        setLoading(true)
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
                console.log(imgData)

                if (imgData.success) {

                    const product = {

                        name: data.name,
                        price: parseInt(data.price),
                        display: data.display,
                        batery: data.batery,
                        ram: data.ram,
                        storage: data.storage,
                        procesor: data.procesor,
                        camera: data.camera,
                        picture: imgData.data.url,
                        about: data.about
                    }
                    console.log(product);
                    fetch(`https://repliq-task-server.vercel.app/products`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success('product added')
                            setLoading(false)
                            reset()

                        })
                }

            })
    }

    return (
        <div>
            {

                loading ?

                    <Loading></Loading>
                    :

                    <div>
                        <h2 className=' text-primary text-4xl font-bold text-center m-4'>Add Product </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='  m-6'>
                                <div className=' grid md:grid-cols-2 gap-4 my-2'>
                                    <div className=' flex flex-col'>
                                        <label className=' text-md px-1'>Name</label>
                                        <input
                                            required
                                            {...register("name")}
                                            type="text" placeholder="Product Name" className="input input-bordered input-primary w-full " />
                                    </div>
                                    <div className=' flex flex-col'>
                                        <label className=' text-md px-1'>Price</label>
                                        <input required
                                            {...register("price")}
                                            type="text" placeholder="Product Price" className="input input-bordered input-primary w-full " />
                                    </div>
                                </div>
                                <div className=' grid md:grid-cols-2 gap-4 my-2'>
                                    <div className=' flex flex-col'>
                                        <label className='text-md px-1'>Display</label>
                                        <input required
                                            {...register("display")}
                                            type="text" placeholder="eg : 6.5 inch" className="input input-bordered input-primary w-full " />
                                    </div>
                                    <div className=' flex flex-col'>
                                        <label className=' text-md px-1'>Ram</label>
                                        <select required
                                            {...register("ram")}
                                            className="select select-primary w-full ">
                                            <option selected>8 GB</option>
                                            <option>6 GB</option>
                                            <option>4 GB</option>
                                            <option>3 GB</option>
                                            <option>2 GB</option>

                                        </select>
                                    </div>
                                </div>
                                <div className=' grid md:grid-cols-2 gap-4 my-2'>
                                    <div className=' flex flex-col'>
                                        <label className=' text-md px-1'>Storage</label>
                                        <select required
                                            {...register("storage")}
                                            className="select select-primary w-full ">
                                            <option selected>256 GB</option>
                                            <option>128 GB</option>
                                            <option>64 GB</option>
                                            <option>32 GB</option>
                                            <option>16 GB</option>


                                        </select>
                                    </div>
                                    <div className=' flex flex-col'>
                                        <label className=' text-md px-1'>Batery</label>

                                        <input required
                                            {...register("batery")}
                                            type="text" placeholder="eg : 5000 mah" className="input input-bordered input-primary w-full " />

                                    </div>
                                </div>
                                <div className=' grid md:grid-cols-2 gap-4 my-2'>
                                    <div className=' flex flex-col'>
                                        <label className=' text-md px-1'>Camera</label>


                                        <input required
                                            {...register("camera")}
                                            type="text" placeholder="eg : 48 MP" className="input input-bordered input-primary w-full " />
                                    </div>
                                    <div className=' flex flex-col '>
                                        <label className=' text-md px-1'>Processor</label>
                                        <input required
                                            {...register("procesor")}
                                            type="text" placeholder="Processor Name" className="input input-bordered input-primary w-full " />
                                    </div>
                                </div>

                                <div className=' flex flex-col w-full my-2'>
                                    <label className=' text-md px-1'>Product Image</label>
                                    <input required
                                        {...register("picture")}
                                        type="file" className="file-input input-primary file-input-bordered w-full " />
                                </div>
                                <div className=' flex flex-col w-full my-2'>
                                    <label className=' text-md px-1'>Product Details</label>
                                    <textarea required
                                        {...register("about")}
                                        className="textarea textarea-primary" placeholder="Bio"></textarea>
                                </div>
                            </div>
                            <div className=' flex justify-center  mb-4'>
                                <button className=' btn  ' type="submit">ADD PRODUCT</button>
                            </div>
                        </form>
                    </div>

            }

        </div>
    );
};

export default AddProduct;