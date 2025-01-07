import React from 'react';
import blogImg1 from '../assets/images/blog-img1.png'
import blogImg2 from '../assets/images/blog-img2.png'
import { gsap } from 'gsap';

function Blog() {
    
    return (
        <section className='w-full'>
            <div className='lg:w-[1240px] mx-auto lg:px-32 md:px-10 px-5 mt-10'>
                <div>
                    <h1 className='uppercase text-4xl font-mono font-bold mb-14'>Our blog</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-7'>
                    <div className='md:w-1/2'>
                        <div className='shadow-lg hover:scale-105 ease-in-out duration-300'>
                            <span className=' absolute bg-red-500 text-white py-5 px-4 uppercase'>08 June</span>
                            <img src={blogImg1} alt='blogImg'/>
                            <div className=' mx-auto px-5'>
                            <h1 className='font-bold text-xl py-4'>PREP TECHNIQUES COFFEE</h1>
                            <p className='text-gray-500 pb-7'>distracted by the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page 
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more
                            </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='border border-red-500 bg-white text-red-500 uppercase px-7 py-3 rounded-md my-10 items-center justify-center'>Read More</button>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <div className='shadow-lg hover:scale-105 ease-in-out duration-300'>
                            <span className=' absolute bg-red-500 text-white py-5 px-4 uppercase'>08 June</span>
                            <img src={blogImg2} alt='blogImg'/>
                            <div className=' mx-auto px-5'>
                            <h1 className='font-bold text-xl py-4'>PREP TECHNIQUES COFFEE</h1>
                            <p className='text-gray-500 pb-7'>distracted by the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page 
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more
                            </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='border border-red-500 bg-white text-red-500 uppercase px-7 py-3 rounded-md my-10 items-center justify-center'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Blog;
