import React from 'react'

import aboutImage from '../../assets/main.jpg'
import CV from '../../assets/cv.pdf'
import { aboutListItems } from '../JsonData'
import Header from '../Header'

const About = () => 
{
    return (
        //css file: pages/home, base/typography, pages/about
        <div className='about'>
            <Header title="About Me"/>

            <div className='about__details--container'>
                <div className='about__image--container'>
                    <img className='about__image' src={aboutImage} alt="portfolio"/>
                </div>
                <div className='about__details'>
                    <h2 className='heading__secondary'>I am <span className='heading__secondary--sub'>Abdallah Wahbah</span></h2>
                    <p className='main__paragraph'>
                        I am a Front End Developer. 
                        My role is to write and style the front-end components that meet the requirements of our mocks 
                        and fulfill user stories.
                    </p>
                    <ul className='about__list'>
                        {aboutListItems.map(item => (
                            <li className='about__item' key={item.key}>
                                <span className='about__item--key'>{item.key}</span> 
                                <div className='about__item--value'>{item.value}</div> 
                            </li>
                        ))}
                    </ul>
                    <a href={CV} download className='main__button'>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About