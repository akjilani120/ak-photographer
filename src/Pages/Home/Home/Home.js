import React from 'react';
import Banner from '../Banner/Banner';
import BestPhoto from '../BestPhoto/BestPhoto';
import MoreAlbum from '../MoreAlbum/MoreAlbum';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import PhotographerStory from '../PhotographerStory/PhotographerStory';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <PhotographerStory></PhotographerStory>
            <PhotoAlbum></PhotoAlbum>
            <BestPhoto></BestPhoto>
            <MoreAlbum></MoreAlbum>
        </div>
    );
};

export default Home;