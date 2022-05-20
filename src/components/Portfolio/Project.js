import React, {useState} from 'react'

import PopUp from './PopUp'
import {TiMediaPlayOutline} from 'react-icons/ti'
import {BsEyeFill} from 'react-icons/bs'
import {FiCode} from 'react-icons/fi'

const Project = (props) => 
{
    const [showVideo, setShowVideo] = useState(false)

    const {linkedinURL, videoURL, liveURL, githubURL, title, description} = props;

    return (
        // css file: components/project
        <div className='project'>

            <div className='project__details--container'>
                <h3 className='project__title'>{title}</h3>
                <p className='project__description'>{description}</p>
                <a className='main__button' href={linkedinURL} target="_blank" rel='noreferrer' >
                    Linkedin Post
                </a>
            </div>

            <div className='project__icons'>
                <ul className='social__media--list'>
                     <li className='social__media--item' onClick={() => setShowVideo(true)}>
                        <div className='social__media--border'></div>
                        <span className='social__media--link'>
                            <TiMediaPlayOutline  className='social__media--icon'/>
                        </span>
                    </li> 
                    {liveURL && (
                        <li className='social__media--item'>
                            <div className='social__media--border'></div>
                            <a className='social__media--link' href={liveURL} target="_blank" rel="noreferrer">
                                <BsEyeFill  className='social__media--icon'/>
                            </a>
                        </li>
                    )}
                    <li className='social__media--item'>
                        <div className='social__media--border'></div>
                        <a className='social__media--link' href={githubURL} target="_blank" rel="noreferrer">
                            <FiCode  className='social__media--icon'/>
                        </a>
                    </li>
                </ul>
            </div>

            {showVideo && (
                <PopUp 
                    videoURL={videoURL} 
                    onClose={() => setShowVideo(false)}
                    type="video"    
                />
            )}
        </div>
    )
}

export default Project