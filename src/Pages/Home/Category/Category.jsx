
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../../../src/assets/home/slide1.jpg'
import slider2 from '../../../../src/assets/home/slide2.jpg'
import slider3 from '../../../../src/assets/home/slide3.jpg'
import slider4 from '../../../../src/assets/home/slide4.jpg'
import slider5 from '../../../../src/assets/home/slide5.jpg'
import slider6 from '../../../../src/assets/home/slide4.jpg'
import SectionTitle from '../../../components/SectionTitle';



const Category = () => {
    return (
        <div>
            <section>
                <SectionTitle headings={'From 11:00am to 10:00pm'}
                    subHeading={'ORDER ONLINE'}>
                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
                >
                    <SwiperSlide className='group'>
                        <img className='group-hover:scale-110 transition' src={slider1} alt="" />
                        <h1 className='text-center text-3xl text-white -mt-10'>Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='hover:scale-110 transition'  src={slider2} alt="" />
                        <h1 className='text-center text-3xl text-white -mt-10'>Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='hover:scale-110 transition'  src={slider3} alt="" />
                        <h1 className='text-center text-3xl text-white -mt-10'>Pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='hover:scale-110 transition' src={slider4} alt="" />
                        <h1 className='text-center text-3xl text-white -mt-10'>Soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='hover:scale-110 transition'   src={slider5} alt="" />
                        <h1 className='text-center text-3xl text-white -mt-10'>Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='hover:scale-110 transition'  src={slider6} alt="" />
                        <h1 className='text-center text-3xl text-white -mt-10'>Bread</h1>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;