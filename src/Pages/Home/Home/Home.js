import React from 'react';
import Banner from '../Banner/Banner';
import BestPhoto from '../BestPhoto/BestPhoto';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import PhotographerStory from '../PhotographerStory/PhotographerStory';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <PhotographerStory></PhotographerStory>
            <PhotoAlbum></PhotoAlbum>
            <BestPhoto></BestPhoto>
        </div>
    );
};

export default Home;