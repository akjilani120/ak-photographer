import React from 'react';
import { Card, Col } from 'react-bootstrap';

const PhotoDetail = ({photo}) => {
    const {name, place, img, Price, date, imgDetails}=photo
    return (
        <Col className='text-start' >
        <Card style={{height:"500px"}}>
          <Card.Img style={{height:"234px"}} variant="top" src={img} />
          <Card.Body>
            <Card.Title> <h2> {name}</h2></Card.Title>
            <Card.Text>
            <h5>Place: {place}</h5>            
            </Card.Text>
            <Card.Text>
             <h2>Price <b>$ {Price}</b> </h2>          
            </Card.Text>
            <Card.Text>
            <p> <b>Date : </b> {date}</p>           
            </Card.Text>
            <Card.Text>
             <p> <b>Description :</b>  {imgDetails}   </p>          
            </Card.Text>          
           
          </Card.Body>
         
        </Card>       
      </Col>
    );
};

export default PhotoDetail;