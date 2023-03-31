import React from 'react';
import img1 from '../../Images/1.jpg'
import img2 from '../../Images/2.jpg'
import img3 from '../../Images/3.png'
import img4 from '../../Images/4.jpg'


const Carousel = () => {
    return (
        <div className=' lg:mx-16 mb-20'>
            <div>
                <h2 className='text-5xl font-bold text-center text-primary mb-20 my-10'>Buy Our Most Popular Product</h2>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className=' flex justify-between items-center'>
                        <img src={img1} alt='img' className="h-96" />
                        <div className='mx-10'>
                            <h1 className='font-bold text-5xl py-4'>Iphone 13 pro max</h1>
                            <h3 className='text-3xl font-bold py-4'>Price : $999</h3>
                            <button className='btn my-4  w-[150px] btn-outline'>Buy Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className=' flex justify-between items-center'>
                        <img src={img4} alt='img' className="h-96" />
                        <div className='mx-10'>
                            <h1 className='font-bold text-5xl py-4'>Galaxy S22 Ultra</h1>
                            <h3 className='text-3xl font-bold py-4'>Price : $1299</h3>
                            <button className='btn my-4  w-[150px] btn-outline'>Buy Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className=' flex justify-between items-center'>
                        <img src={img3} alt='img' className="h-96" />
                        <div className='mx-10'>
                            <h1 className='font-bold text-5xl py-4'>Redmi Note 12 Pro max</h1>
                            <h3 className='text-3xl font-bold py-4'>Price : $599</h3>
                            <button className='btn my-4  w-[150px] btn-outline'>Buy Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className=' flex justify-between items-center'>
                        <img src={img2} alt='img' className="h-96" />
                        <div className='mx-10'>
                            <h1 className='font-bold text-5xl py-4'>Iphone 12 pro max</h1>
                            <h3 className='text-3xl font-bold py-4'>Price : $899</h3>
                            <button className='btn my-4  w-[150px] btn-outline'>Buy Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;