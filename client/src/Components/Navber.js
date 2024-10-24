import React, { useState, useRef } from 'react';
import theme_pattern from '../assets/theme_pattern.svg'
import underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navber = () => {

    const [menu, SetMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }

    return (
        <nav className='navbar'>
            
            <div className='relative'>
                <h1 className='py-0 px-0 md:px-7 text-5xl xl:text-6xl font-outline font-semibold'>APOU</h1>
                <img src={theme_pattern} alt='' className='bottom-0 w-9/12 absolute md:bottom-1 right-0 md:right-4 -z-10 md:w-7/12 xl:w-2/3' />
            </div>


            <img src={menu_open} onClick={openMenu} alt='' className='block md:hidden fixed right-8' />
            
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt='' className="block md:hidden relative top-7 left-72 w-7" />
                <li>
                    <AnchorLink href='#home'>
                        <p onClick={() => SetMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink offset={50} href='#about'>
                        <p onClick={() => SetMenu("about")}>About Me</p>
                    </AnchorLink>
                    {menu === "about" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink offset={50} href='#services'>
                        <p onClick={() => SetMenu("services")}>Services</p>
                    </AnchorLink>
                    {menu === "services" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink offset={50} href='#work'>
                        <p onClick={() => SetMenu("work")}>Portfolio</p>
                    </AnchorLink>
                    {menu === "work" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink offset={50} href='#contact'>
                        <p onClick={() => SetMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" ? <img src={underline} alt='' /> : <></>}
                </li>
            </ul>
            <div className='nav-connect'>
                <AnchorLink offset={50} href='#contact'>
                    Connect With Me
                </AnchorLink>
                
            </div>
        </nav>
    );
};

export default Navber;