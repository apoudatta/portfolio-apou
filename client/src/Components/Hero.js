import React from 'react';
import profile_img from '../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

    const openPdf = () => {
        const pdfUrl = `${process.env.PUBLIC_URL}/resume-of-apou-datto.pdf`;
        window.open(pdfUrl, '_blank');
    };

    return (
        <div id='home' className='flex items-center flex-col gap-6'>
            <img src={profile_img} alt='' className="mt-24 w-64 h-auto md:mt-36 md:h-96 md:w-auto rounded-full " />
            <h1 className='mt-12 w-11/12 text-5xl text-center md:w-3/4 md:text-6xl font-semibold '>
                <span className='bg-custom bg-clip-text text-transparent'>I'm Apou Datto,</span> Full-Stack Web Developer
            </h1>
            <p className='w-3/5 md:w-1/2 text-center text-lg md:text-2xl mx-0 my-2'>
                Specializing in Dynamic, Responsive and Scalable Web Applications | Laravel, MySQL, JS, React, WordPress Expert.
            </p>
            <div className='hero-action flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-medium mb-12'>
                <div className='bg-custom px-7 md:px-11 py-5 md:py-6 rounded-full  hover:border-2'>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <div onClick={openPdf}
                    className='px-12 md:px-20 py-5 md:py-6 rounded-full border-2 border-black dark:border-white hover:border-2 hover:border-[#B415FF] anchor-link'>
                    My Resume
                </div>
            </div>
        </div>
    );
};

export default Hero;