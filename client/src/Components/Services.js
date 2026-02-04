import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import Services_Data from '../assets/services_data';
import arrow_icon from '../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div id="services" className='services'>
            <div className='section-heading'>
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='services-container'>
                {Services_Data.map((service, index) => {
                    return <div key={index} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className='flex flex-row gap-5 items-center mt-5 hover:gap-7 duration-500 cursor-pointer hover:text-white'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" className='w-4 md:w-5' />
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Services;