import React from 'react';
import { FaFacebook, FaSquareInstagram} from "react-icons/fa6";
import { FaTwitter, FaLinkedin,  FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import footerBgImg from '../assets/images/footer-bg.png'

function Footer() {
    return (
        <footer className='relative bottom-0 bg-stone-900 w-full h-[300px] text-white' style={
            {
                backgroundImage: `url(${footerBgImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        }>
            <div className='lg:w-[1240px] mx-auto px-10 py-10'>
                <div className='flex flex-row gap-3 justify-center'>
                    <FaFacebook size={35} className='text-white' />
                    <FaTwitter  size={35} className='text-white'/>
                    <FaLinkedin size={35} className='text-white'/>
                    <FaSquareInstagram size={40} className='text-white'/>
                </div>
                <div className='flex flex-row justify-center gap-2 pt-10'>
                    <FaPhone size={15}/>
                    <span className='pr-5'>+01 1234567890</span>
                    <MdEmail size={20} />
                    <span>
                    demo@gmail.com</span>
                </div>
                <div className='flex flex-row justify-center pt-6'>
                    <input type='email' placeholder='Your Email..' className='w-[60%] px-3 border border-red-600'/>
                    <button className='bg-red-600 py-4 px-5'><GrLinkNext size={20}/> </button>
                </div>

            </div>
            <div className='bg-red-600 text-white h-[80px] flex mx-auto justify-center pt-7'>

                    <p>2024 All Rights Reserved. Design by <a href="" className='text-blue-500 underline'>Destiny</a></p>

            </div>

            
        </footer>
    );
}

export default Footer;