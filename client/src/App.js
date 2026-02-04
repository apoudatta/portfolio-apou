import React from 'react';
import { useState } from 'react';
import Navber from './Components/Navber';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = props => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="body">
        <Navber />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />

        <button className='fixed w-16 h-16 bottom-2 md:bottom-16 right-2 md:right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold'
          onClick={toggleDarkMode}>
          {darkMode ? "LHT" : "DRK"}
        </button>
      </div>
    </div>
  );
};

export default App;