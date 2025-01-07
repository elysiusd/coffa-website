import React from 'react';


function Contact() {
    return (
        <section className='w-full'>
            <div className='flex flex-col lg:w-[1240px] mx-auto items-center px-10'>
                <div>
                    <h1 className='text-5xl font-bold font-mono my-12'>GET IN TOUCH</h1>
                </div>
                <div className=''>
                    <input type='text' placeholder='Your Name' className='text-black h-[50px] w-full rounded-xl px-3 my-3 bg-slate-100'/>
                    <input type='email' placeholder='Your Email' className='text-black h-[50px] w-full rounded-xl px-3 my-3 bg-slate-100'/>
                    <input type='telephone' placeholder='Your Number' className='text-black h-[50px] w-full rounded-xl px-3 my-3 bg-slate-100'/>
                    <textarea className='text-black h-[110px] w-full rounded-xl px-8 py-7 my-3 bg-slate-100' placeholder='Message'>

                    </textarea>
                    <div className='flex justify-center mb-10'>
                       <button type='submit' className='bg-red-500 px-16 py-3 items-center text-center rounded-full text-white'>Send</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Contact;