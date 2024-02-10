import SectionTitle from "../../Component/SectionTitle/SectionTitle";

import featureImage from '../../assets/home/featured.jpg'
import './FeaturedItem.css'
const FeaturedItem = () => {
    return (
        <div className="featured-item text-white bg-slate-500 bg-opacity-40  pt-8 bg-fixed my-20">
            <div className="">
                <SectionTitle heading={'Featured item'} subHeading={'Check It Out'}></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featureImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2024</p>
                    <p className=" uppercase">Where Can I Get Some</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ratione voluptatem quidem sapiente laboriosam illo itaque aliquid! Harum, magni mollitia.</p>
                  <button className="btn btn-outline border-0 border-b-4 text-white">Order now</button>
                </div>
            </div>
            
        </div>
    );
};

export default FeaturedItem;
