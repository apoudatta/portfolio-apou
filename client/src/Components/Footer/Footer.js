import React from 'react';
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

const Footer = () => {
    return (
        <div className='my-2 mx-4 md:my-12 md:mx-44'>
            <div className='flex flex-col md:flex-row justify-between gap-5'>
                <div className=''>
                    <div className='section-heading max-w-48 '>
                        <h1>APOU</h1>
                        <img src={theme_pattern} alt='' />
                    </div>
                    <div>
                        <p className='text-xl max-w-md'>I am a software developer with 5 years of experience</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='flex gap-1 md:gap-7 py-2 md:py-4 px-2 md:px-5 rounded-full bg-[#32323B]'>
                        <img src={user_icon} alt='' className='mt-1.5 h-6 md:h-8' />
                        <input type='email' className='w-40 border-none outline-none bg-transparent text-[#a0a0a0] font-outline text-lg' placeholder='Enter your email' /> 
                    </div>
                    <div className='text-xl px-4 md:px-12 py-2 md:py-5 rounded-full bg-custom'>Subscribe</div>
                </div>
            </div>
            <hr className='my-5' />
            <div className='footer-bottom pb-5'>
                <p className='footer-bottom-left'>© 2024 Apou Datto. All rights reserved.</p>
                <div className='footer-bottom-right'>
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;