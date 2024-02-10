import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Review = () => {

    const [client,setClient] = useState([])
    useEffect(()=>{
      fetch('reviews.json')
      .then(res=>res.json())
      .then(data=>setClient(data))  
    },[])

    return (
        <div>
            <div>
                <SectionTitle heading={'Testimonials'} subHeading={'What Our Client Say'}></SectionTitle>
            </div>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            client.map(review=> <SwiperSlide key={review._id}>
                <div className="m-12 flex flex-col items-center">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <p>
                      {review.details}  
                    </p>
                    <p className="text-2xl text-orange-400 text-center">{review.name}</p>
                </div>

            </SwiperSlide>)
        }
        
      </Swiper>
            </div>
            
        </div>
    );
};
export default Review;
