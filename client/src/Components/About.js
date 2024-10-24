import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg'
import profile_image from '../assets/profile_img.jpg'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className='section-heading'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
                <div className='w-full md:w-1/2'>
                    <img className='' src={profile_image} alt="" />
                </div>
                <div className="flex flex-col gap-10 md:gap-20 w-full md:w-1/2">
                    <div className='flex flex-col gap-5 text-lg md:text-2xl font-medium'>
                        <p>I am a passionate and skilled web developer from Bangladesh with a strong foundation in HTML, CSS, Tailwind CSS, and Bootstrap for creating responsive and visually appealing designs. I have extensive experience in backend development using PHP, Laravel, and working with both SQL and MongoDB databases. My proficiency with Git ensures streamlined version control and collaborative workflows.</p>
                        <p>I'm eager to take on new challenges and look forward to providing exceptional service in my future freelancing journey.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 w-4/5'>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>HTML & CSS</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "95%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>Tailwind CSS</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "80%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>JavaScript</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "60%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>React JS</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "60%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>PHP</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "90%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>Laravel</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "70%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>MySQL</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "95%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>RESTful API</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "50%" }} />
                    </div>
                </div>
                <div className='about-skill'>
                    <div className='min-w-36 text-2xl font-medium'>GitHub</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "75%" }} />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-around mb-20'>
                <div className='about-achievement'>
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>15+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>7+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;