import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import HomePage from './Home/HomePage';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import MainNavigation from './MainNavigation';
import DarkMode from './DarkMode';

const App = () => 
{
    return (
        <React.Fragment>

            <DarkMode />

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