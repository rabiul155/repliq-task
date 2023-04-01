import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import img1 from '../../Images/p1.png'
import img2 from '../../Images/p2.png'
import img3 from '../../Images/p3.png'

import Loading from '../../components/Shared/Loading';
import { AuthContext } from '../../context/AuthProvider';
import CartProduct from '../../components/CartProduct/CartProduct';



const Cart = () => {



    const { user } = useContext(AuthContext);


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['cartProduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    let totalCost = 0;

    if (products) {
        for (const prosuct of products) {
            const price = prosuct.price;
            const quantity = prosuct.quantity;
            const productPrice = price * quantity;
            totalCost = totalCost + productPrice
        }
    }

    const serviceCharge = totalCost * 0.02
    const vat = totalCost * 0.05
    const total = totalCost + serviceCharge + vat;


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' grid grid-cols-4 mt-6'>
            <div className='col-span-3'>
                {
                    products.map(product => <CartProduct
                        key={product._id}
                        product={product}
                        refetch={refetch}

                    ></CartProduct>)
                }


            </div>


            {/* cart calculation  */}


            <div >
                <div className=" w-72 bg-base-200 shadow-xl">
                    <div className="flex text-xl flex-col p-6 space-y-4 divide-y  sm:p-10 divide-gray-700  dark:text-gray-900">
                        <h2 className="text-2xl font-semibold">Order items</h2>
                        <ul className="flex flex-col pt-4 space-y-2">
                            <li className="flex items-start justify-between">
                                <h3>
                                    Product Price
                                </h3>
                                <div className="text-right">

                                    ${totalCost}
                                </div>
                            </li>
                        </ul>

                        <div className="pt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Vat </span>
                                <span>${vat.toFixed(2)}</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span>Delivery fee</span>
                                    <span>${serviceCharge.toFixed(2)}</span>
                                </div>

                            </div>

                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">${total.toFixed(2)}</span>
                            </div>
                            <label htmlFor="my-modal-3" className="btn w-full">Pay Bill</label>
                        </div>
                    </div>
                </div>



                {/* modal section  */}

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-base-200 relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Pay Your bill
                            via following payment method</h3>
                        <h3 className="text-lg font-bold">Total Cost : ${totalCost}</h3>
                        <div className=' grid grid-cols-3 gap-4 my-8'>
                            <img src={img1} alt="" className=' shadow-2xl rounded-lg hover:shadow-2xl' />
                            <img src={img2} alt="" className=' shadow-2xl  rounded-lg hover:shadow-2xl' />
                            <img src={img3} alt="" className=' shadow-2xl  rounded-lg hover:shadow-2xl' />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Cart;