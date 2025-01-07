import aboutImg from '../assets/images/about-img.png';

function About() {
   

    return (
        <section className="w-full bg-white py-10">
            <div className="lg:w-[1240px] mx-auto px-14 mt-20">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-1/2 lg:pr-10">
                        <h1 className="uppercase font-bold font-sans text-2xl mb-5 lg:text-4xl text-gray-900">ABOUT OUR SHOP</h1>
                        <h3 className="text-3xl font-sans mb-7 text-gray-800">Coffee distribution</h3>
                        <p className="mb-10 text-gray-700">
                            has a more-or-less normal distribution of letters, as opposed to using 
                            'Content here, content here', making it look like readable English. Many desktop publishing packages
                            and web page editors have a more-or-less normal distribution of letters, as opposed.
                        </p>
                        <button className="border border-red-600 bg-white text-red-600 uppercase px-7 py-3 rounded-md mb-10 lg:mb-0">Read More</button>
                    </div>
                    <div>
                        <img src={aboutImg} alt="about" className="lg:h-[65%]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
