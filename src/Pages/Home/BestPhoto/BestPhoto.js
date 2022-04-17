import React from 'react';
import img from '../../img/backgroup-img.jpg'
import './BestPhoto.css'
const BestPhoto = () => {
    return (
        <div className='bg-img' style={{ backgroundImage: `url(${img})` }}>
           
            <div className='overflow'>
               <div>
                   <h1 className='best-title'>Taking beautiful pictures of a girl in <br /> the mountains of Canada</h1>
                    <p className='best-about'>I went to Canada and took a beautiful picture of a girl. That girl is very happy to see the picture. <br></br> I took this picture with care. Contact me if anyone needs to take a nice picture</p>
               </div>
            </div>
        </div>
    );
};

export default BestPhoto;