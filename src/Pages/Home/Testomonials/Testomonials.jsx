import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// import { Rating } from '@smastrom/react-rating'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testomonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <section>
                <SectionTitle
                    headings={'---What Our Clients Say---'}
                    subHeading={'Testomonial'}
                ></SectionTitle>
                <Swiper
                    // pagination={{
                    //     type: 'progressbar',
                    // }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="text-center mx-20 space-y-4 flex flex-col items-center my-16">
                                    <Rating 
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p>{review.details}</p>
                                    <p className="text-3xl text-yellow-500">{review.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testomonials;