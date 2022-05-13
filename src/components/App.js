import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import HomePage from './HomePage';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import MainNavigation from './MainNavigation';

const App = () => 
{
    return (
        <React.Fragment>
        
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