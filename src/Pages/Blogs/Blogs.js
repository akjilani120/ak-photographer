import React from 'react';
import './Blogs.css'
import CustomData from '../CustomData/CustomData'
import { Row } from 'react-bootstrap';
import PhotoDetail from './PhotoDetail/PhotoDetail';
import { Link } from 'react-router-dom';
const Blogs = () => {
    const photos=CustomData()
    return (
        <div>
            <h1 className='text-primary my-5'>Photos Details</h1>
             <div className='checkout sticky-top'>
                <Link to='/checkout'>
                <button className='btn btn-primary  check-btn  py-2 '> Check Out Your Picture </button>
                </Link>
             </div>
            <div className='container mb-5'>
                <Row xs={1} md={2} className="g-4">                   
                   {
                       photos.map(photo => <PhotoDetail photo={photo} key={photo.id}></PhotoDetail>)
                   }     
               
                    
                </Row>
                 <div>
                
                 </div>
                
            </div>
        </div>
    );
};

export default Blogs;