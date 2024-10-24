import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.svg'

const sortedWorkList = [...mywork_data].sort((a, b) => b.w_no - a.w_no);
const MyWork = () => {
    return (
        <div id="work" className='flex flex-col items-center justify-center gap-12 md:gap-20 my-12 md:my-20 mx-16 md:mx-44'>
            <div className='section-heading'>
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='mywork-container'>
                {sortedWorkList.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default MyWork;