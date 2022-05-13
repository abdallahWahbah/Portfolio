import React, {useEffect, useRef} from 'react'

import { init } from 'ityped'
import { FiFacebook } from "react-icons/fi";
import {IoLogoGithub} from "react-icons/io";
import {FaLinkedinIn} from 'react-icons/fa';

import videoBackground from '../assets/particles-3.mp4'

const HomePage = () => 
{
    const headingRef = useRef();

    useEffect(() =>
    {
        console.log(headingRef)
        init(headingRef.current, { 
            showCursor: true, 
            strings: ['Abdallah Wahbah'],
            loop: false,
        })
    }, [])

    return (
        //css file: pages/home, base/typography
        <div className='home'>
            <video className="home__video--background" autoPlay muted loop>
                <source src={videoBackground} type="video/mp4" />
                <source src={videoBackground} type="video/wemb"></source>
                Your browser is not supported to play this video in the background
            </video>
            <div className='home__container'>
                <div className='heading__primary'>
                    Hi, I am <span className='heading__primary--sub' ref={headingRef}></span>
                </div>
                <p className='home__about'>
                    I am a Front End Developer. 
                    My role is to write and style the front-end components that meet the requirements of our mocks 
                    and fulfill user stories.
                </p>
                <ul className='social__media--list'>
                    <li  className='social__media--item'>
                        <div className='social__media--border'></div>
                        <a href='https://www.facebook.com/abdowahbah/' target="_blank" rel="noreferrer" className='social__media--link'>
                            <FiFacebook className='social__media--icon'/>
                        </a>
                    </li>
                    <li  className='social__media--item'>
                        <div className='social__media--border'></div>
                        <a href='https://github.com/abdallahWahbah' target="_blank" rel="noreferrer" className='social__media--link'>
                            <IoLogoGithub className='social__media--icon'/>
                        </a>
                    </li>
                    <li  className='social__media--item'>
                        <div className='social__media--border'></div>
                        <a href='https://www.linkedin.com/in/abdallah-wahbah/' target="_blank" rel="noreferrer" className='social__media--link'>
                            <FaLinkedinIn className='social__media--icon'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage