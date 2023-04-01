import React, { useContext, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const CartProduct = ({ product, refetch }) => {

    const { _id, name, picture, price, about, quantity } = product;


    const { user } = useContext(AuthContext);

    const [count, setCount] = useState(quantity);

    const totalPrice = count * price;


    const handleIncrese = () => {

        if (count <= 5) {
            setCount(count + 1);

            const quantity = {
                quantity: count + 1

            }
            fetch(`http://localhost:5000/updateCart?email=${user?.email}&_id=${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(quantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch();
                })
        }

    }
    const handleDecrease = () => {

        if (count >= 2) {
            setCount(count - 1);
            const quantity = {
                quantity: count - 1

            }
            fetch(`http://localhost:5000/updateCart?email=${user?.email}&_id=${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(quantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch();
                })

        }

    }

    const handleDelete = () => {

        const confirm = window.confirm('are you sure to delete this item')
        if (confirm) {
            fetch(`http://localhost:5000/item/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('item deleted');
                    refetch();

                })

        }

    }



    return (
        <div className=' m-4'>
            <div className=" bg-base-100 shadow-xl p-2 flex justify-between ">
                <div className=' flex items-center'>
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-xl hover:shadow-2xl shadow-2xl">
                            <img alt='' src={picture} />
                        </div>
                    </div>
                    <div className='px-6'>
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">Price : ${price}</h2>
                        <p>{about}</p>

                    </div>
                </div>
                <div className="flex items-center">


                    <button onClick={() => handleDecrease()} className=' px-3 text-3xl bg-base-200  border rounded-sm border-gray-300'>-</button>
                    <p className='text-2xl bg-base-200   border rounded-sm px-3 '>{count}</p>
                    <button onClick={() => handleIncrese()} className=' text-3xl bg-base-200 px-2 border rounded-sm border-gray-300'>+</button>


                    <h2 className="card-title mx-4">${totalPrice}</h2>
                    <button onClick={() => handleDelete()} className=""><FaTrashAlt className=' text-amber-600 text-4xl mx-6'></FaTrashAlt></button>

                </div>
            </div>
        </div>
    );
};

export default CartProduct;