import React from 'react';
import { Row } from 'react-bootstrap';
import CustomData from '../../CustomData/CustomData';
import Photos from '../Photos/Photos';
import './PhotoAlbum.css'
const PhotoAlbum = () => {
    const photos = CustomData()
    return (
        <div className='mb-5'>
            <h1 className='ablum-title'> Photo Albums </h1>
            <div className='container'>
                <Row xs={1} md={3} className="g-4">                   
                        
                {
                    photos.map(photo => <Photos photo={photo} key={photo.id} ></Photos>)
                }
                    
                </Row>
                
            </div>
        </div>
    );
};

export default PhotoAlbum;