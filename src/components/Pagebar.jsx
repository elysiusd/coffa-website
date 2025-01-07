import bannerBg from '../assets/images/header-bg.png'
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';



function Pagebar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

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

    return (
        <nav className='w-full'>
        
            <div className=" text-white h-fit lg:h-[150px] bg-cover" style={{
            backgroundImage: `url(${bannerBg})`,
        }}>
            <div className='lg:w-[1240px] mx-auto px-10 py-10'>
                <div className="flex flex-row justify-between">
                    <div>
                       <h1 className="font-bold text-5xl font-sans uppercase"><a href='/home'>Coffa</a> </h1>
                    </div>
                    <div className='lg:hidden bg-white text-black px-4 rounded-md  hover:bg-red-600 ease-in-out duration-1000' onClick={handleNav}>
                        <IoMdMenu size={40} />
                    </div>
                <div className='hidden lg:flex'>
                    <ul className='flex flex-row gap-10 uppercase'>
                        <li className={`text-lg ${isActive("/home") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/home'>Home</Link></li>
                        <li className={`text-lg ${isActive("/about") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/about'>About</Link></li>
                        <li className={`text-lg ${isActive("/coffee") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/coffee'>Coffees</Link></li>
                        <li className="text-lg hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer">Blog</li>
                        <li className={`text-lg ${isActive("/contact") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className='lg:block hidden '>
                    <ul className='flex flex-row gap-5 uppercase'>
                        <li className="text-lg hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer"><FaUser size={20} /> </li>
                        <li className="text-lg hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer">Login</li>
                        <li className="text-lg hover:text-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer "><FaSearch size={20} />   </li>
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
                         <li className={`text-lg ${isActive("/home") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/home'>Home</Link></li>
                        <li className={`text-lg ${isActive("/about") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/about'>About</Link></li>
                        <li className={`text-lg ${isActive("/coffee") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/coffee'>Coffees</Link></li>
                        <li className="text-lg hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer">Blog</li>
                        <li className={`text-lg ${isActive("/contact") ? 'bg-red-600 px-6 py-4 cursor-pointer':'hover:bg-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer'}`}><Link to='/contact'>Contact</Link></li>
                   </ul>
                </div>
                <div className=' '>
                    <ul className='flex flex-row gap-5 uppercase'>
                        <li className="text-lg hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer"><FaUser size={20} /> </li>
                        <li className="text-lg hover:text-red-600  py-4 ease-in-out duration-1000 cursor-pointer">Login</li>
                        <li className="text-lg hover:text-red-600 px-6 py-4 ease-in-out duration-1000 cursor-pointer "><FaSearch size={20} /></li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
        </nav>
    );
}

export default Pagebar;
