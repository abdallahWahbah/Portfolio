import { FiFacebook } from "react-icons/fi";
import {IoLogoGithub} from "react-icons/io";
import {FaLinkedinIn} from 'react-icons/fa';
import {BsBriefcase} from 'react-icons/bs';
import {GoBook} from 'react-icons/go';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5';
import VerifiedIcon from '@mui/icons-material/Verified';
import * as yup from 'yup';


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
        value: 26
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
        key: "Location",
        value: "El Sheikh Zaid, Al Jizah, Egypt"
    },
    {
        key: "Current Location",
        value: "Riyadh, Saudi Arabia"
    },
]

//  Resume Component
export const skills = 
[
    {
        title: "HTML5",
        image: "/skills/html5.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "CSS3",
        image: "/skills/css3.webp",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "SASS",
        image: "skills/sass.svg",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "Reponsive design",
        image: "skills/responsiveDesgin.svg",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "JavaScript",
        image: "skills/JS.svg",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "ES6",
        image: "skills/es6.svg",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "Axios",
        image: "skills/axios.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "ReactJS",
        image: "skills/reactImage.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "Reach Hooks",
        image: "skills/reactHooks.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "intermediate",
    },
    {
        title: "Redux",
        image: "skills/redux.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "intermediate",
    },
    {
        title: "Context",
        image: "skills/context.png",
         icon: <VerifiedIcon className="skill__icon"/>,
        level: "intermediate",
    },
    {
        title: "Next.js",
        image: "skills/next.webp",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "Git & Github",
        image: "skills/git.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "intermediate",
    },
    {
        title: "MUI",
        image: "skills/mui.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "Formik",
        image: "skills/formik.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "Formik Wizard",
        image: "skills/formikWizard.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "DSA",
        image: "skills/dsa.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "experienced",
    },
    {
        title: "React Native",
        // image: "skills/dsa.png",
        icon: <VerifiedIcon className="skill__icon"/>,
        level: "basics",
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
            role: "Front end developer",
            company: "Inspire for solutions development",
            date: "11/2021 - Present",
            
            // description: `
            
            // As a Junior React Developer with two years of experience, I've contributed to 3 key projects: Taheel, Qiwa, 
            // and BDC (Banque du Caire)
                // - In the Taheel Project, I focused on React development using (MUI) and Axios for UI design and API 
                // communication. I also gained expertise in SASS and (JWT) authentication. 
                // - Transitioning to the BDC Project, I learned Next.js for server-side rendering. 
                // - Building and enhancing a schema builder which concerned about functions that takes JSON schema and 
                // return a reusable component which reduced the lines number extremely. 
                // - Overall, my work has been characterized by a commitment to delivering high-quality solutions and 
                // adapting to new technologies to meet project requirements. 
            // `
            description: {
                head: `
                    As a Junior React Developer with two years of experience, I've contributed to 3 key projects: Taheel, Qiwa, 
                    and BDC (Banque du Caire)`,
                list: [
                    "In the Taheel Project, I focused on React development using (MUI) and Axios for UI design and API communication. I also gained expertise in SASS and (JWT) authentication.",
                    "Transitioning to the BDC Project, I worked on it using Next.js for server-side rendering.",
                    "Building and enhancing a schema builder which concerned about functions that takes JSON schema and return a reusable component which reduced the lines number extremely.",
                    "Overall, my work has been characterized by a commitment to delivering high-quality solutions and adapting to new technologies to meet project requirements.",
                ]
            }
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
            // description: 
            // `-Graduated from Computer science and control engineering department with grade of excellent with honor`+
            // `-Acheived excellent at graduation project`
            description: {
                head: "",
                list: [
                    "Graduated from Computer engineering and systems department with grade of excellent with honor",
                    "Acheived excellent at graduation project"
                ]
            }
        },
        {
            role: "High School",
            company: "Omar Ebn El-Khatab",
            date: "2013-2016",
            // description: "-Finished School with percentage of 95.5%"
            description: {
                head: "",
                list: [
                    "Finished High School with percentage of 95.5%"
                ]
            }
        },
    ]
}

