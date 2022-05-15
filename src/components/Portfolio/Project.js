import React, {useState} from 'react'

import ProjectVideo from './ProjectVideo'
import {TiMediaPlayOutline} from 'react-icons/ti'
import {BsEyeFill} from 'react-icons/bs'
import {FiCode} from 'react-icons/fi'

const Project = (props) => 
{
    const [showVideo, setShowVideo] = useState(false)

    const {poster, videoURL, liveURL, githubURL, title, description} = props;

    return (
        <div className='project'>
            <div className='project__image--container'>
                <img className='project__image' src={poster} alt='project'/>
                <div className='project__hover'>
                    <div className='project__icons'>
                        <div className='project__icon' onClick={() => setShowVideo(true)}>
                            <TiMediaPlayOutline />
                        </div>
                        {liveURL && (
                            <div className='project__icon'  onClick={() =>  window.open(liveURL, '_blank')}>
                                <BsEyeFill/>
                            </div>
                        )}
                        <div className='project__icon'  onClick={() =>  window.open(githubURL, '_blank')}>
                            <FiCode/>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='project__title'>{title}</h3>
            <p className='project__description'>{description}</p>

            {showVideo && (
                <ProjectVideo videoURL={videoURL} onClose={() => setShowVideo(false)}/>
            )}
        </div>
    )
}

export default Project