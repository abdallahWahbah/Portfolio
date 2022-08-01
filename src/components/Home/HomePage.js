import React, {useEffect, useRef} from 'react'

import { init } from 'ityped'
import videoBackground from '../../assets/particles-3.mp4'
import { socialMediaData } from '../JsonData'

const HomePage = () => 
{
    const headingRef = useRef();

    useEffect(() =>
    {
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
                    {socialMediaData.map(item => (
                        <li className='social__media--item' key={item.href}>
                            <a href={item.href} target="_blank" rel="noreferrer" className='social__media--link'>
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage