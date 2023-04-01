
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from 'react-query';
import Loading from '../../components/Shared/Loading';

const ProductsList = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://repliq-task-server.vercel.app/products`)
            const data = await res.json();
            return data;
        }

    })


    const handleDelete = (_id) => {

        const confirm = window.confirm('are you sure to delete this product ')
        if (confirm) {

            fetch(`https://repliq-task-server.vercel.app/products/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Product deleted')
                    refetch();
                })

        }



    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className=' text-4xl text-primary text-center m-4 font-bold'>All Product</h2>
            <div className="overflow-x-auto mx-3">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, idx) =>
                                <tr
                                    key={product._id}
                                >
                                    <th>{idx + 1}</th>
                                    <td>

                                        <div className="w-12 rounded">
                                            <img src={product.picture} alt='' />
                                        </div>

                                    </td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td> <button onClick={() => handleDelete(product._id)} className=""><FaTrashAlt className=' text-red-500 text-2xl'></FaTrashAlt></button></td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductsList;