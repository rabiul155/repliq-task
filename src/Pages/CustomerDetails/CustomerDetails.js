import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Loading from '../../components/Shared/Loading';


const CustomerDetails = () => {

    const [customer, setCustomer] = useState();
    const [loading, setLoading] = useState(false)

    const userEmail = useParams()

    const products = useLoaderData();





    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/customer/${userEmail?.email}`)
            .then(res => res.json())
            .then(data => {
                setCustomer(data);
                setLoading(false)

            })

    }, [userEmail.email])

    console.log(customer);


    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :

                    <div className="card card-compact mt-5 w-96 lg:w-3/4 mx-auto bg-base-100 shadow-xl">
                        <figure><img src={customer?.photo} alt="customer Img" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-xl ">Customer Name : {customer?.name}</h2>
                            <h2 className="font-bold text-md ">Customer Email : {customer?.email}</h2>
                            <h2 className="font-bold text-md mb-6 ">Total Order : {products?.length} products</h2>


                            <table className="table table-zebra w-full">

                                <thead>

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
                                                        <img src={product?.picture} alt='' />
                                                    </div>

                                                </td>
                                                <td>{product?.name}</td>
                                                <td>{product?.date}</td>
                                            </tr>)
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
            }


        </div>
    );
};

export default CustomerDetails;