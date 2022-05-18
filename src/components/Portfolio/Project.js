import React, {useState} from 'react'

import PopUp from './PopUp'
import {TiMediaPlayOutline} from 'react-icons/ti'
import {BsEyeFill} from 'react-icons/bs'
import {FiCode} from 'react-icons/fi'

const Project = (props) => 
{
    const [showVideo, setShowVideo] = useState(false)

    const {poster, videoURL, liveURL, githubURL, title, description} = props;

    return (
        // css file: components/project
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