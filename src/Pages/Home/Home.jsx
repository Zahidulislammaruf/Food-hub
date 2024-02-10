import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <FeaturedItem></FeaturedItem>
             <Review></Review>
        </div>
    );
};

export default Home;