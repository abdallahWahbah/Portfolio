import { FiFacebook } from "react-icons/fi";
import {IoLogoGithub} from "react-icons/io";
import {FaLinkedinIn} from 'react-icons/fa';
import {BsBriefcase} from 'react-icons/bs';
import {GoBook} from 'react-icons/go';

import agencyPoster from '../assets/agencyPoster.jpg';
import fashionPoster from '../assets/fashionPoster.avif';
import san3aPoster from '../assets/san3aPoster.avif';
import brandsPoster from '../assets/brandsPoster.jpg';

// MainNavigation Component
export const mainNavigationItems = 
[
    {
        id: 0,
        to: "/home",
        title: "home",
    },
    {
        id: 1,
        to: "/about",
        title: "about",
    },
    {
        id: 2,
        to: "/resume",
        title: "resume",
    },
    {
        id: 3,
        to: "/portfolio",
        title: "portfolio",
    },
    {
        id: 4,
        to: "/contact",
        title: "contact",
    },
]

// HomePage Component
export const socialMediaData =
[
    {
        href: 'https://www.facebook.com/abdowahbah/',
        icon: <FiFacebook className='social__media--icon'/>
    },
    {
        href: 'https://github.com/abdallahWahbah',
        icon: <IoLogoGithub className='social__media--icon'/>
    },
    {
        href: 'https://www.linkedin.com/in/abdallah-wahbah/',
        icon: <FaLinkedinIn className='social__media--icon'/>
    },
    
]

//  About Component
export const aboutListItems = 
[
    {
        key: "Full Name",
        value: "Abdallah Wahbah"
    },
    {
        key: "Age",
        value: 24
    },
    {
        key: "Nationality",
        value: "Egyptian"
    },
    {
        key: "Languages",
        value: "Arabic, English"
    },
    {
        key: "Address",
        value: "El Sheikh Zaid, Al Jizah, Egypt"
    },
    {
        key: "Birthday",
        value: "22-03-1998"
    },
    {
        key: "Marital Status",
        value: "Single"
    },
]

//  Resume Component
export const skills = 
[
    {
        title: "HTML5",
        percentage: 95
    },
    {
        title: "CSS3",
        percentage: 90
    },
    {
        title: "SASS",
        percentage: 95
    },
    {
        title: "Reponsive design",
        percentage: 95
    },
    {
        title: "Javascript",
        percentage: 75
    },
    {
        title: "ReactJS",
        percentage: 80
    },
    {
        title: "Redux",
        percentage: 80
    },
    {
        title: "Git & Github",
        percentage: 80
    },
    
]
//  Resume Component
export const workTimeline = 
{
    header: "Working Experience",
    icon: <BsBriefcase className="timeline__icon"/>,
    data: 
    [
        {
            role: "Software Engineer",
            company: "Inspire for solutions development",
            date: "7/2020 – 9/2020",
            description: `It was a 150 hour training at which we learned: HTML5 & CSS3, Bootstrap, jQuery, Javascript, ES6 and React
            It was a 150 hour training at which we learned: HTML5 & CSS3, Bootstrap, jQuery, Javascript, ES6 and React`
        },
        {
            role: "Frontend Web Training",
            company: "ITI",
            date: "11/2021 - Present",
            description: "It was a 150 hour training at which we learned: HTML5 & CSS3, Bootstrap, jQuery, Javascript, ES6 and React"
        },
    ]
}

//  Resume Component
export const educationTimeline = 
{
    header: "Educational Qualificaitons",
    icon: <GoBook className="timeline__icon"/>,
    data: 
    [
        {
            role: "Bachelor of Engineering",
            company: "Mansoura University",
            date: "2016-2021",
            description: `-Graduated from Computer science and control engineering department with grade of excellent with honor`+
            `-Acheived excellent at graduation project`
        },
        {
            role: "High School",
            company: "Omar Ebn El-Khatab",
            date: "2013-2016",
            description: "-Finished Schoold with percentage of 95.5%"
        },
    ]
}

// Portfolio Component
export const projects =
[
    {
        poster: agencyPoster,
        videoURL: "https://www.youtube.com/embed/WVEHZPI9tG4",
        liveURL: "https://agency-wahbah.netlify.app/",
        githubURL: "https://github.com/abdallahWahbah/Agency",
        title: "Agency template",
        description: "A landing page made using HTML5, CSS3, SASS, js"
    },
    {
        poster: fashionPoster,
        videoURL: "https://www.youtube.com/embed/lL-1FranDDo",
        liveURL: "https://fashion-wahbah.netlify.app/",
        githubURL: "https://github.com/abdallahWahbah/Fashion",
        title: "Fashion template",
        description: "Imitating landing page using HTML5, CSS3, SASS, js"
    },
    {
        poster: san3aPoster,
        videoURL: "https://www.youtube.com/embed/ErrlFSpbIV8",
        githubURL: "https://github.com/abdallahWahbah/San3a-New-Version",
        title: "San3a website",
        description: "A 13-page e-commerce website made using HTML, CSS, SASS, JS , MVC pattern and AXIOS"
    },
    {
        poster: brandsPoster,
        videoURL: "https://www.youtube.com/embed/7znVD9jUnr0",
        githubURL: "https://github.com/abdallahWahbah/Brands",
        title: "Brands",
        description: "A landing page made using HTML5, CSS3, SASS, js"
    },
    
]