import React from 'react';
import { Container } from 'react-bootstrap';
import './PhotographerStory.css'
const PhotographerStory = () => {
    return (
        <div>
           <Container>
               <div className="photographerstory">
                   <div className='story-Details'>
                        <h1 className='story-title'>We're great a small and enthusiastic photography  based in New York</h1>
                        <p className='story-about'>A photographer is someone who is skilled at taking pictures or photographs with a camera. An amateur photographer takes pictures for their own use. A professional photographer takes pictures as all or part of their job. Many people hire a photographer for their wedding, debutante party or other special events</p> 
                   </div>
               </div>
           </Container>
        </div>
    );
};

export default PhotographerStory;