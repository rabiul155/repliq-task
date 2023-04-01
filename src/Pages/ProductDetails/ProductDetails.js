import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {

    const product = useLoaderData();
    const { name, price, batery, camera, ram, storage, procesor, picture, display, about } = product;

    console.log(product);

    return (
        <div className=' m-4'>

            <img src={picture} alt='' className="sm:w-1/2 mx-auto rounded-lg shadow-2xl" />
            <h3 className='sm:w-1/2 mx-auto text-xl font-bold my-3'>About Product : {about}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra sm:w-1/2 mx-auto mt-4">

                    <thead>
                        <tr>
                            <th className=' font-bold text-lg'>Specification</th>
                            <th className=' font-bold text-lg'>Details</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>Name</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <th>Display</th>
                            <td>{display}</td>
                        </tr>
                        <tr>
                            <th>Batery</th>
                            <td>{batery}</td>
                        </tr>
                        <tr>
                            <th>Ram</th>
                            <td>{ram}</td>
                        </tr>
                        <tr>
                            <th>Storage</th>
                            <td>{storage}</td>
                        </tr>
                        <tr>
                            <th>Processor</th>
                            <td>{procesor}</td>
                        </tr>
                        <tr>
                            <th>Camera</th>
                            <td>{camera}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetails;