import React from 'react';
import img from '../img/not-found.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found' >
            <img className='not-found' src={img} alt="" />
        </div>
    );
};

export default NotFound;