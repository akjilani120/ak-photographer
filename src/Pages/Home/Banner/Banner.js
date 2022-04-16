import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/banner img/banner-1.jpg'
import banner2 from '../../img/banner img/banner-2.jpg'
import banner3 from '../../img/banner img/banner-3.jpg'
import banner4 from '../../img/banner img/banner-4.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img style={{height:"550px"}}
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='banner-title'>Create Photography Store</h3>
                        <p>Create  your albunm.Take is long time.Use to the album for Future </p>
                        <button className='find-btn'>Find more</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"550px"}}
                        className="d-block w-100"
                        src={ banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>Emotion and Happiness Time Click photo</h3>
                        <p>Emotion and happiness time is the best time in our life.So save the time for photo.It take long time </p>
                        <button className='find-btn'>Find more</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"550px"}}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>Unique moments and cremoney Time Photography</h3>
                        <p>Unique moments and cremoney time it is our life of special moment.</p>
                        <button className='find-btn'>Find more</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"550px"}}
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>Touries Time Photography</h3>
                        <p>Photographs are used as important factors that affect decision making about travel destinations of tourists, </p>
                        <button className='find-btn'>Find more</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;