import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import menuImg1 from '../assets/images/img-1.png'
import menuImg3 from '../assets/images/img-3.png'
import menuImg4 from '../assets/images/img-4.png'
import menuImg2 from '../assets/images/img-2.png'
import {gsap} from 'gsap';



function Menu() {
    const menuData = [
        {
            img: menuImg1,
            title: `TYPES OF COFFEE`,
            text: `looking at its layout. The point of`
        },
        {
            img: menuImg2,
            title: `BEAN VARIETIES`,
            text: `looking at its layout. The point of`
        },
        {
            img: menuImg3,
            title: `COFFEE & PASTRY`,
            text: `looking at its layout. The point of`
        },
        {
            img: menuImg4,
            title: `COFFEE TO GO`,
            text: `looking at its layout. The point of`
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true, 
    }
    const MDsettings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true, 
    }
    const SMsettings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true, 
    }
    return (

        <section className=''>
            <div className='flex justify-center items-center'>
                <h1 className='font-bold text-4xl pt-10'>OUR COFFEE OFFER</h1>
            </div>
            <div className='hidden lg:flex flex-col mx-auto px-20 my-10' >
                <Slider {...settings} className=''>
                                {menuData.map((menuD, index) => (
                                    <div key={index} className='flex flex-col items-center text-white justify-center text-center'>
                                        <div className='bg-gray-900 mx-3 hover:bg-red-600 ease-in-out duration-700 hover:scale-105'>
                                            <img src={menuD.img} alt={menuD.title} className="w-full h-[300px] object-cover mb-4" />
                                            <h1 className='text-3xl my-6'>{menuD.title}</h1>
                                            <p className='my-5'>{menuD.text}</p>
                                            <button className=' uppercase  border border-white px-5 py-3 rounded-md mb-5'>Read More</button>
                                        </div>
                                    </div>
                                ))}
                </Slider>
            </div>
            <div className='hidden md:flex lg:hidden flex-col mx-auto px-10 my-10'>
            <Slider {...MDsettings} className=''>
                                {menuData.map((menuD, index) => (
                                    <div key={index} className='flex flex-col items-center text-white justify-center text-center'>
                                        <div className='bg-gray-900 mx-3 hover:bg-red-600 ease-in-out duration-700 hover:scale-105'>
                                            <img src={menuD.img} alt={menuD.title} className="w-full h-[300px] object-cover mb-4" />
                                            <h1 className='text-3xl my-6'>{menuD.title}</h1>
                                            <p className='my-5'>{menuD.text}</p>
                                            <button className=' uppercase  border border-white px-5 py-3 rounded-md mb-5'>Read More</button>
                                        </div>
                                    </div>
                                ))}
                </Slider>
            </div>
            <div className='md:hidden flex flex-col mx-auto px-2 my-10'>
            <Slider {...SMsettings} className=''>
                                {menuData.map((menuD, index) => (
                                    <div key={index} className='flex flex-col items-center text-white justify-center text-center'>
                                        <div className='bg-gray-900 mx-3 hover:bg-red-600 ease-in-out duration-700 hover:scale-105'>
                                            <img src={menuD.img} alt={menuD.title} className="w-full h-[300px] object-cover mb-4" />
                                            <h1 className='text-3xl my-6'>{menuD.title}</h1>
                                            <p className='my-5'>{menuD.text}</p>
                                            <button className=' uppercase  border border-white px-5 py-3 rounded-md mb-5'>Read More</button>
                                        </div>
                                    </div>
                                ))}
                </Slider>
            </div>
        </section>
             
    );
}

export default Menu;
