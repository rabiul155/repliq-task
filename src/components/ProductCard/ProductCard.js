import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const ProductCard = ({ product }) => {
    const { price, _id, name, about, picture } = product;
    const { user } = useContext(AuthContext)

    const cartProduct = {

        email: user?.email,
        name,
        price,
        picture,
        about,
        date: new Date().toLocaleDateString(),
        quantity: 1

    }

    const handleAddToCart = () => {

        if (user?.uid) {
            fetch(`https://repliq-task-server.vercel.app/cart`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Product added');
                })
        }
        else {
            toast.success('Please Log In Fist')
        }
    }

    return (
        <div className="card card-compact mx-auto w-[350px] bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Pirce : ${price}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/item/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    <button onClick={handleAddToCart} className="btn btn-secondary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