// Portfolio Component
export const projects =
[
    {
        // poster: agencyPoster,
        title: "Agency template",
        description: "A landing page made using HTML5, CSS3, SASS and JS",
        linkedinURL: "https://www.linkedin.com/posts/abdallah-wahbah_hello-everybody-i-tried-to-imitate-a-landing-activity-6851252417552621568-aQ2P?utm_source=linkedin_share&utm_medium=member_desktop_web",
        videoURL: "https://www.youtube.com/embed/WVEHZPI9tG4",
        liveURL: "https://agency-wahbah.netlify.app/",
        githubURL: "https://github.com/abdallahWahbah/Agency",
    },
    {
        // poster: fashionPoster,
        title: "Fashion template",
        description: "Imitating landing page using HTML5, CSS3, SASS and JS",
        linkedinURL: "https://www.linkedin.com/posts/abdallah-wahbah_a-landing-page-using-html-css-js-and-some-activity-6852685246907990016-2iiY?utm_source=linkedin_share&utm_medium=member_desktop_web",
        videoURL: "https://www.youtube.com/embed/lL-1FranDDo",
        liveURL: "https://fashion-wahbah.netlify.app/",
        githubURL: "https://github.com/abdallahWahbah/Fashion",
    },
    {
        // poster: san3aPoster,
        title: "San3a website",
        description: "A 13-page e-commerce website made using HTML, CSS, SASS, JS , MVC pattern and AXIOS",
        linkedinURL: "https://www.linkedin.com/posts/abdallah-wahbah_san3a-project-a-13-page-e-commerce-website-activity-6860633887559811072-LbCg?utm_source=linkedin_share&utm_medium=member_desktop_web",
        videoURL: "https://www.youtube.com/embed/ErrlFSpbIV8",
        githubURL: "https://github.com/abdallahWahbah/San3a-New-Version",
    },
    {
        // poster: brandsPoster,
        title: "Brands",
        description: `CRUD operations using React, Routing, Redux Toolkit, MUI, Formik and Expressjs with Mongodb`,
        linkedinURL: "https://www.linkedin.com/posts/abdallah-wahbah_practicing-crud-operations-in-react-routing-activity-6909139877238353920-u873?utm_source=linkedin_share&utm_medium=member_desktop_web",
        videoURL: "https://www.youtube.com/embed/7znVD9jUnr0",
        githubURL: "https://github.com/abdallahWahbah/Brands",
    },
    
]

// Contact Component
export const contactData = 
[
    {
        icon: <BsTelephone />,
        title: "Phone",
        data:
        [
            {
                href: "https://api.whatsapp.com/send?phone=201092717902",
                linkTitle: "01092717902"
            }
        ]
        
    },
    {
        icon: <AiOutlineMail />,
        title: "Email",
        data:
        [
            {
                href: "mailto:abdowahbah@gmail.com",
                linkTitle: "abdowahbah@gmail.com"
            },
            {
                href: "mailto:abdowahbah123@yahoo.com",
                linkTitle: "abdowahbah123@yahoo.com"
            },
            {
                href: "https://m.me/abdowahbah",
                linkTitle: "facebook: abdowahbah"
            },
            
        ]
        
    },
    {
        icon: <IoLocationOutline />,
        title: "Address",
        data:
        [
            {
                type: "address",
                linkTitle: "El Sheikh Zaid, Al Jizah, Egypt"
            },
            {
                type: "address",
                linkTitle: "Mansoura, Dakahlia, Egypt"
            },
            {
                type: "address",
                linkTitle: "Riyadh, Saudi Arabia"
            },
            
        ]
        
    },
    
]

// Form Component
export const ContactSchema = 
[
    {
        name: "name",
        id: "name",
        type: "text",
        label: "Enter your name*",
        initialValue: "",
        validator: yup.string().min(4).required("Name is required")
    },
    {
        name: "email",
        id: "email",
        type: "email",
        label: "Enter your email*",
        initialValue: "",
        validator: yup.string().email("email must be valid").required("Email is required")
    },
    {
        name: "message",
        id: "message",
        label: "Enter your message*",
        rows: 8,
        cols: 50,
        initialValue: "",
        validator: yup.string().min(10, "Your Message should consist of at least 10 letters").required("Message is required"),
    },
    {
        name: "button",
        label: "Send Mail",
        type: "submit"
    }
]