import React, {useState} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import {MdOutlineLightMode} from 'react-icons/md';

import HomePage from './Home/HomePage';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import MainNavigation from './MainNavigation';

const App = () => 
{
    const [darkMode, setDarkMode] = useState(false);
    const toggle = () =>
    {
        if(darkMode) document.body.classList.remove("dark")
        else document.body.classList.add("dark")
        setDarkMode(!darkMode)
    }
    return (
        <React.Fragment>
            
            <span>
                <MdOutlineLightMode onClick={toggle} style={{position: "fixed", right: "0", top: "0", width: "100px", height: "100px", zIndex: "100000", color: "yellow"}}/>
            </span>
            
            <MainNavigation />

            <Routes>
                <Route path="/" element={<Navigate to="home"/>} />
                <Route path="/home" element={<HomePage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/Resume" element={<Resume />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </React.Fragment>
    )
}

export default App