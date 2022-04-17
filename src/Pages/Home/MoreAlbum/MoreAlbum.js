import React from 'react'
import './MoreAlbum.css'
import img from '../../img/album/ablum-1.jpg'
import imga from '../../img/album/album-2.jpg'
import imgb from '../../img/album/album-4.jpg'
import imgc from '../../img/album/album-5.jpg'
import imgd from '../../img/album/album-6.jpg'
import imge from '../../img/album/album-7.jpg'
import imgf from '../../img/album/allbum-8.jpg'
const MoreAlbum = () => {
    return (
        <div>
            <h1 className='gallery-title text-primary'>Images Gallery</h1>
            <div className='gallery-header'>
                <div className="img-part"><img src={img} alt="" /></div>
                <div className="img-part"><img src={imga} alt="" /></div>
                <div className="img-part"><img src={imgb} alt="" /></div>
                <div className="img-part"><img src={imgc} alt="" /></div>
                <div className="img-part"><img src={imgd} alt="" /></div>
                <div className="img-part"><img src={imge} alt="" /></div>
                <div className="img-part"><img src={imgf} alt="" /></div>
                {/* <div className="img-part"><img src={img8} alt="" /></div>
                <div className="img-part"><img src={img9} alt="" /></div> */}
            </div>
        </div>
    );
};

export default MoreAlbum;