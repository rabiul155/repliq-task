import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Shared/Loading';


const Products = () => {

    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://repliq-task-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
                setLoading(false)

            })
    }, [])

    console.log(products);

    return (

        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className=' grid md:grid-cols-3 grid-cols-1 gap-4 m-4'>
                        {
                            products?.map(product => <ProductCard
                                key={product._id}
                                product={product}

                            ></ProductCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;