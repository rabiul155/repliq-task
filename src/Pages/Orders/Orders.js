import React, { useEffect, useState } from 'react';
import Loading from '../../components/Shared/Loading';

const Orders = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
                setLoader(false)

            })
    }, [])
    return (
        <div>
            {
                loader ?
                    <Loading></Loading>
                    :
                    <div>

                        <h2 className=' text-4xl text-primary text-center m-4 font-bold'>Total Order</h2>
                        <div className="overflow-x-auto mx-3">
                            <table className="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th>Index</th>
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Buyer</th>
                                        <th>Date</th>
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
                                                <td>{product.email}</td>
                                                <td>{product.date}</td>
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

export default Orders;