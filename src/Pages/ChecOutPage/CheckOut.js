import React from 'react';
import img from '../img/thank.jpg'
import './CheckOut.css'
const CheckOut = () => {
    return (
        <div className='check container'>
            <div>
                <h1 className='text-warning mt-3'> Login my website For </h1>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default CheckOut;
