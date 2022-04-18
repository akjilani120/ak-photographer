import React from 'react';
import './About.css'
import img from '../img/my-photo.jpg'
const About = () => {
    return (
        <div className='container about-header'>
           <div className='about-me'>
            <h1 className='text-primary mb-3'>About Me</h1>
            <div className='about-details'>
              <img className='' src={img} alt="" />
              
              <ul className='about-list'>
                  <li><h4><b>Name : </b>Abdul Kader Jilani</h4></li>
                  <li><h4> <b>My Goal :</b> I will work very hard to reach the main purpose. I will use the time properly. I will do everything like watching videos and time. I will practice more and more. Inshallah I will do everything I can to reach the main goal.</h4></li>
              </ul>
            </div>
           </div>
        </div>
    );
};

export default About;