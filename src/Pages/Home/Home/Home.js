import React from 'react';
import Banner from '../Banner/Banner';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import PhotographerStory from '../PhotographerStory/PhotographerStory';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <PhotographerStory></PhotographerStory>
            <PhotoAlbum></PhotoAlbum>
        </div>
    );
};

export default Home;