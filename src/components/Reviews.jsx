import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientImg1 from '../assets/images/client-img1.png'
import clientImg2 from '../assets/images/client-img2.png'
import clientImg3 from '../assets/images/client-img3.png'
import clientBgImg from '../assets/images/client-bg.png'

function Reviews() {

    const data = [
        {
            name: `Joy Mark`,
            img: clientImg1,
            review: `now use Lorem Ipsum as their default model text, and a search for
                             'lorem ipsum' will uncover many web 
                            sites still in their infancynow use Lorem Ipsum 
                            as their default model text`,
        },
        {
            name: `Joy Line`,
            img: clientImg2,
            review: `now use Lorem Ipsum as their default model text, and a search for
                             'lorem ipsum' will uncover many web 
                            sites still in their infancynow use Lorem Ipsum 
                            as their default model text`,
        },
        {
            name: `Jame Mark`,
            img: clientImg3,
            review: `now use Lorem Ipsum as their default model text, and a search for
                             'lorem ipsum' will uncover many web 
                            sites still in their infancynow use Lorem Ipsum 
                            as their default model text`,
        }
    ]
    const Msettings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true
    };
    return (
        <section className='w-full lg:h-[400px] brightness-75' style={
            {
                backgroundImage: `url(${clientBgImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }
        }>
            <div className='lg:w-[1240px] mx-auto lg:px-32 px-2 md:px-10 my-20'>
                <div >
                    <div>
                        <h1 className='capitalize font-bold text-4xl pb-3'>What customers say</h1>
                    </div>
                    <div className='flex flex-col  bg-red-600 text-white'>
                        <Slider {...Msettings}>
                            {data.map((d) => (
                                <div className='flex flex-row'>
                                    <div className=''>
                                      <img src={d.img} alt=''/>
                                    </div>
                                    <div className='px-10'>
                                        <h1 className='font-serif font-bold text-3xl'>{d.name}</h1>
                                        <p className='py-5'>{d.review}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>                    
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Reviews;
