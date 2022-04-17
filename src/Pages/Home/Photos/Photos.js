import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Photos = ({ photo }) => {
    const { name, img, place } = photo
    const navigate=useNavigate()
    const handleDetails =() =>{
      navigate("/blogs")
    }
    return (
        <Col>
        <Card>
          <Card.Img style={{height:"234px"}} variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {place}            
            </Card.Text>
            <button onClick={handleDetails} className='btn btn-primary'>More Details</button>
          </Card.Body>
        </Card>
      </Col>
       
    );
};

export default Photos;