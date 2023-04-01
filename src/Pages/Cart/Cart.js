import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import img1 from '../../Images/p1.png'
import img2 from '../../Images/p2.png'
import img3 from '../../Images/p3.png'
import CartProduct from '../../components/CartProduct/CartProduct';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../components/Shared/Loading';

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
            totalCost = totalCost + productPrice;


        }
    }



    // console.log(checkout);
    // console.log(products)

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
            <div >
                <div className="card w-72 bg-base-200 shadow-xl">

                    <div className="card-body">
                        <h2 className=" text-2xl font-bold text-center pb-4">Checkout</h2>
                        <p className=' font-bold py-4 text-2xl'>Total Cost : ${totalCost}</p>
                        <div className="card-actions justify-end">
                            <label htmlFor="my-modal-3" className="btn w-full">Pay Bill</label>

                        </div>
                    </div>
                </div>



                {/* modal section  */}

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
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