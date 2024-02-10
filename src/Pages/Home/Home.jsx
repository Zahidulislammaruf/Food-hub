import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Delax | Home</title>
      </Helmet>  
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <FeaturedItem></FeaturedItem>
             <Review></Review>
        </div>
    );
};

export default Home;