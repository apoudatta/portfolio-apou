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
            <div className='flex flex-col md:flex-row gap-10 md:gap-12'>
                <div className='w-full md:w-1/2'>
                    <img className='' src={profile_image} alt="" />
                </div>
                <div className="flex flex-col gap-10 md:gap-12 w-full md:w-1/2">
                    <div className='flex flex-col gap-5 text-md md:text-xl font-medium'>
                        <p>
                            I’m a Full-Stack Software Engineer with 7+ years of experience delivering production-grade web
                            applications. I have experience across the full software development lifecycle (SDLC),
                            from requirements and system design through implementation, testing, deployment, and ongoing maintenance.
                        </p>

                        <p>
                            My backend expertise includes PHP (Laravel, CodeIgniter), designing RESTful APIs, building scalable
                            database schemas, and optimizing performance with MySQL and MongoDB. I’m experienced with authentication
                            and authorization flows, API integrations, background jobs, and maintaining clean, testable codebases.
                        </p>

                        <p>
                            On the frontend, I build responsive, accessible user interfaces using React.js and Next.js, with Tailwind CSS
                            for consistent design systems. I focus on component reusability, performance optimization, and clean UI
                            architecture aligned with product requirements.
                        </p>

                        <p>
                            I’m comfortable working in collaborative engineering environments with Git-based workflows, code reviews,
                            and CI/CD-driven delivery. I prioritize reliability, security best practices, and clear communication to
                            ensure predictable outcomes and high-quality releases.
                        </p>

                        <p>
                            I’m currently open to opportunities where I can contribute to building scalable products, improving system
                            quality, and delivering measurable impact through well-engineered solutions.
                        </p>
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
                    <div className='min-w-36 text-2xl font-medium'>Next JS</div>
                    <div className='w-2/3'>
                        <hr style={{ width: "50%" }} />
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
                    <h1>7+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;