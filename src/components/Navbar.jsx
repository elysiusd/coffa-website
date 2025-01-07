import bannerBg from '../assets/images/banner-bg.png'
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const divRef = useRef(null);

    useEffect(() => {
      // Trigger the slide-away animation when the component mounts
      gsap.to(divRef.current, {
        x: "-100%", // Moves the div 100% of its width to the right
        duration: 4, // Animation duration in seconds
        ease: "power4.out", // Smooth easing
      });

    }, []); // Empty dependency array ensures this runs once after mount

    
  
   

    const [click, setClick] = useState(false);

    const handleNav = () => {
        setClick(!click);
    }
    const navSlideData = [
        {
            header: `Coffee`,
            header2: `Shop`,
            text: `more-or-less normal distribution of letters, as opposed to using`
        },
        {
            header: `Coffee`,
            header2: `Shop`,
            text: `more-or-less normal distribution of letters, as opposed to using`
        },
        {
            header: `Coffee`,
            header2: `Shop`,
            text: `more-or-less normal distribution of letters, as opposed to using`
        },
    ]
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <FaUser/>,
        prevArrow: <FaUser/>
    }


    return (
        <nav className='w-full'>
        
            <div className=" text-white h-fit lg:h-[750px] bg-cover" style={{
            backgroundImage: `url(${bannerBg})`,
        }}>
            <div ref={divRef} className='bg-black h-[750px] w-full absolute box opacity-15'>
            
            </div>
            <div className='lg:w-[1240px] mx-auto px-10 py-10'>
                <div className="flex flex-row justify-between">
                    <div>
                       <h1 className="font-bold text-5xl font-sans uppercase">Coffa </h1>
                    </div>
                    <div className='lg:hidden bg-white text-black px-4 rounded-md  hover:bg-red-600 ease-in-out duration-1000' onClick={handleNav}>
                        <IoMdMenu size={40} />
                    </div>
                <div className='hidden lg:flex'>
                    <ul className='flex flex-row gap-10 uppercase'>
                        <li className={`text-lg ${isActive("/home") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/home'>Home</a></li>
                        <li className={`text-lg ${isActive("/about") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/about'>About</a></li>
                        <li className={`text-lg ${isActive("/coffee") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/coffee'>Coffees</a></li>
                        <li className="text-lg hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer">Blog</li>
                        <li className={`text-lg ${isActive("/contact") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='lg:block hidden '>
                    <ul className='flex flex-row gap-5 uppercase'>
                        <li className="text-lg  hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer"><FaUser size={20} /> </li>
                        <li className="text-lg hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer">Login</li>
                        <li className="text-lg hover:text-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer "><FaSearch size={20} />                        </li>
                    </ul>
                </div>
                </div>
            <div className={`transition-all transform ${
    click
      ? '-translate-y-0 opacity-100 ease-in-out duration-1000'
      : 'absolute -translate-y-[500px] opacity-0 ease-in-out duration-100'
  } left-96 lg:hidden`}>
            <div className='flex justify-center w-80%'>
                    <ul className='flex flex-col gap-3 uppercase'>
                        <li className={`text-lg ${isActive("/home") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/home'>Home</a></li>
                        <li className={`text-lg ${isActive("/about") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/about'>About</a></li>
                        <li className={`text-lg ${isActive("/coffee") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/coffee'>Coffees</a></li>
                        <li className="text-lg hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer">Blog</li>
                        <li className={`text-lg ${isActive("/contact") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
                <div className=' '>
                    <ul className='flex flex-row gap-5 uppercase'>
                        <li className="text-lg hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer"><FaUser size={20} /> </li>
                        <li className="text-lg hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer">Login</li>
                        <li className="text-lg hover:text-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer "><FaSearch size={20} />                        </li>
                    </ul>
                </div>
            </div>

                <div className=''>
                <div className='my-20'>
                <Slider {...settings}>
                        {navSlideData.map((d) => (
                            <div className=''>
                            <h1 className='font-bold text-7xl font-mono pb-10'>{d.header} <br/> {d.header2}</h1>
                            <p className='pb-10'>{d.text}</p>
                            <div className='flex gap-2'>
                            <button className='bg-red-600 px-6 py-4 uppercase rounded-md'>About Us</button>
                            <button className='bg-white text-black px-6 py-4 uppercase rounded-md'>Call now</button>
                            </div>
                            </div>
                        ))}
                </Slider>
                </div>
        

                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;